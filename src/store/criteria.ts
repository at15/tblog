/**
 * Created by gpl on 15/12/16.
 */
'use strict';

class Criteria {
    private k;
    private v;
    private o;

    constructor(k:string, v:any, o:string = '=') {
        this.k = k;
        this.v = v;
        this.o = o;
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

        if (typeof this.o === 'undefined' || this.o === '=') {
            return strict ? obj[this.k] === this.v : obj[this.k] == this.v;
        }

        if (this.o === '>') {
            return obj[this.k] > this.v;
        }

        if (this.o === '<') {
            return obj[this.k] < this.v;
        }

        // TODO: if o is function, call it to allow custom compare
        return false;
    }


}

export = Criteria;