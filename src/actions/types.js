// @flow
import Image from '../domain/image/Image';
import Images from '../domain/image/Images';

export const FETCH_IMAGES = 'OPTION/FETCH_IMAGES';
export const COMPLETE_FETCH_IMAGES = 'OPTION/COMPLETE_FETCH_IMAGES';
export const EDIT_RAW_URLS = 'OPTION/EDIT_RAW_URLS';
export const UPDATE_RAW_URLS = 'OPTION/UPDATE_RAW_URLS';
export const COMPLETE_UPDATE_RAW_URLS = 'OPTION/COMPLETE_UPDATE_RAW_URLS';
export const SHOW_PREVIEW = 'OPTION/SHOW_PREVIEW';
export const HIDE_PREVIEW = 'OPTION/HIDE_PREVIEW';
export const REMOVE_IMAGE = 'OPTION/REMOVE_IMAGE';
export const COMPLETE_REMOVE_IMAGE = 'OPTION/COMPLETE_REMOVE_IMAGE';

export type Action = {
  type: string;
};

export type OptionImagePayloadAction = Action & {
  image: Image;
}

export type OptionImagesPayloadAction = Action & {
  images: Images;
}

export type OptionRawUrlsPayloadAction = Action & {
  rawUrls: string;
}

export type OptionSrcPayloadAction = Action & {
  src: string;
}

