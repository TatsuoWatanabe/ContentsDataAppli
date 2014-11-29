import app   = require('scripts/app');
import Trace = require('scripts/util/Trace');

export function initialize() {
    // state is?
    //Trace.log(app.route.state, 'contents.initialize called.');

    WinJS.UI.Pages.define('./pages/contents/contents.html', {
        ready: function (element, options) {
            WinJS.xhr({
                url         : './pages/contents/data.json',
                responseType: 'json'
            }).done((result: XMLHttpRequest) => {
                var json = result.response;
                var data = (() => {
                    var jsonObj = json.sort ? json : JSON.parse(json);
                    return jsonObj.sort((a, b) => a.index < b.index ? -1 : 1);
                })();
                var listViewCtrl = WinJS.Utilities.query('#contents')[0].winControl;
                listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
            });

            return this;
        }
    });
}