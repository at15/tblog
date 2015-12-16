/**
 * Created by gpl on 15/12/16.
 */
'use strict';

import AbstractStore = require("./abstract-store");
import AbstractTable = require("./abstrac-table");

class MemStore implements AbstractStore {
    tables:AbstractTable[];
}

export = MemStore;