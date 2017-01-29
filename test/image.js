import test from 'ava'
import {Image, Images} from '../src/core/image'

test('create image instance', t => {
    const image = new Image('src');
    t.is(image.src, 'src')
});

test('create images instance', t => {
    const images = new Images();
    const image = new Image('src');
    images.add(new Image('http://example.com/1.png'))
    images.add(new Image('http://example.com/2.png'))
    images.add(new Image('http://example.com/3.png'))
    images.add(new Image('http://example.com/4.png'))
    images.add(new Image('http://example.com/5.png'))
    t.is(images.images.length, 5)
    t.is(images.images[0].src, 'http://example.com/1.png')
});

test('get random image from images', t => {
    const images = new Images();
    images.add(new Image('http://example.com/1.png'))
    images.add(new Image('http://example.com/2.png'))
    images.add(new Image('http://example.com/3.png'))
    images.add(new Image('http://example.com/4.png'))
    images.add(new Image('http://example.com/5.png'))

    const img = images.getRandom()
    const result = /http:\/\/example\.com\/(\d)\.png/.exec(img.src)
    t.not(result, null)
    t.true(0 < parseInt(result[1]) && parseInt(result[1]) <= 5)
});
