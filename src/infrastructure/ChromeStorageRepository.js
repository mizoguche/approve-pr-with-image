// @flow
import { Observable } from 'rxjs/Rx';

import Images from '../domain/Images';
import Image from '../domain/Image';
import type { ImageRepository } from '../domain/ImageRepository';

export default class ChromeStorageRepository {

  storage: typeof chrome.storage.sync;

  constructor() {
    this.storage = chrome.storage.sync;
  }

  fetch(): Observable<Images> {
    return Observable.create((observer) => {
      this.storage.get('images', (obj) => {
        if (!obj.images) {
          observer.next(new Images(''));
          observer.complete();
          return;
        }
        const images = new Images('');
        images.images = obj.images;
        observer.next(images);
        observer.complete();
      });
    });
  }

  store(images: Images): Observable<Images> {
    return Observable.create((observer) => {
      this.storage.set({ images: images.images }, () => {
        observer.next(images);
        observer.complete();
      });
    });
  }

  remove(image: Image): Observable<Images> {
    return this.fetch()
      .do(images => images.remove(image))
      .mergeMap(images => this.store(images));
  }
}

(new ChromeStorageRepository(): ImageRepository) ; // eslint-disable-line
