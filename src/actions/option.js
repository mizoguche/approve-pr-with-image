// @flow
import Images from '../domain/image/Images';
import { Action, UpdateRawUrlsAction, SaveImagesAction, OptionImagesPayload, OptionUrlPayload } from '../types/Option';

export const FETCH_IMAGES = 'OPTION__FETCH_IMAGES';
export const ON_FETCH_IMAGES = 'OPTION__ON_FETCH_IMAGES';
export const EDIT_RAW_URLS = 'OPTION__EDIT_RAW_URLS';
export const UPDATE_RAW_URLS = 'OPTION__UPDATE_RAW_URLS';
export const ON_UPDATE_RAW_URLS = 'OPTION__ON_UPDATE_RAW_URLS';
export const SAVE_IMAGES = 'OPTION__SAVE_IMAGES';
export const ON_SAVE_IMAGES = 'OPTION__ON_SAVE_IMAGES';

export function requestFetchImages(): Action {
  return { type: FETCH_IMAGES };
}

export function requestUpdateRawUrls(rawUrls: string): UpdateRawUrlsAction {
  const payload: OptionUrlPayload = { rawUrls };
  return { type: UPDATE_RAW_URLS, payload };
}

export function requestEditRawUrls(rawUrls: string): UpdateRawUrlsAction {
  const payload: OptionUrlPayload = { rawUrls };
  return { type: EDIT_RAW_URLS, payload };
}

export function requestSaveImages(images: Images): SaveImagesAction {
  const payload: OptionImagesPayload = { images };
  return { type: SAVE_IMAGES, payload };
}
