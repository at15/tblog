/**
 * Created by gpl on 15/12/16.
 */
'use strict';

class Criteria {
    private k;
    private v;
    private o;

    constructor(k:string, v:any, o:((Object) =>boolean)|string = '=') {
        this.k = k;
        this.v = v;
        this.o = o;
        //console.log('operator in constructor is ', o);
        //console.log('this.o is ', this.o);
    }

    match(obj:Object):boolean {
        return this.matchEx(obj, false);
    }

    matchStrict(obj:Object):boolean {
        return this.matchEx(obj, true);
    }

    matchEx(obj:Object, strict:boolean):boolean {
        if (typeof obj === 'undefined' ||
            typeof obj[this.k] === 'undefined') {
            return false;
        }

        var operator = this.o;

        //console.log('operator in match is ', operator);

        if (typeof operator === 'undefined' || operator === '=') {
            return strict ? obj[this.k] === this.v : obj[this.k] == this.v;
        }

        if (operator === '>') {
            return obj[this.k] > this.v;
        }

        if (operator === '>=') {
            return obj[this.k] >= this.v;
        }

        if (operator === '<') {
            return obj[this.k] < this.v;
        }

        if (operator === '<=') {
            return obj[this.k] <= this.v;
        }

        if (typeof operator === 'function') {
            return operator(obj[this.k]);
        }
        return false;
    }


}

export = Criteria;