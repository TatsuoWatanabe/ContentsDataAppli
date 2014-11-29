import Trace        = require('../scripts/util/Trace');
import RouteManager = require('../scripts/RouteManager');

export function initialize(routeState: typeof RouteManager.baseState) {



    WinJS.UI.Pages.define('pages/home.html', {
        ready: (element, options) => {
            var renderHost = $('.renderingPageControls-renderedControl')[0];

            Trace.log(routeState, 'home.ts');

            WinJS.UI.Pages.render(routeState.uri, renderHost).done(() => {
                routeState.pageModule.initialize();
            });

            return this;
        }
    });
}
