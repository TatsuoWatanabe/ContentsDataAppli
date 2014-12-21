class Url {
    static api = 'http://contentsdataapp.herokuapp.com/api';
    // static api = 'http://172.16.192.1:9000/api'; VMWare Local
    // static api = 'http://192.168.1.23:9000/api'; Home Local

    // --- contents ---
    static contents     = (id: number) => '#/contents/' + id;
    static contentsAPI  = (id: number) => Url.api + '/contents/' + id;
    static contentsHtml = 'pages/contents.html';
    // ----------------
}

export = Url;