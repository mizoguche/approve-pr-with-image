// @flow
import jQuery from 'jquery';
import { imageRepository } from '../application/repositories';

const copy = () => {
  jQuery('#clipboard').show();
  jQuery('#clipboard').focus();
  jQuery('#clipboard').select();
  document.execCommand('Copy');
  window.getSelection().removeAllRanges();
  jQuery('#clipboard').hide();
};

// TODO: Use callback that MDL snackbar is ready
jQuery(document).ready(() => {
  setTimeout(() => {
    imageRepository.fetch().subscribe((images) => {
      if (images.isEmpty()) {
        chrome.runtime.openOptionsPage();
        return;
      }

      const img = images.getRandom();
      const imageUrl = img.src;
      jQuery('main').empty().append(`<img style="min-width: 100px; min-height: 100px;max-width: 500px; max-height: 500px;" src="${imageUrl}">`);
      const copyString = `[![LGTM](${imageUrl})](${imageUrl})`;
      jQuery('#clipboard').text(copyString);
      copy();
      const snackbar: any = document.querySelector('#copy-message');
      snackbar.MaterialSnackbar.showSnackbar({ message: 'Copied to clipboard.' });

      chrome.tabs.query({ active: true }, (tab: any) => {
        const tabId: number = tab[0].id;
        chrome.tabs.sendMessage(tabId, copyString, () => {
        });
      });
    });
  }, 10);
});
