define(["require", "exports", 'Router', 'RouteManager', 'util/Trace'], function(require, exports, Router, RouteManager, Trace) {
    function initialize() {
        var router = new Router();
        var onRoute = function () {
            Trace.log('Backbone.history route event fired.', 'app.ts');
            WinJS.Navigation.navigate(RouteManager.state.uri).done(function () {
                Trace.log('WinJS.Navigation.navigate done.', 'app.ts');
                RouteManager.state.pageModule.initialize();
            });
        };
        Backbone.history.start();
        Backbone.history.on('route', onRoute);
        document.addEventListener('deviceready', onDeviceReady, false);

        WinJS.UI.processAll().done(function () {
            onRoute();
            // WinJS.UI.NavBar
            //var $navBar = $('#createNavBar');
            //var navBar  = $navBar[0].winControl;
            //$navBar.on('beforehide beforeshow', function(ev) {
            //    var marginTop = (navBar.hidden) ? '50px' : '100px';
            //    $('#pageHost').animate({ marginTop: marginTop }, 100);
            //});
            //navBar.addEventListener('invoked', function(ev) {
            //    var navbarCommand: WinJS.UI.NavBarCommand = ev.detail.navbarCommand;
            //    if (!navbarCommand.location) {
            //        var lbl  = navbarCommand.label;
            //        var page = lbl.charAt(0).toLowerCase() + lbl.slice(1);
            //        WinJS.Navigation.navigate('pages/' + page + '/' + page + '.html');
            //    }
            //});
            //navBar.show();
        });
    }
    exports.initialize = initialize;

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause, false);
        document.addEventListener('resume', onResume, false);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }

    $(function () {
        return exports.initialize();
    });
});
//# sourceMappingURL=app.js.map
