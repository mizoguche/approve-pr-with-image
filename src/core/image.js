export class Image {
    constructor(src) {
        this.src = src;
    }
}

export class Urls {
    static loadRandom(callback) {
        Urls.load(urls =>{
            if (urls.length > 0) {
                var index = Math.floor(Math.random() * urls.length);
                callback(urls[index]);
            }
        });
    }

    static save(urlsString) {
        var urls = urlsString.split("\n").map(u => new Url(u));
        chrome.storage.sync.set({'urls': urls}, () => console.log("save urls"));
    }

    static add(urlString) {
        Urls.load(urls => {
            urls.push(new Url(urlString));
            chrome.storage.sync.set({'urls': urls}, () => console.log("Added url: " + urlString));
        });
    }

    static load(callback) {
        chrome.storage.sync.get('urls', urlsObj => callback(urlsObj.urls.map(o => new Url(o.value))));
    }
}

