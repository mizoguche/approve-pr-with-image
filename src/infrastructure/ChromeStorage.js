// @flow
import Images from '../domain/image/Images';
import type { Storage } from '../domain/storage/Storage';

export default class ChromeStorage {
  storage: typeof chrome.storage.sync;

  constructor() {
    this.storage = chrome.storage.sync;
  }

  fetch(callback: (Images) => void) {
    this.storage.get('images', (obj) => {
      if (!obj.images) {
        callback(new Images(''));
        return;
      }
      const images = new Images('');
      images.images = obj.images;
      callback(images);
    });
  }

  store(images: Images, callback: Function) {
    this.storage.set({ images: images.images }, () => {
      if (callback) {
        callback();
      }
    });
  }
}

(new ChromeStorage(): Storage); // eslint-disable-line
