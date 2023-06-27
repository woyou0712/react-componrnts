/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, InputNumber } from "antd";
import { Attribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";

import "./index.less";

function SliderOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      min: _data.attribute.min,
      max: _data.attribute.max,
      defaultValue: _data.attribute.defaultValue,
    };
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: Attribute) => {
    data?.pushAttribute(attribute);
  };

  return data ? (
    <div className="SliderOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="最小值" name="min">
          <InputNumber />
        </Form.Item>
        <Form.Item label="最小值" name="max">
          <InputNumber />
        </Form.Item>
        <Form.Item label="默认值" name="defaultValue">
          <InputNumber />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

SliderOption.propTypes = {};

SliderOption.defaultProps = {};

export default SliderOption;
