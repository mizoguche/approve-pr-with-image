// @flow

import { Images } from "../domain/image";
import React, { Component } from 'react';

export default class BulkUrlTextArea extends Component {
  props: {
    bulkUrls: string,
    images: Images,
  };

  constructor(props, context, updater) {
    super(props, context, updater);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
  }

  render() {
    const { bulkUrls } = this.props;
    return (
      <div className="mdl-textfield mdl-js-textfield">
        <textarea className="mdl-textfield__input" rows="5" value={bulkUrls} onChange={this.handleChange}/>
        <label className="mdl-textfield__label" htmlFor="urls">
          Input image urls(separated with line break)...
        </label>
      </div>
    );
  }
}
