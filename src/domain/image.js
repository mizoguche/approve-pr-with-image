// @flow

import Rx from 'rxjs/Rx';
import ChromeStorage from './storage';

export class Image {
  src: string;

  constructor(src) {
    const re = /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    if (!re.exec(src)) {
      throw new Error('src must be url');
    }
    this.src = src;
  }
}

export class Images {
  images: Image[];

  constructor(text: string) {
    this.images = [];
    if (!text) {
      return;
    }
    const lines = text.split('\n');
    lines.forEach((l) => {
      try {
        const img = new Image(l);
        this.images.push(img);
      } catch (e) {
        // ignore invalid url string
      }
    });
  }

  add(image: Image) {
    this.images.push(image);
  }

  getRandom() {
    if (this.isEmpty()) {
      throw new Error('this instance have no image');
    }

    const index = Math.floor(Math.random() * this.images.length);
    return this.images[index];
  }

  isEmpty() {
    return this.images.length === 0;
  }
}

export class ImageRepository {
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  fetch(): Rx.Observable<Images> {
    return Rx.Observable.create((observer) => {
      this.storage.fetch((images) => {
        observer.next(images);
        observer.complete();
      });
    });
  }

  store(images: Images): Rx.Observable {
    return Rx.Observable.create((observer) => {
      this.storage.save(images, () => {
        observer.complete();
      });
    });
  }
}

export const imageRepository = new ImageRepository(new ChromeStorage());
