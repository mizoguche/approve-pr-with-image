import {imageRepository, Images} from "../core/image"

$(() => {
    imageRepository.fetch(images => {
        let url = ''
        console.log(images)
        images.images.forEach(img => url += img.src + "\n")
        $('textarea').text(url);
    })

    $('#save').on('click', function () {
        var images = new Images($('#urls').val());
        imageRepository.store(images, () => {
            var snackbarContainer = document.querySelector('#save-message');
            snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Saved.'})
        })
    });
});
