/**
 * Created by gpl on 15/12/16.
 */
'use strict';

class Alias {
    private map:{};

    constructor(config:{}) {
        this.map = config;
    }

    get(name:string):string {
        if (typeof this.map[name] === 'string') {
            return this.map[name];
        }
        // TODO: maybe we should have a warning?
        return name;
    }
}


export = Alias;