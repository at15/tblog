/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import AbstractTable = require("./abstrac-table");

class MemTable implements AbstractTable {
    identity:string;
    index:{ [key:string]:Object; }
}

export = MemTable;