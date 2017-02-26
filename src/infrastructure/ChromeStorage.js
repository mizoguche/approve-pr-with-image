import Images from '../domain/image/Images';

export default class ChromeStorage {
  constructor() {
    this.storage = chrome.storage.sync;
  }

  fetch(callback) {
    this.storage.get('images', (obj) => {
      if (!obj.images) {
        callback(new Images());
        return;
      }
      const images = new Images();
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
