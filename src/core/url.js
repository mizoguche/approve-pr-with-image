export class Url {
    constructor(value) {
        this.value = value;
    }

    toString() {
        return this.value;
    }
}

export class Urls {
    static loadRandom() {
        var urls = Urls.load();
        if (urls.length > 0) {
            var index = Math.floor(Math.random() * urls.length);
            return urls[index];
        }
    }

    static save(urlsString) {
        var urls = urlsString.split("\n").map(u => new Url(u));
        localStorage.setItem('urls', JSON.stringify(urls));
    }

    static add(urlString) {
        var urls = Urls.load();
        urls.push(new Url(urlString));
        localStorage.setItem('urls', JSON.stringify(urls));
    }

    static load() {
        var urlsJSONString = localStorage.getItem('urls');
        if (!urlsJSONString) {
            return [];
        }

        var urlsObj = JSON.parse(urlsJSONString);
        return urlsObj.map(o => new Url(o.value));
    }
}

