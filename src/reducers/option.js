// @flow
import {
  ON_FETCH_IMAGES,
  ON_UPDATE_RAW_URLS,
  EDIT_RAW_URLS,
} from '../actions/option';
import Images from '../domain/image/Images';
import type { OptionAction } from '../types/Option';

export class State {
  option: OptionState;
  routing: any;
}

export class OptionState {
  images: Images;
  rawUrls: string;

  constructor(rawUrls: string) {
    this.images = new Images(rawUrls);
    this.rawUrls = rawUrls;
  }
}

const buildRawUrls = images => images.images.reduce((a, b) => `${a}${b.src}\n`, '');

export default (state: OptionState = new OptionState(''), action: OptionAction): OptionState => {
  switch (action.type) {
    case ON_FETCH_IMAGES:
    case ON_UPDATE_RAW_URLS: {
      const rawUrls = buildRawUrls(action.payload.images);
      return new OptionState(rawUrls);
    }

    case EDIT_RAW_URLS:
      return new OptionState(action.payload.rawUrls);

    default:
      return state;
  }
};

