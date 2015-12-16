/**
 * Created by gpl on 15/12/16.
 */
'use strict';

class Query {
    private table:string;
    private criterias;

    // allow chain method
    setTable(tableName:string):Query {
        this.table = tableName;
        return this;
    }

    getTable() {
        return this.table;
    }
}

export = Query;