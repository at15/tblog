/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import AbstractTable = require("./abstract-table");

class MemTable implements AbstractTable {
    name:string;
    identity:string;
    index:{ [key:string]:Object; }
}

export = MemTable;