import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import json from "./file.json";

export default class extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>A JSON file:</div>
          <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
        <div>
          <div> A Button from the project:</div>
          <Button />
        </div>
        <div>
          <span className="tag">Portlet Namespace:</span>
          <span className="value">{this.props.portletNamespace}</span>
        </div>
        <div>
          <span className="tag">Context Path:</span>
          <span className="value">{this.props.contextPath}</span>
        </div>
        <div>
          <span className="tag">Portlet Element Id:</span>
          <span className="value">{this.props.portletElementId}</span>
        </div>
      </div>
    );
  }
}
