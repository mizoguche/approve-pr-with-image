// @flow
import Images from '../domain/image/Images';
import type * as types from '../actions/types';

export class State {
  option: OptionState;
  routing: any;
}

export class OptionState {
  images: Images;
  rawUrls: string;
  previewingImageSrc: string;
  isPreviewing: boolean;

  constructor(rawUrls: string, previewingImageSrc: string = '', isPreviewing: boolean = false) {
    this.images = new Images(rawUrls);
    this.rawUrls = rawUrls;
    this.previewingImageSrc = previewingImageSrc;
    this.isPreviewing = isPreviewing;
  }
}

const buildRawUrls = images => images.images.reduce((a, b) => `${a}${b.src}\n`, '');

export default (state: OptionState = new OptionState(''), action: types.OptionAction): OptionState => {
  switch (action.type) {
    case types.ON_FETCH_IMAGES:
    case types.ON_UPDATE_RAW_URLS:
    case types.ON_REMOVE_IMAGE: {
      const rawUrls = buildRawUrls(action.payload.images);
      return new OptionState(rawUrls);
    }

    case types.EDIT_RAW_URLS:
      return new OptionState(action.payload.rawUrls);

    case types.SHOW_PREVIEW:
      return new OptionState(state.rawUrls, action.payload.src, true);

    case types.HIDE_PREVIEW:
      return new OptionState(state.rawUrls, '', false);

    default:
      return state;
  }
};

