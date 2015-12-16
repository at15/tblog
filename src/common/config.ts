/**
 * Created by gpl on 15/12/16.
 */
// a class that force certain attr set in runtime

class Config {
    public setAttributes(config:Object,
                         attributes:Array<string>, required:boolean = true) {
        // loop all the attributes
        for (var attribute of attributes) {
            if (typeof config[attribute] === 'undefined') {
                throw new TypeError(attribute + ' is not defined');
            }
        }
    }
}

export = Config;