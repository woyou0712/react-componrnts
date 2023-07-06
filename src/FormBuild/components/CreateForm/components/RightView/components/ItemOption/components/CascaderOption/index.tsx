/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, Switch } from "antd";
import { ItemAttribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import OptionsDataOrigin from "../../../OptionsDataOrigin";

import "./index.less";

function CascaderOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      multiple: _data.attribute.multiple,
      optionsOrigin: _data.attribute.optionsOrigin,
      placeholder: _data.attribute.placeholder,
      defaultValue: _data.attribute.defaultValue,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: ItemAttribute) => {
    console.log(attribute);
    data?.pushAttribute(attribute);
  };
  return data ? (
    <div className="CascaderOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="多选" name="multiple" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="数据源" name="optionsOrigin">
          <OptionsDataOrigin />
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <Input />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

CascaderOption.propTypes = {};

CascaderOption.defaultProps = {};

export default CascaderOption;
