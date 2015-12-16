/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import AbstractTable = require("./abstract-table");
import Config = require('../common/config');


interface TableDef {
    name:string,
    identity:string
}

class MemTable extends Config implements AbstractTable {
    name:string;
    identity:string;
    index:{ [key:string]:Object; };
    data:Object[];

    constructor(config:TableDef) {
        super();
        this.setAttributes(config, ['name', 'identity']);
    }
}

export = MemTable;