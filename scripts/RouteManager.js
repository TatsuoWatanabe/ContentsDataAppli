define(["require", "exports", 'util/Trace', '../pages/contents/contents'], function(require, exports, Trace, contents) {
    var RouteManager = (function () {
        function RouteManager() {
        }
        Object.defineProperty(RouteManager, "state", {
            get: function () {
                return RouteManager._state;
            },
            enumerable: true,
            configurable: true
        });

        RouteManager.contents = function (id) {
            RouteManager.state.page = RouteManager.pages.contents;
            RouteManager.state.id = Number(id);
            RouteManager.state.uri = './pages/contents/contents.html';
            RouteManager.state.pageModule = contents;
            Trace.log(RouteManager.state, 'RouteManager.contents()');
        };
        RouteManager.baseState = {
            page: '',
            id: 0,
            uri: '',
            pageModule: { initialize: function () {
                } }
        };

        RouteManager._state = RouteManager.baseState;

        RouteManager.pages = {
            contents: 'contents'
        };
        return RouteManager;
    })();

    
    return RouteManager;
});
//# sourceMappingURL=RouteManager.js.map
