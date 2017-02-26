// @flow
import React, { Component } from 'react';
import Image from '../domain/image/Image';

export default class ImageView extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    (this: any).handlePreview = this.handlePreview.bind(this);
  }

  props: {
    image: Image,
    showPreview: Function,
  };

  handlePreview() {
    this.props.showPreview(this.props.image.src);
  }

  render() {
    return (
      <li style={{ listStyle: 'none', margin: '10px 0', height: '120px' }}>
        <a
          href="#/"
          onClick={this.handlePreview}
        >
          <img alt={this.props.image.src} style={{ height: '100%' }} src={this.props.image.src} />
        </a>
      </li>
    );
  }
}
