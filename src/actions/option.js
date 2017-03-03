// @flow
import * as types from './types';
import type Image from '../domain/image/Image';
import type Images from '../domain/image/Images';

export function fetchImages(): types.Action {
  return { type: types.FETCH_IMAGES };
}

export function completeFetchImages(images: Images): types.OptionImagesPayloadAction {
  return { type: types.COMPLETE_FETCH_IMAGES, images };
}

export function updateRawUrls(rawUrls: string): types.OptionRawUrlsPayloadAction {
  return { type: types.UPDATE_RAW_URLS, rawUrls };
}

export function completeUpdateRawUrls(images: Images): types.OptionImagesPayloadAction {
  return { type: types.COMPLETE_UPDATE_RAW_URLS, images };
}

export function editRawUrls(rawUrls: string): types.OptionRawUrlsPayloadAction {
  return { type: types.EDIT_RAW_URLS, rawUrls };
}

export function showPreview(src: string): types.OptionSrcPayloadAction {
  return { type: types.SHOW_PREVIEW, src };
}

export function hidePreview(): types.Action {
  return { type: types.HIDE_PREVIEW };
}

export function removeImage(image: Image): types.OptionImagePayloadAction {
  return { type: types.REMOVE_IMAGE, image };
}

export function completeRemoveImage(images: Images): types.OptionImagesPayloadAction {
  return { type: types.COMPLETE_REMOVE_IMAGE, images };
}
