import {imageRepository} from "../core/image"

var copy = () => {
    $('#clipboard').show();
    $('#clipboard').focus();
    $('#clipboard').select();
    document.execCommand("Copy");
    window.getSelection().removeAllRanges();
    $('#clipboard').hide();
};

// TODO: Use callback that MDL snackbar is ready
setTimeout(() => {
    imageRepository.fetch(images => {
        if (images.isEmpty()) {
            chrome.runtime.openOptionsPage();
            return;
        }

        const img = images.getRandom()
        console.log(img)
        const imageUrl = img.src
        $('main').empty().append('<img style="min-width: 100px; min-height: 100px;max-width: 500px; max-height: 500px;" src="' + imageUrl + '">');
        const copyString = '[![LGTM](' + imageUrl + ')](' + imageUrl + ')';
        $('#clipboard').text(copyString);
        copy();
        const snackbarContainer = document.querySelector('#copy-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Copied to clipboard.'})

        chrome.tabs.query({"active": true}, function (tab) {
            const tabId = tab[0].id;
            chrome.tabs.sendMessage(tabId, copyString, (response) => {
                console.log("Image markdown pasted.");
            });
        });
    })
}, 10)

