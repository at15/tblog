/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Query = require('./query');

interface AbstractTable {
    name:string;
    // id, name, use to build index
    identity:string;
    index:{ [key:string]:Object; }
    data:Object[];

    insert(q:Query);
}

export = AbstractTable