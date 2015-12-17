/**
 * Created by gpl on 15/12/17.
 */
'use strict';

import AbstractTable = require('../store/abstract-table');
import TablePrinter = require('cli-table');

class Print {
    static table(t:AbstractTable) {
        // instantiate
        var table = new TablePrinter({
            head: ['TH 1 label', 'TH 2 label']
            , colWidths: [100, 200]
        });

        // table is an Array, so you can `push`, `unshift`, `splice` and friends
        table.push(
            ['First value', 'Second value']
            , ['First value', 'Second value']
        );

        console.log(table.toString());
    }
}

export = Print;