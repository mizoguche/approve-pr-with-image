// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Images from '../domain/image/Images';
import { requestFetchImages } from '../actions/option';
import BulkUrlTextArea from '../components/BulkUrlTextArea';
import OptionSaveButton from '../components/OptionSaveButton';

class BulkUrlOption extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.props = props;
  }

  componentWillMount() {
    this.props.fetchImages();
  }

  props: {
    images: Images,
    bulkUrls: string,
    fetchImages: Function,
  };

  render() {
    return (
      <div>
        <BulkUrlTextArea images={this.props.images} bulkUrls={this.props.bulkUrls} />
        <OptionSaveButton />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    bulkUrls: state.bulkUrls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => {
      dispatch(requestFetchImages());
    },
  };
};


const bulkUrlOption = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BulkUrlOption);


export default bulkUrlOption;
