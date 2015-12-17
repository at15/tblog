declare module 'cli-table' {
    export = class Table {
        constructor(o:Object);

        // FIXME: support multiple parameters
        push(o:Array<any>);
    }
}