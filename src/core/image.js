export class Image {
    src: string

    constructor(src) {
        this.src = src;
    }
}

export class Images {
    images: Image[]

    constructor(){
        this.images = []
    }

    add(image: Image){
        this.images.push(image)
    }

    getRandom(){
        if (this.images.length > 0) {
            var index = Math.floor(Math.random() * this.images.length)
            return this.images[index]
        }
        return null
    }
}

export class ImageRepository {
    static loadRandom(callback) {
        ImageRepository.load(urls =>{
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
        ImageRepository.load(urls => {
            urls.push(new Url(urlString));
            chrome.storage.sync.set({'urls': urls}, () => console.log("Added url: " + urlString));
        });
    }

    static load(callback) {
        chrome.storage.sync.get('urls', urlsObj => callback(urlsObj.urls.map(o => new Url(o.value))));
    }
}

