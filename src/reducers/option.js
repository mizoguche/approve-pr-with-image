// @flow
import Images from '../domain/Images';
import * as types from '../actions/types';

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

export default (state: OptionState = new OptionState(''), action: any): OptionState => {
  switch (action.type) {
    case types.COMPLETE_FETCH_IMAGES:
    case types.COMPLETE_UPDATE_RAW_URLS:
    case types.COMPLETE_REMOVE_IMAGE:
      {
        const images = (action: types.Action<types.ImagesPayload>).payload.images;
        const rawUrls = buildRawUrls(images);
        return new OptionState(rawUrls);
      }

    case types.EDIT_RAW_URLS:
      {
        const rawUrls = (action: types.Action<types.RawUrlsPayload>).payload.rawUrls;
        return new OptionState(rawUrls);
      }

    case types.SHOW_PREVIEW:
      return new OptionState(
        state.rawUrls,
        (action: types.Action<types.SrcPayload>).payload.src,
        true,
      );

    case types.HIDE_PREVIEW:
      return new OptionState(state.rawUrls, '', false);

    default:
      return state;
  }
};

