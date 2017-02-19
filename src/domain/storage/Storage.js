import { Images } from '../image/Image';

export interface Storage {
  fetch(callback: Function): void;
  store(images: Images, callback: Function): void;
}

