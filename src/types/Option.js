// @flow
import Images from '../domain/image/Images';

export interface Action {
  type: string;
  error?: boolean;
  meta?: any;
}

export interface PayloadAction<T> extends Action {
  payload: T;
}

export interface OptionState {
  images: Images;
  bulkUrls: string;
}

export interface OptionPayload {
  images: Images;
  bulkUrls: string;
}

export interface FetchImagesAction extends Action {
}

export interface SaveImagesAction extends PayloadAction<OptionPayload> {
}

export interface UpdateBulkUrlsAction extends PayloadAction<OptionPayload> {
}

export type OptionAction = FetchImagesAction & SaveImagesAction & UpdateBulkUrlsAction;
