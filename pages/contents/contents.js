define(["require", "exports", '../../scripts/util/Trace'], function(require, exports, Trace) {
    function initialize(state) {
        Trace.log(state, 'contents.initialize');

        WinJS.UI.Pages.define('./pages/contents/contents.html', {
            ready: function (element, options) {
                Trace.log(element);
                $(element).find('h1.titlearea').text('id: ' + state.id);

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
