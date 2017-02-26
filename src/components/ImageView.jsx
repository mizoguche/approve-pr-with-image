// @flow
import React, { Component } from 'react';
import Image from '../domain/image/Image';

export default class ImageView extends Component {
  props: {
    image: Image,
  };

  render() {
    return (
      <li className="mdl-list_item" style={{ margin: '10px 0', height: '120px' }}>
        <a href={this.props.image.src} rel="noopener noreferrer" target="_blank">
          <img alt={this.props.image.src} style={{ height: '100%' }} src={this.props.image.src} />
        </a>
      </li>
    );
  }
}
