/* eslint-disable */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "antd";
import FormItem from "../../../../../../methods/FormItem";
import context from "../../../../../../methods/context";
import MoveItem from "../MoveItem";

import "./index.less";

function BlockForm({
  data,
  value,
  onChange,
}: {
  data: FormItem;
  value?: any;
  onChange?: () => void;
}) {
  const modules = useContext(context);
  const { formSize, labelAlign, labelCol, colon, layout } = modules.form;

  return (
    <div className="form-block-content">
      <Form
        size={formSize}
        labelAlign={labelAlign}
        labelCol={{ span: labelCol }}
        colon={colon}
        layout={layout}
        onValuesChange={onChange}
      >
        <Row>
          {(data.children || []).map((item) => (
            <Col span={item.colspan} key={item.id}>
              <MoveItem data={item} />
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
}

function FormBlock({ data }: { data: FormItem }) {
  return (
    <div className="form-block-body">
      <Form.Item
        name={data.name}
        label={data.label}
        required={data.required}
        rules={data.rules}
        labelCol={{ span: 24 }}
      >
        <BlockForm data={data} />
      </Form.Item>
    </div>
  );
}

FormBlock.propTypes = {
  data: PropTypes.object,
};

FormBlock.defaultProps = {};

export default FormBlock;
