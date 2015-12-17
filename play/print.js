/**
 * Created by gpl on 15/12/17.
 */
var TablePrinter = require('cli-table');
var table = new TablePrinter({
    head: ['TH 1 label', 'TH 2 label'],
    //chars: {'mid': '<', 'left-mid': '>', 'mid-mid': '-', 'right-mid': '-'},
    style: {
        head: ['cyan'],
        // grey is not showing ... 
        border: ['cyan']
    }
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['First value', 'Second value']
    , ['First value', 'Second value']
);

console.log(table.toString());

var table2 = new TablePrinter();
table2.push(
    {'Some key': 'Some value'}
    , {'Another key': 'Another value'}
);

console.log(table2.toString());