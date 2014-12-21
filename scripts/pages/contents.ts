import RouteManager   = require('RouteManager');
import Trace          = require('util/Trace');
import Url            = require('util/Url');

class contents {
    public static initialize(state: typeof RouteManager.state) {
        Trace.log(state, 'contents.initialize');

        WinJS.UI.Pages.define(Url.contentsHtml, {
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
                    contents.receiveDataAndRender(json, element);
                });

                return this;
            }
        });
    }

    private static receiveDataAndRender(data: Object, element: HTMLElement) {
        if (data) {
            var listData     = contents.modifyData(data);
            var title        = contents.createTitle(listData);
            var listViewCtrl = $(element).find('#contents')[0].winControl;
            $(element).find('.titlearea').text(title);
            listViewCtrl.itemDataSource = (new WinJS.Binding.List(listData)).dataSource;
        }
    }

    private static modifyData(data) {
        return data.sort((a, b) => {
            return a.position > b.position ? 1 : -1;
        }).map((item) => {
            item.titleLink = Url.contents(item.titleId);
            return item;
        });
    }

    private static createTitle(listData) {
        var item = listData[0];
        return item.magazineName + ' ' + item.numberNameAndNoString;
    }
}

export = contents;