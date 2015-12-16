/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Mode = require('./mode');
import AbstractStore = require("./abstract-store");
import AbstractTable = require("./abstract-table");
import Query = require("./query");


class MemStore implements AbstractStore {
    tables:AbstractTable[];
    mode:Mode = Mode.Develop;

    query(q:Query):Object[] {
        // check if table exists
        if (!this.tableExists(q.getTable())) {
            // TODO: log warning
            return [];
        }
        var result = [];
        // check the data in table
        // if we are using index
        // return empty array by default
        return result;
    }

    private tableExists(tableName:string):boolean {
        if (typeof tableName === 'undefined') {
            return false;
        }
        for (var table of this.tables) {
            if (tableName === table.name) {
                return true;
            }
        }
        return false;
    }

    private useIndex(table:AbstractTable, query:Query):boolean {
        return false;
    }
}

export = MemStore;