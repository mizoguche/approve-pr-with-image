// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../reducers/option';
import Images from '../domain/image/Images';
import ImageView from './ImageView';

class ImagesView extends Component {
  props: {
    images: Images,
  };

  render() {
    const imgs = [];
    this.props.images.images.forEach(img => imgs.push(<ImageView key={img.src} image={img} />));
    return (
      <div className="mdl-layout__content mdl-grid" style={{ justifyContent: 'center', height: '100%' }}>
        <div className="mdl-cell mdl-cell--4-col">
          <ul className="mdl-list">
          {imgs}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  images: state.option.images,
});

const mapDispatchToProps = () => ({ });


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesView);
