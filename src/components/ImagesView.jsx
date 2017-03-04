// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'react-modal-bootstrap';

import type { State } from '../reducers/option';
import Image from '../domain/image/Image';
import Images from '../domain/image/Images';
import ImageView from './ImageView';
import { showPreview, hidePreview, removeImage } from '../actions/option';

class ImagesView extends Component {
  props: {
    isPreviewing: boolean,
    previewingImageSrc: string,
    images: Images,
    showPreview: Function,
    hidePreview: Function,
    removeImage: Function,
  };

  render() {
    const imgs = [];
    this.props.images.images.forEach(img => imgs.push(<ImageView
      key={img.src}
      image={img}
      showPreview={this.props.showPreview}
      remove={this.props.removeImage}
    />));

    return (
      <div style={{ margin: '20px' }}>
        <ul>
          {imgs}
        </ul>
        <Modal isOpen={this.props.isPreviewing} onRequestHide={this.props.hidePreview} size="modal-lg">
          <ModalHeader>
            <div style={{ width: '100%' }}>
              <button type="button" className="close float-right" aria-label="Close" onClick={this.props.hidePreview}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <img src={this.props.previewingImageSrc} alt={this.props.previewingImageSrc} style={{ width: '100%' }} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  isPreviewing: state.option.isPreviewing,
  previewingImageSrc: state.option.previewingImageSrc,
  images: state.option.images,
});

const mapDispatchToProps = dispatch => ({
  showPreview: (src) => {
    dispatch(showPreview(src));
  },
  hidePreview: () => {
    dispatch(hidePreview());
  },
  removeImage: (image: Image) => {
    dispatch(removeImage(image));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesView);
