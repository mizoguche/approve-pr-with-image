// @flow
import jQuery from 'jquery';
import Clipboad from 'clipboard';

import { imageRepository } from '../application/repositories';

jQuery(document).ready(() => {
  const clipboard = new Clipboad('.btn');
  clipboard.on('success', (e) => {
    console.info(`Copied to clipboard: ${e.text}`)
  });

  imageRepository.fetch().subscribe((images) => {
    if (images.isEmpty()) {
      chrome.runtime.openOptionsPage();
      return;
    }

    const img = images.getRandom();
    const imageUrl = img.src;
    jQuery('main').empty().append(`<img style="min-width: 100px; min-height: 100px;max-width: 500px; max-height: 500px;" src="${imageUrl}">`);
    const copyString = `[![LGTM](${imageUrl})](${imageUrl})`;
    jQuery('#clipboard').attr('data-clipboard-text', copyString);
    jQuery('#clipboard').click();
    jQuery('#alert').show();


    chrome.tabs.query({ active: true }, (tab: any) => {
      const tabId: number = tab[0].id;
      chrome.tabs.sendMessage(tabId, copyString, () => {
      });
    });
  });
});
