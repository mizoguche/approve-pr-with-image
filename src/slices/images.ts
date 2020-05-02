import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  getImages,
  Image,
  removeImage,
  storeImages,
} from '../data/ChromeStorage';
import { AppDispatch, RootState } from './index';

type State = { images: Image[] };
const initialState: State = { images: [] };

export const get = createAsyncThunk<
  Image[],
  void,
  { dispatch: AppDispatch; state: RootState }
>('image/get', () => {
  return getImages();
});

const URL_FORMAT = /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

export const storeBulk = createAsyncThunk<
  Image[],
  string,
  { dispatch: AppDispatch; state: RootState }
>('image/get', (src) => {
  const images: Image[] = [];
  src.split('\n').forEach((line) => {
    if (line.match(URL_FORMAT)) {
      images.push({ src: line });
    }
  });
  return storeImages(images);
});

export const remove = createAsyncThunk<
  Image[],
  string,
  { dispatch: AppDispatch; state: RootState }
>('image/get', (src) => {
  return removeImage({ src });
});

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, { payload }) => {
      state.images = payload;
    });
  },
});

export const useImageSources = (): string[] =>
  useSelector((state) => {
    return state.images.images.map((img) => img.src);
  });

export const useImageUrls = (): string =>
  useSelector((state) => {
    return state.images.images.map((img) => img.src).join('\n');
  });

export const useRandomImageSrc = (): string | undefined =>
  useSelector((state) => {
    const index = Math.floor(
      Math.random() * Math.floor(state.images.images.length),
    );
    return state.images.images[index]?.src;
  });

export default imageSlice.reducer;
