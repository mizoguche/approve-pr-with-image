// @flow
import React, { Component } from 'react';
import Image from '../domain/image/Image';

export default class ImageView extends Component {
  props: {
    image: Image,
    showPreview: Function,
    remove: Function,
  };

  render() {
    return (
      <li
        className="float-left"
        style={{ listStyle: 'none', margin: '10px', height: '180px', width: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <button type="button" className="close float-right" aria-label="Close" onClick={() => this.props.remove(this.props.image)}>
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
        <a
          href="#/"
          onClick={() => this.props.showPreview(this.props.image.src)}
        >
          <img alt="approve" style={{ maxHeight: '180px', maxWidth: '180px' }} src={this.props.image.src} />
        </a>
      </li>
    );
  }
}
