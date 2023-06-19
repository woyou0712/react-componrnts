/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import context from "../../../../methods/context";
import { ItemTypeOption } from "../../../../methods/types.d";
import "./index.less";

function TypeItem({ type }: { type: ItemTypeOption }) {
  const module = useContext(context);

  return <div className="create-form-left-type">{type.label}</div>;
}

TypeItem.propTypes = {
  type: PropTypes.object,
};

TypeItem.defaultProps = {};

export default TypeItem;
