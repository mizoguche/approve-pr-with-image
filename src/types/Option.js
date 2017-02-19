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

export interface OptionImagesPayload {
  images: Images;
}

export interface OptionUrlPayload {
  bulkUrls: string;
}

export interface SaveImagesAction extends PayloadAction<OptionImagesPayload> {
}

export interface UpdateBulkUrlsAction extends PayloadAction<OptionUrlPayload> {
}

export interface OptionAction extends Action {
  payload: OptionPayload;
}
