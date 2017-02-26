// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  props: {
    children: any,
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
