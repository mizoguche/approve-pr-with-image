// @flow
import Rx from 'rxjs/Rx';

export default class ImageRepository {
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
