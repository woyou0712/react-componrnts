/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import { Form, Input, DatePicker } from "antd";
import { Moment } from "moment";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";
import { Attribute } from "../../../../../../../../methods/types";
import { dates2str, str2dates } from "../../../../../../../../methods/utils";
import Inputs from "../../../Inputs";

import "./index.less";

function DatesOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
      defaultValue: _data.attribute.defaultValue
        ? str2dates(_data.attribute.defaultValue as string)
        : undefined,
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
      _attribute.defaultValue = dates2str(
        _attribute.defaultValue as [Moment, Moment]
      );
    }
    data?.pushAttribute(_attribute);
  };

  return data ? (
    <div className="DatesOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="默认值" name="defaultValue">
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label="占位提示符" name="placeholder">
          <Inputs />
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

DatesOption.propTypes = {};

DatesOption.defaultProps = {};

export default DatesOption;
