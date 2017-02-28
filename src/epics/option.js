// @flow
import { combineEpics } from 'redux-observable';
import type { Observable } from 'rxjs';
import * as types from '../actions/types';
import Image from '../domain/image/Image';
import Images from '../domain/image/Images';
import { imageRepository } from '../application/repositories';

const fetchImageMap = () => imageRepository
  .fetch()
  .map(images => ({ type: types.ON_FETCH_IMAGES, payload: { images } }));

export const fetchImageEpic: Function = action$ => action$
  .ofType(types.FETCH_IMAGES)
  .mergeMap(() => fetchImageMap());

const updateRawUrls = (rawUrls: string) => imageRepository
  .store(new Images(rawUrls))
  .map(images => ({ type: types.ON_UPDATE_RAW_URLS, payload: { images } }));

export const updateRawUrlsEpic: Function = action$ => action$
  .ofType(types.UPDATE_RAW_URLS)
  .mergeMap(action => updateRawUrls(action.payload.rawUrls));

const removeImage = (image: Image): Observable<types.Action> => imageRepository
  .remove(image)
  .map(images => ({ type: types.ON_REMOVE_IMAGE, payload: { images } }));

export const removeImageEpic: Observable<Observable<types.Action>> = action$ => action$
  .ofType(types.REMOVE_IMAGE)
  .mergeMap(action => removeImage(action.payload.image));

export default combineEpics(
  fetchImageEpic,
  updateRawUrlsEpic,
  removeImageEpic,
);
