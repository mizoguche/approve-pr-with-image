// @flow
import test from 'ava';
import Image from '../src/domain/Image';
import Images from '../src/domain/Images';


test('create image instance', (t) => {
  const image = new Image('http://example.com/1.png');
  t.is(image.src, 'http://example.com/1.png');
});

test('image src must be validate', (t) => {
  t.throws(() => new Image('not url'));
});

test('create images instance', (t) => {
  const images = new Images('');
  images.add(new Image('http://example.com/1.png'));
  images.add(new Image('http://example.com/2.png'));
  images.add(new Image('http://example.com/3.png'));
  images.add(new Image('http://example.com/4.png'));
  images.add(new Image('http://example.com/5.png'));
  t.is(images.images.length, 5);
  t.is(images.images[0].src, 'http://example.com/1.png');
});

test('create images with url text', (t) => {
  const images = new Images(`
http://example.com/1.png
http://example.com/2.png
not html line
http://example.com/3.png
`);
  t.is(images.images.length, 3);
  t.is(images.images[0].src, 'http://example.com/1.png');
});

test('check images are available', (t) => {
  const images = new Images('');
  t.true(images.isEmpty());
});

test('get random image from images', (t) => {
  const images = new Images('');
  images.add(new Image('http://example.com/1.png'));
  images.add(new Image('http://example.com/2.png'));
  images.add(new Image('http://example.com/3.png'));
  images.add(new Image('http://example.com/4.png'));
  images.add(new Image('http://example.com/5.png'));

  const img = images.getRandom();
  const result = /http:\/\/example\.com\/(\d)\.png/.exec(img.src);
  t.not(result, null);
  const resultFileNumber = parseInt(result[1], 10);
  t.true(resultFileNumber > 0 && resultFileNumber <= 5);
});
