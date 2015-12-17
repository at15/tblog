/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Mode = require('./mode');
import AbstractTable = require('./abstract-table');
import Query = require("./query");


interface AbstractStore {
    tables:AbstractTable[];
    mode:Mode;
    query(q:Query): Object[];
    getTable(name:string):AbstractTable;
}

export = AbstractStore