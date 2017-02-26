// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFetchImages } from '../actions/option';

class App extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  props: {
    children: any,
    fetchImages: Function,
  };

  render() {
    return (
      <div>
        {this.props.children}
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
