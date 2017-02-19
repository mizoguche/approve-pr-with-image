// @flow
export default class Image {
  src: string;

  constructor(src) {
    const re = /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    if (!re.exec(src)) {
      throw new Error('src must be url');
    }
    this.src = src;
  }
}
