import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input, Space } from "antd";
import { removeEmpty, removeEmjio } from "../../../../../../methods/utils";

function Inputs({
  value,
  onChange,
}: {
  value?: string[];
  onChange?: (v: string[]) => void;
}) {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  useEffect(() => {
    if (!value || !value.length) {
      setV1("");
      setV2("");
    } else {
      setV1(value[0]);
      setV2(value[1]);
    }
  }, [value]);
  return (
    <Space>
      <Input
        value={v1}
        onChange={(e) => {
          if (onChange) {
            let v = removeEmpty(e.target.value);
            v = removeEmjio(v);
            setV1(v);
            if (onChange) onChange([v, v2]);
          }
        }}
      />
      <Input
        value={v2}
        onChange={(e) => {
          if (onChange) {
            let v = removeEmpty(e.target.value);
            v = removeEmjio(v);
            setV2(v);
            if (onChange) onChange([v1, v]);
          }
        }}
      />
    </Space>
  );
}

Inputs.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
};

Inputs.defaultProps = {};

export default Inputs;
