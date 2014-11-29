import M     = require('RouteManager');
import Trace = require('util/Trace');

class Router extends Backbone.Router {

    public routes() {
        return {
            'contents(/:id)': this.contents,
            '*default'      : this.contents
        };
    }

    public contents(param: string) { M.contents(param); }
}

export = Router;