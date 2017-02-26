// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from '../domain/image/Image';

export default class ImageView extends Component {
  props: {
    image: Image,
  };

  render() {
    return (
      <li className="mdl-list_item" style={{ margin: '10px 0', height: '120px' }}>
        <img style={{ height: '100%' }} src={this.props.image.src} />
      </li>
    );
  }
}
