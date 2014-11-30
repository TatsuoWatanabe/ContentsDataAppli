import Router       = require('Router');
import RouteManager = require('RouteManager');
import Trace        = require('util/Trace');

export function initialize() {
    var router  = new Router();
    var onRoute = () => {
        Trace.log('Backbone.history route event fired.', 'app.ts');

        RouteManager.initPage();
        WinJS.Navigation.navigate(RouteManager.state.uri).done(() => {
            Trace.log('WinJS.Navigation.navigate done.', 'app.ts');
        });
    };
    Backbone.history.start();
    Backbone.history.on('route', onRoute);
    document.addEventListener('deviceready', onDeviceReady, false);

    WinJS.UI.processAll().done(() => {
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

function onDeviceReady() {
    // Handle the Cordova pause and resume events
    document.addEventListener('pause',  onPause,  false);
    document.addEventListener('resume', onResume, false);

    // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
}

function onPause() {
    // TODO: This application has been suspended. Save application state here.
}

function onResume() {
    // TODO: This application has been reactivated. Restore application state here.
}

$(() => initialize());
