/**
 * Created by gpl on 15/12/17.
 */
'use strict';

import AbstractTable = require('../store/abstract-table');
import TablePrinter = require('cli-table');
import _ = require('lodash');

class Print {
    static table(t:AbstractTable) {
        // instantiate
        var printer = new TablePrinter({
            style: {
                head: ['cyan'],
                // grey is not showing in my theme ...
                border: ['cyan']
            }
        });

        // just show all the data, yeah.
        for (var r of t.data) {
            printer.push(
                // TODO: iteration order is not guaranteed
                _.values(r)
            );
        }

        console.log('Table: ' + t.name);
        console.log(printer.toString());
    }
}

export = Print;