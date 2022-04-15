let ws = {};

// 建立连接，监听消息并进行回调
function onOpen(id, callback) {
    if (!ws || Object.keys(ws) === 0 || !ws[id]) {
        const url = 'ws://localhost:8088/ws/flow/node/' + id;
        const socket = new WebSocket(url);
        socket.onmessage = function (msg) {
            callback(msg.data);
        };
        ws[id] = socket;
    }
}

// 关闭连接
function onClose() {
    Object.keys(ws).forEach(k => ws[k].close());
    ws = null;
}

export {onOpen, onClose}
