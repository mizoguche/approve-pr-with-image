// @flow
import Image from '../domain/image/Image';
import Images from '../domain/image/Images';

export type ActionType = string;

export const FETCH_IMAGES: ActionType = 'OPTION/FETCH_IMAGES';
export const COMPLETE_FETCH_IMAGES: ActionType = 'OPTION/COMPLETE_FETCH_IMAGES';
export const EDIT_RAW_URLS: ActionType = 'OPTION/EDIT_RAW_URLS';
export const UPDATE_RAW_URLS: ActionType = 'OPTION/UPDATE_RAW_URLS';
export const COMPLETE_UPDATE_RAW_URLS: ActionType = 'OPTION/COMPLETE_UPDATE_RAW_URLS';
export const SHOW_PREVIEW: ActionType = 'OPTION/SHOW_PREVIEW';
export const HIDE_PREVIEW: ActionType = 'OPTION/HIDE_PREVIEW';
export const REMOVE_IMAGE: ActionType = 'OPTION/REMOVE_IMAGE';
export const COMPLETE_REMOVE_IMAGE: ActionType = 'OPTION/COMPLETE_REMOVE_IMAGE';

export type Action<T> = {
  type: ActionType;
  payload: T
};

export type ImagePayload = {
  image: Image;
}

export type ImagesPayload = {
  images: Images;
}

export type RawUrlsPayload = {
  rawUrls: string;
}

export type SrcPayload = {
  src: string;
}
