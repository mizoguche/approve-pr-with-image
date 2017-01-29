import test from 'ava'
import {Image} from '../src/core/image'

test('create image instance', t => {
    const image = new Image('src');
    t.is(image.src, 'src')
});

