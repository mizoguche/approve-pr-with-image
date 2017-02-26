// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../reducers/option';
import { requestFetchImages, requestUpdateRawUrls, requestEditRawUrls } from '../actions/option';

class RawUrlOption extends Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.props = props;
    (this: any).handleSave = this.handleSave.bind(this);
    (this: any).handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchImages();
  }

  componentDidUpdate() {
    const textarea = document.querySelector('.mdl-textfield');
    textarea.MaterialTextfield.checkDirty();
  }

  props: {
    rawUrls: string,
    fetchImages: Function,
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
      <div className="mdl-layout__content mdl-grid" style={{ justifyContent: 'center' }}>
        <div className="mdl-cell mdl-cell--9-col">
          <div className="mdl-textfield mdl-js-textfield" style={{ width: '100%' }}>
            <textarea className="mdl-textfield__input" rows="10" value={this.props.rawUrls} ref={(textarea) => { this.textarea = textarea; }} onChange={this.handleEdit} />
            <label className="mdl-textfield__label" htmlFor="urls">
              Input image urls(separated with line break)...
            </label>
          </div>
          <div>
            <button id="save" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  rawUrls: state.option.rawUrls,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => {
    dispatch(requestFetchImages());
  },
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
