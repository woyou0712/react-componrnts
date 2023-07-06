/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";
import { OptionsOrigin } from "../../../../../../methods/types";
import context from "../../../../../../methods/context";

import "./index.less";

function OptionsDataOrigin({
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

  const modules = useContext(context);
  const type = modules.form.activeItem ? modules.form.activeItem.type : null;

  useEffect(() => {
    if (value) {
      setValue({ ...value });
    }
  }, [value]);

  return (
    <div className="form-data-optionsOrigin">
      <Form.Item label="数据地址">
        <Input
          placeholder="输入数据源地址(以HTTP开头的GET请求地址)"
          value={_value.url}
          onChange={(e) => {
            _value.url = e.target.value;
          }}
          onBlur={() => {
            if (onChange) onChange(_value);
          }}
        />
      </Form.Item>
      <Form.Item label="值字段名">
        <Input
          placeholder="值字段名(默认取value)"
          value={_value.value}
          onChange={(e) => {
            _value.value = e.target.value;
          }}
          onBlur={() => {
            if (onChange) onChange(_value);
          }}
        />
      </Form.Item>{" "}
      <Form.Item label="名称字段">
        <Input
          placeholder="名称字段名(默认取label)"
          value={_value.label}
          onChange={(e) => {
            _value.label = e.target.value;
          }}
          onBlur={() => {
            if (onChange) onChange(_value);
          }}
        />
      </Form.Item>
      {type === "cascader" ? (
        <Form.Item label="子级字段">
          <Input
            placeholder="子级字段名(默认取children)"
            value={_value.children}
            onChange={(e) => {
              _value.children = e.target.value;
            }}
            onBlur={() => {
              if (onChange) onChange(_value);
            }}
          />
        </Form.Item>
      ) : null}
    </div>
  );
}

OptionsDataOrigin.propTypes = {};

OptionsDataOrigin.defaultProps = {};

export default OptionsDataOrigin;
