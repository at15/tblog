/**
 * Created by gpl on 15/12/16.
 */
'use strict';
import Config = require('../common/config');


// the full article config
interface ArticleConfig {
    title:string,
    author:string,
    keywords?:string[]
}

class Article extends Config {
    constructor(config:ArticleConfig) {
        super(config);
        this.setRequiredAttributes(config, [
            'title', 'author'
        ]);
        this.setOptionalAttributes(config, [
            'keywords'
        ]);
    }

    isValid():boolean {
        return false;
    }
}

export = Article;