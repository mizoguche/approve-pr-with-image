// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { requestFetchImages } from '../actions/option';
import ImagesView from './ImagesView';
import RawUrlOption from './RawUrlOption';

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  props: {
    fetchImages: Function,
  };

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          <a href="#images-view" className="mdl-tabs__tab is-active">Images</a>
          <a href="#raw-url" className="mdl-tabs__tab">Bulk Edit</a>
        </div>
        <div className="mdl-tabs__panel is-active" id="images-view">
          <ImagesView />
        </div>
        <div className="mdl-tabs__panel" id="raw-url">
          <RawUrlOption />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({ });

const mapDispatchToProps = dispatch => ({
  fetchImages: () => {
    dispatch(requestFetchImages());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
