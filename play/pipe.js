/**
 * Created by gpl on 15/12/17.
 */
// https://github.com/substack/stream-handbook

var Readable = require('stream').Readable;
var rs = new Readable();
rs.push('mie ');
rs.push('aa\n');
rs.push(null);
//rs.push('ha ha'); null is EOF, this will trigger error ...

rs.pipe(process.stdout);