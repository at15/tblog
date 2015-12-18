/**
 * Created by gpl on 15/12/17.
 */
// https://nodejs.org/docs/v4.2.3/api/repl.html
var repl = require('repl');

var r = repl.start({
    prompt: 'Node.js via stdin> ',
    input: process.stdin,
    output: process.stdout
});

var context = r.context;

var k = {foo: 'bar'};
// control what is shown in the repo
k.inspect = function () {
    return 'fff';
};

context.m = 'mie';
context.k = k;

// we can the custom repl to handle some tasks