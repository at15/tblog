/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Config = require('../common/config');
import AbstractTable = require('./abstract-table');
import Query = require('./query');


interface TableDef {
    name:string,
    identity:string
}

class MemTable extends Config implements AbstractTable {
    name:string;
    identity:string;
    index:{ [key:string]:Object; } = {};
    data:Object[] = [];

    constructor(config:TableDef) {
        super();
        this.setAttributes(config, ['name', 'identity']);
    }

    insert(q:Query) {
        // TODO: maybe add a assert?
        if (typeof q === 'undefined') {
            throw new TypeError('query is undefined');
        }
        if (null !== q.getData()) {
            this.data.push(q.getData());
        }
        // TODO: warn when data is empty
    }
}

export = MemTable;