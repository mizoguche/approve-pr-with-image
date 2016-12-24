class Urls {
    static save(urlsString) {
        for (var u of urlsString.split("\n")) {
            // Validate
        }
        localStorage.setItem('urls', urlsString);
    }

    static load() {
        var urls = localStorage.getItem('urls');
        if (!urls) {
            return '';
        }

        return urls;
    }
}

$(function () {
    var urls = Urls.load().split("\n");
    var url = urls[Math.random() * urls.length]
    console.log(url)
    $('main').text(url);
});

$(function () {
    var urls = Urls.load();
    $('#urls').val(urls.toString());

    $('#save').on('click', function () {
        var urls = Urls.save($('#urls').val());
        var snackbarContainer = document.querySelector('#save-message');
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Saved.'})
    });
});