// @flow
import { combineEpics } from 'redux-observable';
import type { Observable } from 'rxjs';
import * as types from '../actions/types';
import * as actionCreators from '../actions/option';
import Image from '../domain/image/Image';
import Images from '../domain/image/Images';
import { imageRepository } from '../application/repositories';

const fetchImageMap = () => imageRepository
  .fetch()
  .map(actionCreators.completeFetchImages);

export const fetchImageEpic: Function = action$ => action$
  .ofType(types.FETCH_IMAGES)
  .mergeMap(() => fetchImageMap());

const updateRawUrls = (rawUrls: string) => imageRepository
  .store(new Images(rawUrls))
  .map(actionCreators.completeUpdateRawUrls);

export const updateRawUrlsEpic: Function = action$ => action$
  .ofType(types.UPDATE_RAW_URLS)
  .mergeMap(action => updateRawUrls(action.rawUrls));

const removeImage = (image: Image): Observable<types.Action> => imageRepository
  .remove(image)
  .map(actionCreators.completeRemoveImage);

export const removeImageEpic: Observable<Observable<types.Action>> = action$ => action$
  .ofType(types.REMOVE_IMAGE)
  .mergeMap(action => removeImage(action.image));

export default combineEpics(
  fetchImageEpic,
  updateRawUrlsEpic,
  removeImageEpic,
);
