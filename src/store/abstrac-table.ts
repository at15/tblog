/**
 * Created by gpl on 15/12/16.
 */
'use strict';

interface AbstractTable {
    identity:string;
    index:{ [key:string]:Object; }
}

export = AbstractTable