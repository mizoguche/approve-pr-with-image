// @flow
import { imageRepository } from '../application/repositories';
import Image from '../domain/image/Image';

chrome.contextMenus.create({
  id: 'ApproveLGTM',
  title: 'Add this as LGTM image',
  contexts: ['image'],
  onclick: (info: any) => {
    if (info.menuItemId === 'ApproveLGTM') {
      const url: string = info.srcUrl;
      imageRepository.fetch().subscribe((images) => {
        images.add(new Image(url));
        imageRepository.store(images).subscribe();
      });
    }
  },
});
