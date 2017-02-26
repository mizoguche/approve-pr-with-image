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
    path: string,
    children: any,
    fetchImages: Function,
  };

  buildNavItemClass(path: string) {
    return `nav-link${this.props.path === path ? ' active' : ''}`;
  }

  render() {
    return (
      <div className="container-fluid" style={{ margin: '20px auto', maxWidth: '800px' }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={this.buildNavItemClass('/')} href="#/">Images</a>
          </li>
          <li className="nav-item">
            <a className={this.buildNavItemClass('/raw')} href="#/raw">Buld Edit</a>
          </li>
        </ul>
        <div style={{ margin: '20px' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  path: state.routing.locationBeforeTransitions.pathname,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => {
    dispatch(requestFetchImages());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
