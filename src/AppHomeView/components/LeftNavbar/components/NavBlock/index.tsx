/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.less";

function NavBlock({
  title,
  children,
}: {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`nav-block ${open ? "open" : ""}`}>
      <div className="nav-block-header" onClick={() => setOpen(!open)}>
        <span className="nav-title">{title}</span>
        <div className="nav-switch"></div>
      </div>
      <div className="nav-block-content">{children}</div>
    </div>
  );
}

NavBlock.propTypes = {};

NavBlock.defaultProps = {};

export default NavBlock;
