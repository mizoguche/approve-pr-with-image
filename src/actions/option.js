// @flow
import * as types from './types';
import Image from '../domain/image/Image';


export function requestFetchImages(): types.Action {
  return { type: FETCH_IMAGES };
}

export function requestUpdateRawUrls(rawUrls: string): types.UpdateRawUrlsAction {
  const payload: types.OptionUrlPayload = { rawUrls };
  return { type: UPDATE_RAW_URLS, payload };
}

export function requestEditRawUrls(rawUrls: string): types.UpdateRawUrlsAction {
  const payload: types.OptionUrlPayload = { rawUrls };
  return { type: EDIT_RAW_URLS, payload };
}

export function requestShowPreview(src: string): types.ShowPreviewAction {
  const payload: types.OptionPreviewPayload = { src };
  return { type: SHOW_PREVIEW, payload };
}

export function requestHidePreview(): types.Action {
  return { type: HIDE_PREVIEW };
}

export function requestRemoveImage(image: Image): types.SaveImagesAction {
  const payload: types.OptionImagePayload = { image };
  return { type: SAVE_IMAGES, payload };
}
