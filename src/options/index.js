import {ImageRepository} from "../core/image"

$(() => {
    ImageRepository.load(obj => {
        if (obj.length > 0) {
            console.log(obj)
            $('textarea').text(obj.reduce((a, b) => {
                return a + "\n" + b.value;
            }));
        }
    });

    $('#save').on('click', function () {
        var urls = ImageRepository.save($('#urls').val());
        var snackbarContainer = document.querySelector('#save-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Saved.'})
    });
});
