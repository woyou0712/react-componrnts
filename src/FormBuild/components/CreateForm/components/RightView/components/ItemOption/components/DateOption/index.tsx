/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, DatePicker } from "antd";
import { Attribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";

import "./index.less";

function DateOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      defaultValue: _data.attribute.defaultValue,
      placeholder: _data.attribute.placeholder,
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
    <div className="DateOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="默认值" name="defaultValue">
          <DatePicker />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

DateOption.propTypes = {};

DateOption.defaultProps = {};

export default DateOption;
