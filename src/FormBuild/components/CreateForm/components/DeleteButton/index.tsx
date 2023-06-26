/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { CloseOutlined } from "@ant-design/icons";

import "./index.less";

function DeleteButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="form-delete-button"
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      <CloseOutlined className="delete-icon" />
    </div>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};

DeleteButton.defaultProps = {};

export default DeleteButton;
