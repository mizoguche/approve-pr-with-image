// @flow
import ChromeStorage from '../domain/storage/ChromeStorage';
import ImageRepository from '../domain/image/ImageRepository';

export const imageRepository = new ImageRepository(new ChromeStorage());
