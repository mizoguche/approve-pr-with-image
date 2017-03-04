// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../reducers/option';
import { updateRawUrls, editRawUrls } from '../actions/option';

class RawUrlOption extends Component {
  props: {
    rawUrls: string,
    updateRawUrls: Function,
    editRawUrls: Function,
  };

  textarea: HTMLTextAreaElement;

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="raw0url-textarea">Raw URL List(Separate with line break)</label>
          <textarea
            id="raw-url-textarea"
            className="form-control"
            rows="20" value={this.props.rawUrls}
            ref={(textarea) => { this.textarea = textarea; }}
            onChange={e => this.props.editRawUrls(e.target.value)}
          />
        </div>
        <button
          id="save"
          className="btn btn-primary"
          onClick={() => this.props.updateRawUrls(this.textarea.value)}
        >
          Save
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state: State) => ({
  rawUrls: state.option.rawUrls,
});

const mapDispatchToProps = dispatch => ({
  editRawUrls: (urls: string) => {
    dispatch(editRawUrls(urls));
  },
  updateRawUrls: (urls: string) => {
    dispatch(updateRawUrls(urls));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RawUrlOption);
