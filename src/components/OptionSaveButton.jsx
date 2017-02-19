// @flow
import React, { Component } from 'react';

export default class OptionSaveButton extends Component {
  render() {
    return (
      <div>
        <button id="save" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Save
        </button>
      </div>
    );
  }
}
