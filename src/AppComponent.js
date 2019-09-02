import React from "react";
import ReactDOM from "react-dom";

import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import StyledMaterialComponent from "./StyledMaterialComponent";

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>
          <div>A styled Material-UI component:</div>
          <StyledMaterialComponent />
        </p>
        <p>
          <div>An icon from Material-UI:</div>
          {<AccessAlarmIcon />}
        </p>
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
