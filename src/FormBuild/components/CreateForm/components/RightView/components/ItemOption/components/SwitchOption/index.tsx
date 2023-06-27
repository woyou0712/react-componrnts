/* eslint-disable */
import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Form, Radio } from "antd";
import { Attribute } from "../../../../../../../../methods/types";
import FormItem from "../../../../../../../../methods/FormItem";
import context from "../../../../../../../../methods/context";

import "./index.less";

function SwitchOption() {
  const modules = useContext(context);
  const data = useMemo(() => modules.form.activeItem, [modules]);
  const [formA] = Form.useForm();
  const setValues = (_data: FormItem) => {
    const attribute = {
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
    <div className="SwitchOption">
      <Form form={formA} labelCol={{ span: 6 }} onValuesChange={onAttribute}>
        <Form.Item label="默认值" name="defaultValue">
          <Radio.Group defaultValue="false">
            <Radio value="false">关闭</Radio>
            <Radio value="true">打开</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  ) : null;
}

SwitchOption.propTypes = {};

SwitchOption.defaultProps = {};

export default SwitchOption;
