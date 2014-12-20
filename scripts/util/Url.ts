class Url {
    static domain = 'http://contentsdataapp.herokuapp.com';
    // static domain = 'http://172.16.192.1:9000'; VMWare Local
    // static domain = 'http://192.168.1.23:9000'; Home Local

    static contentsAPI(id: number) {
        return Url.domain + '/api/contents/' + id;
    }
}

export = Url;