/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

import "./index.less";

function AppBox({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <div className="app-view-box">
      <div className="app-view">
        <div className="app-view-header">
          <div className="header-name">中国电信</div>
          <div className="header-camera" />
          <div className="header-network">
            <div className="network-item" style={{ height: "3px" }} />
            <div className="network-item" style={{ height: "5px" }} />
            <div className="network-item" style={{ height: "7px" }} />
            <div className="network-item" style={{ height: "9px" }} />
            <div className="network-item" style={{ height: "11px" }} />
          </div>
        </div>
        <div className="app-view-content">
          <div id="app-view" />
        </div>
        <div className="app-view-footer">
          <div className="footer-btn" />
        </div>
      </div>
    </div>
  );
}

AppBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};

AppBox.defaultProps = {};

export default AppBox;
