import RouteManager   = require('RouteManager');
import Trace          = require('util/Trace');

export function initialize(state: typeof RouteManager.state) {
    Trace.log(state ,'contents.initialize');

    WinJS.UI.Pages.define('pages/contents/contents.html', {
        ready: function (element, options) {
            var domain = 'http://172.16.192.1:9000';
            //domain   = 'http://192.168.1.23:9000';
            domain     = 'http://contentsdataapp.herokuapp.com';
            var url    = domain + '/api/contents/' + state.id;

            Trace.log(url, 'contents.ts UI.Pages.define ready');
            // TODO: fix url of api.

            Trace.log(element, 'element');
            $(element).find('.titlearea').text('id: ' + state.id);

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
                var listViewCtrl = WinJS.Utilities.query('#contents')[0].winControl;
                listViewCtrl.itemDataSource = (new WinJS.Binding.List(data)).dataSource;
            });

            return this;
        }
    });
}