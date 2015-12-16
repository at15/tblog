/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import _ = require('lodash');
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

        // check the data in table
        var result = [];
        var table = this.tables[q.getTable()];


        // TODO: use index
        if (this.canUseIndex(table, q)) {

        }

        // we just loop through all the data ...
        for (var row of table.data) {
            if (q.match(row)) {
                // TODO:should use shallow copy? or deep copy?
                result.push(_.cloneDeep(row))
            }
        }

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

    private canUseIndex(table:AbstractTable, query:Query):boolean {
        return false;
    }
}

export = MemStore;