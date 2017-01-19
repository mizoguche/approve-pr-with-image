import {Urls} from "../core/url"

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
    Urls.loadRandom(imageUrl =>{
        if (!imageUrl) {
            chrome.runtime.openOptionsPage();
            return;
        }

        $('main').empty().append('<img style="max-width: 500px; max-height: 500px;" src="' + imageUrl + '">');
        var copyString = '[![LGTM](' + imageUrl + ')](' + imageUrl + ')';
        $('#clipboard').text(copyString);
        copy();
        var snackbarContainer = document.querySelector('#copy-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Copied to clipboard.'})

        chrome.tabs.query({"active": true}, function (tab) {
            var tabId = tab[0].id;
            chrome.tabs.sendMessage(tabId, copyString, (response) => {
                console.log("Image markdown pasted.");
            });
        });
    });
}, 10)

