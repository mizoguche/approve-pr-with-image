import jQuery from 'jquery';
import { imageRepository, Images } from '../core/image';

jQuery(() => {
  imageRepository.fetch((images) => {
    let url = '';
    images.images.forEach((img) => {
      url += `${img.src}\n`;
    });
    jQuery('textarea').text(url);
  });

  jQuery('#save').on('click', () => {
    const images = new Images(jQuery('#urls').val());
    imageRepository.store(images, () => {
      const snackbarContainer = document.querySelector('#save-message');
      snackbarContainer.MaterialSnackbar.showSnackbar({ message: 'Saved.' });
    });
  });
});
