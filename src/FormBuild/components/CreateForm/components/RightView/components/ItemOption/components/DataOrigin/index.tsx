/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { OptionsOrigin } from "../../../../../../../../methods/types";

import "./index.less";

function DataOrigin({
  value,
  onChange,
}: {
  value?: OptionsOrigin;
  onChange?: (data: OptionsOrigin) => void;
}) {
  const [_value, setValue] = useState<OptionsOrigin>({
    url: "",
    value: "",
    label: "",
    children: "",
  });
  useEffect(() => {
    if (value) {
      setValue({ ...value });
    }
  }, [value]);

  return (
    <div className="form-data-optionsOrigin">
      <Input
        placeholder="数据源地址URL"
        value={_value.url}
        onChange={(e) => {
          _value.url = e.target.value;
        }}
        onBlur={() => {
          if (onChange) onChange(_value);
        }}
      />
      <Input
        placeholder="值字段名(默认取value)"
        style={{ marginTop: "10px" }}
        value={_value.value}
        onChange={(e) => {
          _value.value = e.target.value;
        }}
        onBlur={() => {
          if (onChange) onChange(_value);
        }}
      />
      <Input
        placeholder="名称字段名(默认取label)"
        style={{ marginTop: "10px" }}
        value={_value.label}
        onChange={(e) => {
          _value.label = e.target.value;
        }}
        onBlur={() => {
          if (onChange) onChange(_value);
        }}
      />
      <Input
        placeholder="子级字段名(默认取children)"
        style={{ marginTop: "10px" }}
        value={_value.children}
        onChange={(e) => {
          _value.children = e.target.value;
        }}
        onBlur={() => {
          if (onChange) onChange(_value);
        }}
      />
    </div>
  );
}

DataOrigin.propTypes = {};

DataOrigin.defaultProps = {};

export default DataOrigin;
