/**
 * Created by gpl on 15/12/16.
 */
'use strict';
// a class that force certain attr set in runtime

class Config {
    public setAttributes(config:Object,
                         attributes:string[], required:boolean = true) {
        // loop to check and set all the attributes
        for (var attribute of attributes) {
            if (typeof config[attribute] === 'undefined') {
                if (required) {
                    throw new TypeError(attribute + ' is not defined');
                }
                continue;
            }
            this[attribute] = config[attribute];
        }
    }

    public setRequiredAttributes(config:Object,
                                 attributes:string[]) {
        this.setAttributes(config, attributes, true);
    }

    public setOptionalAttributes(config:Object,
                                 attributes:string[]) {
        this.setAttributes(config, attributes, false);
    }
}

export = Config;