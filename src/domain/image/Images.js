// @flow

export default class Images {
  images: Image[];

  constructor(text: string) {
    this.images = [];
    if (!text) {
      return;
    }
    const lines = text.split('\n');
    lines.forEach((l) => {
      try {
        const img = new Image(l);
        this.images.push(img);
      } catch (e) {
        // ignore invalid url string
      }
    });
  }

  add(image: Image) {
    this.images.push(image);
  }

  getRandom() {
    if (this.isEmpty()) {
      throw new Error('this instance have no image');
    }

    const index = Math.floor(Math.random() * this.images.length);
    return this.images[index];
  }

  isEmpty() {
    return this.images.length === 0;
  }
}
