// @flow
import { combineEpics } from 'redux-observable';
import {
  FETCH_IMAGES,
  ON_FETCH_IMAGES,
  UPDATE_RAW_URLS,
  ON_UPDATE_RAW_URLS,
} from '../actions/option';
import Images from '../domain/image/Images';
import { imageRepository } from '../application/repositories';

const fetchImageMap = () => imageRepository
  .fetch().map(images => ({ type: ON_FETCH_IMAGES, payload: { images } }));

export const fetchImageEpic: Function = action$ => action$
  .ofType(FETCH_IMAGES).mergeMap(() => fetchImageMap());

const updateRawUrls = (rawUrls: string) => imageRepository
  .store(new Images(rawUrls)).map(images => ({ type: ON_UPDATE_RAW_URLS, payload: { images } }));

export const updateRawUrlsEpic: Function = action$ => action$
  .ofType(UPDATE_RAW_URLS).mergeMap(action => updateRawUrls(action.payload.rawUrls));

export default combineEpics(
  fetchImageEpic,
  updateRawUrlsEpic,
);
