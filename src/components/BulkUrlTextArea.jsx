// @flow

import React, { Component } from 'react';

export default class BulkUrlTextArea extends Component {
  // constructor(props, context, updater) {
    // super(props, context, updater);
    // this.handleChange = this.handleChange.bind(this);
  // }

  props: {
    bulkUrls: string,
  };

  handleChange() {
    // TODO: handle change
  }

  render() {
    const { bulkUrls } = this.props;
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <textarea className="mdl-textfield__input" rows="5" value={bulkUrls} onChange={this.handleChange} />
        <label className="mdl-textfield__label" htmlFor="urls">
          Input image urls(separated with line break)...
        </label>
      </div>
    );
  }
}
