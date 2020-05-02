"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChromeStorage_1 = require("../data/ChromeStorage");
chrome.contextMenus.create({
    id: 'ApproveLGTM',
    title: 'Add this as LGTM image',
    contexts: ['image'],
    onclick: async (info) => {
        if (info.menuItemId === 'ApproveLGTM') {
            const url = info.srcUrl || '';
            const images = await ChromeStorage_1.getImages();
            images.push({ src: url });
            await ChromeStorage_1.storeImages(images);
        }
    },
});
