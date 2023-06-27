/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { SelfRule } from "../../../../../../../../methods/types.d";
import DeleteButton from "../../../../../DeleteButton";
import "./index.less";

function RulesOptions({
  value,
  onChange,
}: {
  value?: SelfRule[];
  onChange?: (data: SelfRule[]) => void;
}) {
  return (
    <div className="form-rules-options">
      {value
        ? value.map((rule, index) => {
            const key = `rule-${index}`;
            return (
              <div key={key} className="form-rule-options-item">
                <DeleteButton
                  onClick={() => {
                    value.splice(index, 1);
                    if (onChange) onChange(value);
                  }}
                />
                <Input
                  value={rule.pattern}
                  placeholder="正则表达式"
                  onChange={(e) => {
                    rule.pattern = e.target.value;
                  }}
                  onBlur={() => {
                    if (onChange) onChange(value);
                  }}
                />
                <Input
                  value={rule.message}
                  placeholder="提示文本"
                  style={{ marginTop: "10px" }}
                  onChange={(e) => {
                    rule.message = e.target.value;
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
        className="form-rule-options-item button"
        onClick={() => {
          const rules = value || [];
          rules.push({});
          if (onChange) onChange(rules);
        }}
      >
        +添加校验规则
      </div>
    </div>
  );
}

RulesOptions.propTypes = {};

RulesOptions.defaultProps = {};

export default RulesOptions;