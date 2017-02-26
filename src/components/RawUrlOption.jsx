// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../reducers/option';
import { requestUpdateRawUrls, requestEditRawUrls } from '../actions/option';

class RawUrlOption extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.props = props;
    (this: any).handleSave = this.handleSave.bind(this);
    (this: any).handleEdit = this.handleEdit.bind(this);
  }

  props: {
    rawUrls: string,
    updateRawUrls: Function,
    editRawUrls: Function,
  };

  textarea: HTMLTextAreaElement;

  handleSave() {
    this.props.updateRawUrls(this.textarea.value);
  }

  handleEdit(e) {
    this.props.editRawUrls(e.target.value);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="raw0url-textarea">Raw URL List(Separate with line break)</label>
          <textarea
            id="raw-url-textarea" className="form-control" rows="20" value={this.props.rawUrls}
            ref={(textarea) => { this.textarea = textarea; }} onChange={this.handleEdit}
          />
        </div>
        <button
          id="save"
          className="btn btn-primary"
          onClick={this.handleSave}
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
    dispatch(requestEditRawUrls(urls));
  },
  updateRawUrls: (urls: string) => {
    dispatch(requestUpdateRawUrls(urls));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RawUrlOption);
