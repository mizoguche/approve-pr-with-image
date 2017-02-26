// @flow
import Images from '../domain/image/Images';
import { Action, UpdateRawUrlsAction, SaveImagesAction, OptionImagesPayload, OptionUrlPayload, ShowPreviewAction, OptionPreviewPayload } from '../types/Option';

export const FETCH_IMAGES = 'OPTION__FETCH_IMAGES';
export const ON_FETCH_IMAGES = 'OPTION__ON_FETCH_IMAGES';
export const EDIT_RAW_URLS = 'OPTION__EDIT_RAW_URLS';
export const UPDATE_RAW_URLS = 'OPTION__UPDATE_RAW_URLS';
export const ON_UPDATE_RAW_URLS = 'OPTION__ON_UPDATE_RAW_URLS';
export const SAVE_IMAGES = 'OPTION__SAVE_IMAGES';
export const ON_SAVE_IMAGES = 'OPTION__ON_SAVE_IMAGES';
export const SHOW_PREVIEW = 'OPTION__SHOW_PREVIEW';
export const HIDE_PREVIEW = 'OPTION__HIDE_PREVIEW';

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

export function requestShowPreview(src: string): ShowPreviewAction {
  const payload: OptionPreviewPayload = { src };
  return { type: SHOW_PREVIEW, payload };
}

export function requestHidePreview(): Action {
  return { type: HIDE_PREVIEW };
}

export function requestSaveImages(images: Images): SaveImagesAction {
  const payload: OptionImagesPayload = { images };
  return { type: SAVE_IMAGES, payload };
}
