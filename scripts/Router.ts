﻿import Backbone     = require('backbone');
import RouteManager = require('RouteManager');
import Trace        = require('util/Trace');

class Router extends Backbone.Router {

    public routes() {
        return {
            'contents(/:id)': this.contents,
            '*default'      : this.contents
        };
    }

    public contents(param: string) { RouteManager.contents(param); }
}

export = Router;