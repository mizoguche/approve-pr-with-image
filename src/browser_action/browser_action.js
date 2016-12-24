function load() {
    var urls = localStorage.getItem('urls');
    if (!urls) {
        chrome.runtime.openOptionsPage();
        return '';
    }

    return urls;
}

function copy(){
    $('#clipboard').show();
    $('#clipboard').focus();
    $('#clipboard').select();
    document.execCommand("Copy");
    window.getSelection().removeAllRanges();
    $('#clipboard').hide();
}

// TODO: Use callback that MDL snackbar is ready
setTimeout(() =>{
    var urls = load().split("\n");
    var imageUrl = urls[Math.floor(Math.random() * urls.length)]
    $('main').empty().append('<img style="max-width: 300px; max-height: 300px;" src="' + imageUrl + '">');

    var tabId   = 0;
    chrome.tabs.query({"active": true}, function(tab){
        tabId = tab[0].id;
    });
    var copyString = '[![LGTM](' + imageUrl + ')](' + imageUrl + ')';
    $('#clipboard').text(copyString);
    copy();
    chrome.tabs.sendMessage(tabId, copyString, function(response){});
    var snackbarContainer = document.querySelector('#copy-message');
    snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Copied to clipboard.'})
}, 10)

