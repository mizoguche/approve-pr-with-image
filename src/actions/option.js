// @flow
import * as types from './types';
import type Image from '../domain/image/Image';
import type Images from '../domain/image/Images';

export function fetchImages(): types.Action<void> {
  return { type: types.FETCH_IMAGES, payload: undefined };
}

export function completeFetchImages(images: Images): types.Action<types.ImagesPayload> {
  return { type: types.COMPLETE_FETCH_IMAGES, payload: { images } };
}

export function updateRawUrls(rawUrls: string): types.Action<types.RawUrlsPayload> {
  return { type: types.UPDATE_RAW_URLS, payload: { rawUrls } };
}

export function completeUpdateRawUrls(images: Images): types.Action<types.ImagesPayload> {
  return { type: types.COMPLETE_UPDATE_RAW_URLS, payload: { images } };
}

export function editRawUrls(rawUrls: string): types.Action<types.RawUrlsPayload> {
  return { type: types.EDIT_RAW_URLS, payload: { rawUrls } };
}

export function showPreview(src: string): types.Action<types.SrcPayload> {
  return { type: types.SHOW_PREVIEW, payload: { src } };
}

export function hidePreview(): types.Action<void> {
  return { type: types.HIDE_PREVIEW, payload: undefined };
}

export function removeImage(image: Image): types.Action<types.ImagePayload> {
  return { type: types.REMOVE_IMAGE, payload: { image } };
}

export function completeRemoveImage(images: Images): types.Action<types.ImagesPayload> {
  return { type: types.COMPLETE_REMOVE_IMAGE, payload: { images } };
}
