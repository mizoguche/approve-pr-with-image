import {ImageRepository} from "../core/image"

chrome.contextMenus.create({
    id: 'ApproveLGTM',
    title: "Add this as LGTM image",
    contexts: ['image'],
    onclick: (info, tab) => {
        if (info.menuItemId === 'ApproveLGTM') {
            ImageRepository.add(info.srcUrl);
        }
    }
});