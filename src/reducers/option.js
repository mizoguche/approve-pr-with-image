// @flow
import {
  FETCH_IMAGES,
  ON_FETCH_IMAGES,
  UPDATE_BULK_URLS,
  ON_UPDATE_BULK_URLS,
  SAVE_IMAGES,
  ON_SAVE_IMAGES,
} from '../actions/option';
import { Images, imageRepository } from '../domain/image';
import { OptionState, OptionAction } from '../types/option';

const buildBulkUrls = images => images.images.reduce((a, b) => `${a}${b.src}\n`, '');

export default (state: OptionState = { images: new Images(), bulkUrls: '' }, action: OptionAction): OptionState => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { images: state.images, bulkUrls: state.bulkUrls };
    case ON_FETCH_IMAGES:
      return { images: action.payload, bulkUrls: buildBulkUrls(action.payload) };
    case UPDATE_BULK_URLS:
      return { images: state.images, bulkUrls: action.payload };
    case SAVE_IMAGES:
      return { images: action.payload, bulkUrls: state.bulkUrls };
    default: {
      return state;
    }
  }
};

const fetchImageMap = () => imageRepository.fetch().map(images => ({ type: ON_FETCH_IMAGES, payload: images }));

export const fetchImageEpic = action$ => action$.ofType(FETCH_IMAGES).mergeMap(() => fetchImageMap());

