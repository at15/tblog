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

    constructor() {
        this.tables = [];
    }

    query(q:Query):Object[] {
        // check if table exists
        if (!this.tableExists(q.getTable())) {
            throw new TypeError('table ' + q.getTable() + ' does not exist');
        }

        // check the data in table
        var result = [];
        var table = this.getTable(q.getTable());

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
        return result;
    }

    getTable(tableName:string):AbstractTable {
        for (var table of this.tables) {
            if (tableName === table.name) {
                return table;
            }
        }
        throw new RangeError('table ' + tableName + ' not found');
    }

    insert(q:Query) {
        if (!this.tableExists(q.getTable())) {
            throw new Error('table ' + q.getTable() + ' not found');
        }
        return this.getTable(q.getTable()).insert(q);
    }

    tableExists(tableName:string):boolean {
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

    createTable(table:AbstractTable) {
        if (this.tableExists(table.name)) {
            throw new Error(table.name + ' already exists');
        }
        // TODO: may use deep copy ?
        this.tables.push(table);
    }

    private canUseIndex(table:AbstractTable, query:Query):boolean {
        return false;
    }
}

export = MemStore;