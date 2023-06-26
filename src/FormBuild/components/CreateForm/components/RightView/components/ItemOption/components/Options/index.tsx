/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Input, Space } from "antd";
import { OptionType } from "../../../../../../../../methods/types.d";
import DeleteButton from "../../../../../DeleteButton";
import "./index.less";

function Options({
  value,
  onChange,
}: {
  value?: OptionType[];
  onChange?: (data: OptionType[]) => void;
}) {
  return (
    <div className="form-optios-options">
      {value
        ? value.map((option, index) => {
            const key = `option-${index}`;
            return (
              <div key={key} className="form-option-options-item">
                <DeleteButton
                  onClick={() => {
                    value.splice(index, 1);
                    if (onChange) onChange(value);
                  }}
                />
                <Input
                  value={option.value}
                  placeholder="编码"
                  onChange={(e) => {
                    option.value = e.target.value;
                  }}
                  onBlur={() => {
                    if (onChange) onChange(value);
                  }}
                />
                <Input
                  value={option.label}
                  placeholder="名称"
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    option.label = e.target.value;
                  }}
                  onBlur={() => {
                    if (onChange) onChange(value);
                  }}
                />
              </div>
            );
          })
        : null}
      <div
        className="form-option-options-item button"
        onClick={() => {
          const options = value || [];
          options.push({});
          if (onChange) onChange(options);
        }}
      >
        +添加选项
      </div>
    </div>
  );
}

Options.propTypes = {};

Options.defaultProps = {};

export default Options;
