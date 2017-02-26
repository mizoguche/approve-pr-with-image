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

export interface OptionPayload {
  images: Images;
  rawUrls: string;
}

export interface OptionImagesPayload {
  images: Images;
}

export interface OptionUrlPayload {
  rawUrls: string;
}

export interface OptionPreviewPayload {
  src: string;
}

export interface SaveImagesAction extends PayloadAction<OptionImagesPayload> {
}

export interface UpdateRawUrlsAction extends PayloadAction<OptionUrlPayload> {
}

export interface ShowPreviewAction extends PayloadAction<OptionPreviewPayload> {
}

export interface OptionAction extends Action {
  payload: OptionPayload;
}
