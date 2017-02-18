import { imageRepository, Image } from '../domain/image';

chrome.contextMenus.create({
  id: 'ApproveLGTM',
  title: 'Add this as LGTM image',
  contexts: ['image'],
  onclick: (info) => {
    if (info.menuItemId === 'ApproveLGTM') {
      imageRepository.fetch((images) => {
        images.add(new Image(info.srcUrl));
        imageRepository.store(images);
      });
    }
  },
});
