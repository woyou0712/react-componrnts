import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { removeEmpty, removeEmjio } from "../../../../../../methods/utils";

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        if (onChange) {
          let v = removeEmpty(e.target.value);
          v = removeEmjio(v);
          onChange(v);
        }
      }}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {};

export default TextInput;
