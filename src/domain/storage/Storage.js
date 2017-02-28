import { Images } from '../image/Image';

declare interface Storage {
  fetch(callback: Function): void;
  store(images: Images, callback: Function): void;
}

