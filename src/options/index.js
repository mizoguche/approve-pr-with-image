import {Urls} from "../core/url"

$(() => {
    Urls.load(obj => {
        if (obj.length > 0) {
            console.log(obj)
            $('textarea').text(obj.reduce((a, b) => {
                return a + "\n" + b.value;
            }));
        }
    });

    $('#save').on('click', function () {
        var urls = Urls.save($('#urls').val());
        var snackbarContainer = document.querySelector('#save-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Saved.'})
    });
});
