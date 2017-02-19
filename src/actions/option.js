// @flow
import Images from '../domain/image/Images';
import { Action, UpdateBulkUrlsAction, SaveImagesAction, OptionImagesPayload, OptionUrlPayload } from '../types/Option';

export const FETCH_IMAGES = 'OPTION__FETCH_IMAGES';
export const ON_FETCH_IMAGES = 'OPTION__ON_FETCH_IMAGES';
export const UPDATE_BULK_URLS = 'OPTION__UPDATE_BULK_URLS';
export const ON_UPDATE_BULK_URLS = 'OPTION__ON_UPDATE_BULK_URLS';
export const SAVE_IMAGES = 'OPTION__SAVE_IMAGES';
export const ON_SAVE_IMAGES = 'OPTION__ON_SAVE_IMAGES';

export function requestFetchImages(): Action {
  return { type: FETCH_IMAGES };
}

export function requestUpdateBulkUrls(bulkUrls: string): UpdateBulkUrlsAction {
  const payload: OptionUrlPayload = { bulkUrls };
  return { type: UPDATE_BULK_URLS, payload };
}

export function requestSaveImages(images: Images): SaveImagesAction {
  const payload: OptionImagesPayload = { images };
  return { type: SAVE_IMAGES, payload };
}
