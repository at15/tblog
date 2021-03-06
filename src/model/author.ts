/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Config = require("../common/config");

// the full author config
interface AuthorConfig {
    name: string,
    avatar: string, // should have a
    email?: string, // email is also not required, you could just have a name
    github?: string,
    facebook?: string,
    twitter?: string,
    weibo?: string
}

class Author extends Config {
    public name:string = '';
    public avatar:string = '';
    public email:string = '';
    public github:string = '';
    public facebook:string = '';
    public twitter:string = '';
    public weibo:string = '';

    constructor(config:AuthorConfig) {
        super(config);
        this.setRequiredAttributes(config, [
            'name', 'avatar'
        ]);
        this.setOptionalAttributes(config, [
            'email', 'github', 'facebook', 'twitter', 'weibo'
        ]);
    }
}


export = Author;