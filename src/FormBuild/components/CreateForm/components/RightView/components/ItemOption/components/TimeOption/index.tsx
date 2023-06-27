/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, TimePicker } from "antd";
import moment, { Moment } from "moment";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import { Attribute } from "../../../../../../../../methods/types";
import { time2str } from "../../../../../../../../methods/utils";

import "./index.less";

function TimeOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute: Attribute = {
      placeholder: _data.attribute.placeholder,
      defaultValue: _data.attribute.defaultValue
        ? moment(_data.attribute.defaultValue as string)
        : undefined,
    };

    console.log("_defaultValue", attribute);
    formA.setFieldsValue(attribute);
  };

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [modules]);

  const onAttribute = (attribute: Attribute) => {
    const _attribute = { ...attribute };
    if (_attribute.defaultValue) {
      _attribute.defaultValue = time2str(_attribute.defaultValue as Moment);
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="TimeOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="默认值" name="defaultValue">
          <TimePicker />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

TimeOption.propTypes = {};

TimeOption.defaultProps = {};

export default TimeOption;
