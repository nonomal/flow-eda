package com.flow.eda.common.http;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PageRequest {
    /** 默认每页10条 */
    private int limit = 10;
    /** 默认从第1页开始 */
    private int page = 0;

    public int getStart() {
        return page * limit;
    }
}