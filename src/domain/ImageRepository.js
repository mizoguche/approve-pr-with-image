// @flow
import { Observable } from 'rxjs/Rx';

import Image from './Image';
import Images from './Images';

export type ImageRepository = {
  fetch(): Observable<Images>;
  store(images: Images): Observable<Images>;
  remove(image: Image): Observable<Images>;
};
