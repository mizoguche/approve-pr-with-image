// @flow
import Images from '../domain/image/Images';

export const FETCH_IMAGES = 'OPTION__FETCH_IMAGES';
export const ON_FETCH_IMAGES = 'OPTION__ON_FETCH_IMAGES';
export const EDIT_RAW_URLS = 'OPTION__EDIT_RAW_URLS';
export const UPDATE_RAW_URLS = 'OPTION__UPDATE_RAW_URLS';
export const ON_UPDATE_RAW_URLS = 'OPTION__ON_UPDATE_RAW_URLS';
export const SAVE_IMAGES = 'OPTION__SAVE_IMAGES';
export const ON_SAVE_IMAGES = 'OPTION__ON_SAVE_IMAGES';
export const SHOW_PREVIEW = 'OPTION__SHOW_PREVIEW';
export const HIDE_PREVIEW = 'OPTION__HIDE_PREVIEW';
export const REMOVE_IMAGE = 'OPTION__REMOVE_IMAGE';
export const ON_REMOVE_IMAGE = 'OPTION__ON_REMOVE_IMAGE';

export interface Action {
  type: string;
  error?: boolean;
  meta?: any;
}

export interface PayloadAction<T> extends Action {
  payload: T;
}

export interface OptionPayload {
  images: Images;
  rawUrls: string;
  src: string;
}

export interface OptionImagePayload {
  image: Image;
}

export interface OptionImagesPayload {
  images: Images;
}

export interface OptionUrlPayload {
  rawUrls: string;
}

export interface OptionPreviewPayload {
  src: string;
}

export interface SaveImagesAction extends PayloadAction<OptionImagesPayload> {
}

export interface UpdateRawUrlsAction extends PayloadAction<OptionUrlPayload> {
}

export interface ShowPreviewAction extends PayloadAction<OptionPreviewPayload> {
}

export interface OptionAction extends Action {
  payload: OptionPayload;
}
