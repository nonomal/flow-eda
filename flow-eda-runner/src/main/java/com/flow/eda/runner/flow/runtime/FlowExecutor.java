package com.flow.eda.runner.flow.runtime;

import com.flow.eda.common.exception.InternalException;
import com.flow.eda.runner.flow.data.FlowData;
import com.flow.eda.runner.flow.node.Node;
import com.flow.eda.runner.flow.node.NodeTypeEnum;
import org.bson.Document;

import java.lang.reflect.Constructor;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import static com.flow.eda.common.utils.CollectionUtil.*;

/** 单条流程的执行者 */
public class FlowExecutor {
    /** 用于并发执行流程中的多个节点的线程池 */
    private final ExecutorService threadPool = Executors.newCachedThreadPool();
    /** 存储当前流程的完整流节点数据 */
    private final List<FlowData> flowData;

    public FlowExecutor(List<FlowData> flowData) {
        this.flowData = flowData;
    }

    /** 开始执行流程 */
    public void start(FlowData startNode) {
        this.run(startNode);
    }

    /** 执行当前节点 */
    private void run(FlowData currentNode) {
        try {
            Class<? extends Node> clazz = NodeTypeEnum.getClazzByNode(currentNode);
            Constructor<?> constructor = clazz.getConstructor(Document.class);
            Node nodeInstance = (Node) constructor.newInstance(currentNode.getParams());
            nodeInstance.run(() -> this.runNext(currentNode));
        } catch (Exception e) {
            throw new InternalException(e.getMessage());
        }
    }

    /** 节点数据执行后回调，继续执行下一节点 */
    private void runNext(FlowData currentNode) {
        List<FlowData> nextNodes = getNextNode(currentNode);
        // 多个下游节点，需要并行执行
        forEach(nextNodes, t -> threadPool.execute(() -> this.run(t)));
    }

    private List<FlowData> getNextNode(FlowData currentNode) {
        List<String> ids =
                filterMap(flowData, n -> currentNode.getId().equals(n.getFrom()), FlowData::getTo);
        if (isNotEmpty(ids)) {
            return filter(flowData, n -> ids.contains(n.getId()));
        }
        return null;
    }
}
