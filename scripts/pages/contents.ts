import RouteManager   = require('RouteManager');
import Trace          = require('util/Trace');
import Url            = require('util/Url');

export function initialize(state: typeof RouteManager.state) {
    Trace.log(state ,'contents.initialize');

    WinJS.UI.Pages.define('pages/contents/contents.html', {
        ready: function (element, options) {
            var url = Url.contentsAPI(state.id);
            Trace.log(url, 'contents.ts UI.Pages.define ready');
            $.support.cors = true;
            $.ajax({
                type       : 'GET',
                url        : url,
                dataType   : 'json',
                crossDomain: true
            }).done((json) => {
                Trace.log(json, 'response from ' + url);

                var data = (() => {
                    var jsonObj = json.sort ? json : JSON.parse(json);
                    return jsonObj.sort ? jsonObj.sort((a, b) => a.position > b.position ? 1 : -1) : '';
                })();
                if (data) {
                    var listViewCtrl = WinJS.Utilities.query('#contents')[0].winControl;
                    listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
                    var title = ((item) => {
                        return item.magazineName + ' ' + item.numberNameAndNoString;
                    })(data[0]);
                    $(element).find('.titlearea').text(title);
                }
            });

            return this;
        }
    });
}