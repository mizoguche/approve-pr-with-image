import { Images } from './image';

export interface Storage {
  fetch(callback: Function): void;
  store(images: Images, callback: Function): void;
}

