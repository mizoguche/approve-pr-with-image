// @flow
import React, { Component } from 'react';
import Image from '../domain/image/Image';

export default class ImageView extends Component {
  constructor(props: any, context: any, updater: any) {
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
      <li
        className="float-left"
        style={{ listStyle: 'none', margin: '10px', height: '180px', width: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <a
          href="#/"
          onClick={this.handlePreview}
        >
          <img alt="image for approve" style={{ maxHeight: '180px', maxWidth: '180px' }} src={this.props.image.src} />
        </a>
      </li>
    );
  }
}
