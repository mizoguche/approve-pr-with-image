// @flow
import {
  FETCH_IMAGES,
  ON_FETCH_IMAGES,
  UPDATE_BULK_URLS,
  // ON_UPDATE_BULK_URLS,
  SAVE_IMAGES,
  // ON_SAVE_IMAGES,
} from '../actions/option';
import Images from '../domain/image/Images';
import { imageRepository } from '../application/repositories';
import type { OptionState, OptionAction, OptionPayload } from '../types/Option';

const buildBulkUrls = images => images.images.reduce((a, b) => `${a}${b.src}\n`, '');

const defaultState: OptionState = { images: new Images(''), bulkUrls: '' };
export default (state: OptionState = defaultState, action: OptionAction): OptionState => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { images: state.images, bulkUrls: state.bulkUrls };
    case ON_FETCH_IMAGES:
      return { images: action.payload.images, bulkUrls: buildBulkUrls(action.payload.images) };
    case UPDATE_BULK_URLS:
      return { images: state.images, bulkUrls: action.payload.bulkUrls };
    case SAVE_IMAGES:
      return { images: action.payload.images, bulkUrls: state.bulkUrls };
    default: {
      return state;
    }
  }
};

const fetchImageMap = () => imageRepository
  .fetch().map(images => ({ type: ON_FETCH_IMAGES, payload: { images } }));

export const fetchImageEpic: Function = action$ => action$
  .ofType(FETCH_IMAGES).mergeMap(() => fetchImageMap());

declare type OptionEpic = Function;
