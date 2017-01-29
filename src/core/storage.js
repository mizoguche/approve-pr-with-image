import {Images} from "./image";

interface Storage {
    fetch(callback: Function): void;
    store(images: Images, callback: Function): void;
}

export default class ChromeStorage {
    fetch(callback) {
        chrome.storage.sync.get('images', obj => {
            if (!obj.images) {
                callback(new Images())
                return;
            }
            const images = new Images()
            images.images = obj.images
            callback(images)
        });
    }

    store(images: Images, callback: Function) {
        chrome.storage.sync.set({'images': images.images}, () => {
            if (callback) {
                callback()
            }
        });
    }
}
