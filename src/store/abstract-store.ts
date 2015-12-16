/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import Table = require('./abstrac-table');

interface AbstractStore {
    tables:Table[];
}

export = AbstractStore