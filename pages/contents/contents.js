define(["require", "exports"], function(require, exports) {
    function initialize() {
        // state is?
        //Trace.log(app.route.state, 'contents.initialize called.');
        WinJS.UI.Pages.define('./pages/contents/contents.html', {
            ready: function (element, options) {
                WinJS.xhr({
                    url: './pages/contents/data.json',
                    responseType: 'json'
                }).done(function (result) {
                    var json = result.response;
                    var data = (function () {
                        var jsonObj = json.sort ? json : JSON.parse(json);
                        return jsonObj.sort(function (a, b) {
                            return a.index < b.index ? -1 : 1;
                        });
                    })();
                    var listViewCtrl = WinJS.Utilities.query('#contents')[0].winControl;
                    listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
                });

                return this;
            }
        });
    }
    exports.initialize = initialize;
});
//# sourceMappingURL=contents.js.map
