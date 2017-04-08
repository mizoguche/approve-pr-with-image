// @flow
import Images from '../domain/Images';
import * as types from '../actions/types';

export type OptionState = {
  images: Images;
  rawUrls: string;
  previewingImageSrc: string;
  isPreviewing: boolean;
}

export type State = {
  option: OptionState;
  routing: any;
}

const defaultOptionState: OptionState = {
  images: new Images(''),
  rawUrls: '',
  previewingImageSrc: '',
  isPreviewing: false,
};

const buildRawUrls = images => images.images.reduce((a, b) => `${a}${b.src}\n`, '');

export default (
  state: OptionState = defaultOptionState,
  action: any,
): OptionState => {
  switch (action.type) {
    case types.COMPLETE_FETCH_IMAGES:
    case types.COMPLETE_UPDATE_RAW_URLS:
    case types.COMPLETE_REMOVE_IMAGE: {
      const images = (action: types.Action<types.ImagesPayload>).payload.images;
      const rawUrls = buildRawUrls(images);
      return {
        ...state,
        images,
        rawUrls,
      };
    }

    case types.EDIT_RAW_URLS: {
      const rawUrls = (action: types.Action<types.RawUrlsPayload>).payload.rawUrls;
      return {
        ...state,
        images: new Images(rawUrls),
        rawUrls,
      };
    }

    case types.SHOW_PREVIEW:
      return {
        ...state,
        previewingImageSrc: (action: types.Action<types.SrcPayload>).payload.src,
        isPreviewing: true,
      };

    case types.HIDE_PREVIEW:
      return {
        ...state,
        previewingImageSrc: '',
        isPreviewing: false,
      };

    default:
      return state;
  }
};

