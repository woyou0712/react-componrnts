/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, TimePicker } from "antd";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import { Attribute } from "../../../../../../../../methods/types";

import "./index.less";
import moment, { Moment } from "moment";
import { times2str } from "../../../../../../../../methods/utils";

function TimesOption() {
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
    const _attribute: Attribute = { ...attribute };
    if (Array.isArray(_attribute.defaultValue)) {
      _attribute.defaultValue = times2str(
        _attribute.defaultValue as [Moment, Moment]
      );
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="TimesOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="默认值" name="defaultValue">
          <TimePicker.RangePicker />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Input />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

TimesOption.propTypes = {};

TimesOption.defaultProps = {};

export default TimesOption;
