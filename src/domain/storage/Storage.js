// @flow
import Images from '../image/Images';

export type Storage = {
  fetch(callback: Function): void;
  store(images: Images, callback: Function): void;
};
