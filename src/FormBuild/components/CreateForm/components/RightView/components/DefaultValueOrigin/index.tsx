/* eslint-disable */
import React, { useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select } from "antd";
import { ValueOrigin } from "../../../../../../methods/types";
import context from "../../../../../../methods/context";
import "./index.less";

function DefaultValueOrigin({
  value,
  onChange,
}: {
  value?: ValueOrigin;
  onChange?: (v: ValueOrigin) => void;
}) {
  const modules = useContext(context);
  const [defaultOrigin, setDefaultOrigin] = useState<ValueOrigin>({
    url: "",
    keys: "",
    joinItem: "",
    paramsKey: "",
  });
  const valueType = modules.form.activeItem
    ? modules.form.activeItem.attribute.defaultValueOriginType
    : null;

  const itemOptions = useMemo(() => {
    const _data = Object.keys(modules.form.allItemMap).map((id) => {
      const item = modules.form.allItemMap[id];
      return {
        id: item.id,
        value: item.name,
        label: item.label,
      };
    });
    console.log(_data);
    return _data.filter((item) => item.id !== modules.form.activeItem?.id);
  }, [modules]);
  useEffect(() => {
    if (value) setDefaultOrigin(value);
  }, [value]);

  return (
    <div className="DefaultValueOrigin">
      <Form.Item label="数据地址">
        <Input
          value={defaultOrigin.url}
          onChange={(e) => {
            const v = e.target.value;
            setDefaultOrigin({ ...defaultOrigin, url: v });
          }}
          placeholder="输入数据源地址(以HTTP开头的GET请求地址)"
          onBlur={() => {
            if (onChange) onChange(defaultOrigin);
          }}
        />
      </Form.Item>
      <Form.Item label="取值路径">
        <Input
          value={defaultOrigin.keys}
          onChange={(e) => {
            const v = e.target.value;
            setDefaultOrigin({ ...defaultOrigin, keys: v });
          }}
          placeholder="输入取值路径(例如：data.username)"
          onBlur={() => {
            if (onChange) onChange(defaultOrigin);
          }}
        />
      </Form.Item>
      {valueType === "join" ? (
        <>
          <Form.Item label="关联字段">
            <Select
              placeholder="请选择关联字段"
              value={defaultOrigin.joinItem}
              onChange={(v) => {
                const d = { ...defaultOrigin, joinItem: v };
                setDefaultOrigin(d);
                if (onChange) onChange(d);
              }}
              options={itemOptions}
            />
          </Form.Item>
          <Form.Item label="入参字段">
            <Input
              value={defaultOrigin.paramsKey}
              onChange={(e) => {
                const v = e.target.value;
                setDefaultOrigin({ ...defaultOrigin, paramsKey: v });
              }}
              placeholder="请输入参数字段名"
              onBlur={() => {
                if (onChange) onChange(defaultOrigin);
              }}
            />
          </Form.Item>
        </>
      ) : null}
    </div>
  );
}

DefaultValueOrigin.propTypes = {};

DefaultValueOrigin.defaultProps = {};

export default DefaultValueOrigin;
