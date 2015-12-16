/**
 * Created by gpl on 15/12/16.
 */
'use strict';
import Criteria = require('./criteria');

class Query {
    private table:string;
    // FIXME: criteria is the plural form for criterion
    private criteria:Criteria[];

    constructor() {
        this.criteria = [];
    }

    // allow chain method
    setTable(tableName:string):Query {
        this.table = tableName;
        return this;
    }

    getTable() {
        return this.table;
    }

    where(k:string, v:string|number):Query {
        this.criteria.push(new Criteria(k, v));
        return this;
    }

    match(obj:Object):boolean {
        // apply all the criteria
        for (var c of this.criteria) {
            if (!c.match(obj)) {
                return false;
            }
        }
        return true;
    }
}

export = Query;