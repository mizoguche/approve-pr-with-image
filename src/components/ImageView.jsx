// @flow
import React, { Component } from 'react';
import Image from '../domain/Image';

export default class ImageView extends Component {
  props: {
    image: Image,
    showPreview: Function,
    remove: Function,
  };

  render() {
    return (
      <li className="image-view">
        <div className="image-container">
          <img alt="approve" style={{ maxHeight: '180px', maxWidth: '180px' }} src={this.props.image.src} />
        </div>
        <a
          tabIndex="-1"
          className="remove-button-container"
          onClick={() => { this.props.showPreview(this.props.image.src); }}
        >
          <button
            type="button"
            className="remove-button"
            aria-label="Close"
            onClick={(ev) => {
              ev.stopPropagation();
              this.props.remove(this.props.image);
            }}
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </a>
      </li>
    );
  }
}
