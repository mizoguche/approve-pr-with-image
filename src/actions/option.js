// @flow
import { Images } from '../domain/image/Image';
import { FetchImagesAction, UpdateBulkUrlsAction, SaveImagesAction } from '../types/Option';

export const FETCH_IMAGES = 'OPTION__FETCH_IMAGES';
export const ON_FETCH_IMAGES = 'OPTION__ON_FETCH_IMAGES';
export const UPDATE_BULK_URLS = 'OPTION__UPDATE_BULK_URLS';
export const ON_UPDATE_BULK_URLS = 'OPTION__ON_UPDATE_BULK_URLS';
export const SAVE_IMAGES = 'OPTION__SAVE_IMAGES';
export const ON_SAVE_IMAGES = 'OPTION__ON_SAVE_IMAGES';

export function requestFetchImages(): FetchImagesAction {
  return { type: FETCH_IMAGES };
}

export function requestUpdateBulkUrls(bulkUrls: string): UpdateBulkUrlsAction {
  return { type: UPDATE_BULK_URLS, payload: { bulkUrls } };
}

export function requestSaveImages(images: Images): SaveImagesAction {
  return { type: SAVE_IMAGES, payload: { images } };
}
