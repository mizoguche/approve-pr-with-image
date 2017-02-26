// @flow
import { Observable } from 'rxjs/Rx';
import Images from './Images';
import type Storage from '../storage/Storage';

export default class ImageRepository {
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  fetch(): Observable<Images> {
    return Observable.create((observer) => {
      this.storage.fetch((images) => {
        observer.next(images);
        observer.complete();
      });
    });
  }

  store(images: Images): Observable<Images> {
    return Observable.create((observer) => {
      this.storage.store(images, () => {
        observer.next(images);
        observer.complete();
      });
    });
  }
}
