export class Image {
    src: string

    constructor(src) {
        const re = /https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
        if (!re.exec(src)) {
            throw new Error("src must be url")
        }
        this.src = src;
    }
}

export class Images {
    images: Image[]

    constructor() {
        this.images = []
    }

    add(image: Image) {
        this.images.push(image)
    }

    getRandom() {
        if (this.isEmpty()) {
            throw new Error("this instance have no image")
        }

        const index = Math.floor(Math.random() * this.images.length)
        return this.images[index]
    }

    isEmpty() {
        return this.images.length == 0
    }
}

export class ImageRepository {
    storage: Storage

    constructor(storage: Storage) {
        this.storage = storage
    }

    fetch(callback) {
        this.storage.fetch(callback)
    }

    store(images: Images) {
        this.storage.store(images)
    }
}
