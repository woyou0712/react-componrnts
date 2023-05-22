/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import ViewNode from "../../ViewNode";
import context from "../../methods/context";
import NavBlock from "./components/NavBlock";

import "./index.less";

function LeftNavbar() {
  const { viewNode } = useContext(context);
  return (
    <div className="left-navbar">
      <NavBlock title="基础组件">
        <div className="navbar-list">
          {ViewNode.nodeTypes.map((item) => (
            <div
              className="nav-item"
              draggable
              key={item.type}
              title={item.name}
              onDragStart={(e) => {
                viewNode?.moveCreateNode(item.type);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </NavBlock>
    </div>
  );
}

LeftNavbar.propTypes = {};

LeftNavbar.defaultProps = {};

export default LeftNavbar;
