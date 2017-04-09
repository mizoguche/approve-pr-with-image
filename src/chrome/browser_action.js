// @flow
import jQuery from 'jquery';
import Clipboad from 'clipboard';

import { imageRepository } from '../application/repositories';

const createImageElement = (imageUrl: string) => {
  jQuery('main')
    .empty()
    .append(`<img style="min-width: 100px; min-height: 100px;max-width: 500px; max-height: 500px;" src="${imageUrl}">`);
};

const copyToClipboard = (text: string) => {
  jQuery('#clipboard').attr('data-clipboard-text', text);
  jQuery('#clipboard').click();
  jQuery('#alert').show();
};

const notifyTextToTab = (text: string) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs: Array) => {
    const tabId: number = tabs[0].id;
    chrome.tabs.sendMessage(tabId, text, () => { });
  });
};

jQuery(document).ready(() => {
  const clipboard = new Clipboad('.btn');
  clipboard.on('success', (e) => {
    console.info(`Copied to clipboard: ${e.text}`);
  });

  imageRepository
    .fetch()
    .subscribe((images) => {
      if (images.isEmpty()) {
        chrome.runtime.openOptionsPage();
        return;
      }

      const img = images.getRandom();
      const imageUrl = img.src;
      createImageElement(imageUrl);

      const imageText = `[![LGTM](${imageUrl})](${imageUrl})`;
      copyToClipboard(imageText);
      notifyTextToTab(imageText);
    });
});
