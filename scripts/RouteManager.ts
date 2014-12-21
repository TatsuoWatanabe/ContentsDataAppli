import Trace    = require('util/Trace');
import Url      = require('util/Url');
import contents = require('pages/contents');

class RouteManager {

    // --- readonly property state ---
    private static _state = {
        page      : '',
        id        :  0,
        html      : '',
        pageModule: { initialize: (state: typeof RouteManager.state) => {} }
    };
    public static get state() { return RouteManager._state; }
    // -------------------------------

    private static pages = {
        contents: 'contents'
    };

    public static contents(id: string = '') {
        RouteManager.state.page       = RouteManager.pages.contents;
        RouteManager.state.id         = Number(id);
        RouteManager.state.html       = Url.contentsHtml;
        RouteManager.state.pageModule = contents;
        Trace.log(RouteManager.state, 'RouteManager.contents()');
    }

    /** initialize the page. */
    public static initPage() {
        RouteManager.state.pageModule.initialize(RouteManager.state);
    }
}

export = RouteManager;
