import {Images} from "./image";

interface Storage {
    fetch(callback: Function): void;
    store(images: Images): void;
}

export default class ChromeStorage {
    fetch(callback) {
        chrome.storage.sync.get('images', images => {
            if (!images) {
                callback(new Images())
                return;
            }
            callback(images)
        });
    }

    store(images: Images) {
        chrome.storage.sync.set({'images': images}, () => console.log("save urls"));
    }
}
