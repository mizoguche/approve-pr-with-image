import {Urls} from "../core/url"

$(() => {
    var urls = Urls.load();
    if (urls.length > 0) {
        $('textarea').text(urls.reduce((a, b) => {
            return a + "\n" + b.value;
        }));
    }

    $('#save').on('click', function () {
        var urls = Urls.save($('#urls').val());
        var snackbarContainer = document.querySelector('#save-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Saved.'})
    });
});
