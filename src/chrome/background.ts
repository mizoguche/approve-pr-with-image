import { getImages, storeImages } from '../data/ChromeStorage';
import OnClickData = chrome.contextMenus.OnClickData;

chrome.contextMenus.create({
  id: 'ApproveLGTM',
  title: 'Add this as LGTM image',
  contexts: ['image'],
  onclick: async (info: OnClickData) => {
    if (info.menuItemId === 'ApproveLGTM') {
      const url = info.srcUrl || '';
      const images = await getImages();
      images.push({ src: url });
      await storeImages(images);
    }
  },
});
