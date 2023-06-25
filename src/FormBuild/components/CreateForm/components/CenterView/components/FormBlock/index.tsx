/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "antd";
import FormItem from "../../../../../../methods/FormItem";
import MoveItem from "../MoveItem";

import "./index.less";

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
        <div className="form-block-content">
          <Row>
            {(data.children || []).map((item) => (
              <Col span={item.colspan} key={item.id}>
                <MoveItem data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Form.Item>
    </div>
  );
}

FormBlock.propTypes = {
  data: PropTypes.object,
};

FormBlock.defaultProps = {};

export default FormBlock;
