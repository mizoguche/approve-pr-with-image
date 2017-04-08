// @flow
import { combineEpics } from 'redux-observable';
import type { Observable } from 'rxjs';
import * as types from '../actions/types';
import * as actionCreators from '../actions/option';
import Image from '../domain/Image';
import Images from '../domain/Images';
import { imageRepository } from '../application/repositories';

const fetchImageMap = () => imageRepository
  .fetch()
  .map(actionCreators.completeFetchImages);

const fetchImageEpic = action$ => action$
  .ofType(types.FETCH_IMAGES)
  .mergeMap(() => fetchImageMap());

const updateRawUrls = (rawUrls: string) => imageRepository
  .store(new Images(rawUrls))
  .map(actionCreators.completeUpdateRawUrls);

const updateRawUrlsEpic = action$ => action$
  .ofType(types.UPDATE_RAW_URLS)
  .mergeMap(action => updateRawUrls(action.payload.rawUrls));

const removeImage = (image: Image): Observable<types.Action<types.ImagePayload>> => imageRepository
  .remove(image)
  .map(actionCreators.completeRemoveImage);

const removeImageEpic = action$ => action$
  .ofType(types.REMOVE_IMAGE)
  .mergeMap(action => removeImage(action.payload.image));

export default combineEpics(
  fetchImageEpic,
  updateRawUrlsEpic,
  removeImageEpic,
);
