define(["require", "exports", '../scripts/util/Trace'], function(require, exports, Trace) {
    function initialize(routeState) {
        var _this = this;
        WinJS.UI.Pages.define('pages/home.html', {
            ready: function (element, options) {
                var renderHost = $('.renderingPageControls-renderedControl')[0];

                Trace.log(routeState, 'home.ts');

                WinJS.UI.Pages.render(routeState.uri, renderHost).done(function () {
                    routeState.pageModule.initialize();
                });

                return _this;
            }
        });
    }
    exports.initialize = initialize;
});
//# sourceMappingURL=home.js.map
