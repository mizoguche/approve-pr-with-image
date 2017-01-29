import {imageRepository, Image} from "../core/image"

chrome.contextMenus.create({
    id: 'ApproveLGTM',
    title: "Add this as LGTM image",
    contexts: ['image'],
    onclick: (info, tab) => {
        if (info.menuItemId === 'ApproveLGTM') {
            imageRepository.fetch(images => {
                images.add(new Image(info.srcUrl))
                imageRepository.store(images)
            })
        }
    }
});