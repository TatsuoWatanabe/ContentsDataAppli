import Router       = require('Router');
import RouteManager = require('RouteManager');
import Trace        = require('util/Trace');
import navigator    = require('navigator');

class app {
    public static initialize() {
        Trace.log('app.initialize', 'app.ts');
        document.addEventListener('deviceready', app.onDeviceReady, false);
        navigator.initialize();
        var router  = new Router();
        var onRoute = () => {
            RouteManager.initPage();
            WinJS.Navigation.navigate(RouteManager.state.html).done(() => {
                Trace.log('WinJS.Navigation.navigate done.', 'app.ts');
            });
        };
        Backbone.history.start();
        Backbone.history.on('route', onRoute);

        WinJS.UI.processAll().done(() => {
            Trace.log('WinJS.UI.processAll().done', 'app.ts');
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

    private static onDeviceReady() {
        Trace.log('device ready.', 'app.ts :: onDeviceReady');
        // Handle the Cordova pause and resume events
        document.addEventListener('pause',  app.onPause,  false);
        document.addEventListener('resume', app.onResume, false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    }

    private static onPause() {
        Trace.log('suspended.', 'app.ts :: onPause');
        // TODO: This application has been suspended. Save application state here.
    }

    private static onResume() {
        Trace.log('reactivated.', 'app.ts :: onResume');
        // TODO: This application has been reactivated. Restore application state here.
    }
}

export = app;