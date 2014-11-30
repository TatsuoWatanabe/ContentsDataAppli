﻿import Trace    = require('util/Trace');
import contents = require('../pages/contents/contents');

class RouteManager {

    public static baseState = {
        page      : '',
        id        :  0,
        uri       : '',
        pageModule: { initialize: (state: typeof RouteManager.state) => {} }
    };

    // --- readonly property state ---
    private static _state = RouteManager.baseState;
    public static get state() { return RouteManager._state; }
    // -------------------------------

    private static pages = {
        contents: 'contents'
    };

    public static contents(id: string) {
        RouteManager.state.page       = RouteManager.pages.contents;
        RouteManager.state.id         = Number(id);
        RouteManager.state.uri        = './pages/contents/contents.html';
        RouteManager.state.pageModule = contents;
        Trace.log(RouteManager.state, 'RouteManager.contents()');
    }

    /** initialize the navigated page. */
    public static initPage() {
        RouteManager.state.pageModule.initialize(RouteManager.state);
    }
}

export = RouteManager;