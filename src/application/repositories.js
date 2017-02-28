/* eslint import/prefer-default-export: 0 */
// @flow
import ChromeStorage from '../infrastructure/ChromeStorage';
import ImageRepository from '../domain/image/ImageRepository';

export const imageRepository = new ImageRepository(new ChromeStorage());
