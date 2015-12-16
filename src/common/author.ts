/**
 * Created by gpl on 15/12/16.
 */
'use strict';

module TBlog.common {
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

    export class Author {
        public name:string = '';
        public avatar:string = '';
        public email:string = '';
        public github:string = '';
        public facebook:string = '';
        public twitter:string = '';
        public weibo:string = '';

        constructor(config:AuthorConfig) {
            // assign value from config, TODO: may use lodash?
            this.name = config.name;
            this.avatar = config.avatar;
            if (typeof config.email === 'string') {
                this.email = config.email;
            }
            if (typeof config.github === 'string') {
                this.github = config.github;
            }
        }
    }
}

export = TBlog.common.Author;