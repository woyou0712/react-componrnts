/* eslint-disable */
import React, { useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { Row, Col, Form } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ItemTypeOption, LabelAlign } from "../../../../methods/types";
import MoveItem from "./MoveItem";
import context from "../../../../methods/context";
import FormItem from "../../../../methods/FormItem";

import "./index.less";

function CenterView() {
  const modules = useContext(context);
  const [, drop] = useDrop(() => ({
    accept: modules.dragType.CREATE,
    drop(item: ItemTypeOption, monitor) {
      console.log("放置成功");
      if (!item) return;
      const dropResult = monitor.getDropResult();
      if (dropResult === null) {
        modules.form.createItem(item);
      }
    },
    collect: (monitor) => ({ canDrop: monitor.canDrop() }),
    hover() {
      modules.form.hoveringItem = undefined;
      modules.form.hoveringPosition = undefined;
    },
  }));

  const [children, setChildren] = useState<FormItem[]>(modules.form.children);
  const { formSize, labelAlign, labelCol, colon, layout } = modules.form;
  useEffect(() => {
    setChildren([...modules.form.children]);
  }, [modules]);

  return (
    <div className="create-form-center-body">
      <div className="create-form-center-view" ref={drop}>
        <Form
          size={formSize}
          labelAlign={labelAlign}
          labelCol={{ span: labelCol }}
          colon={colon}
          layout={layout}
        >
          <Row>
            {children.map((item) => (
              <Col span={item.colspan} key={item.id}>
                <MoveItem data={item} />
              </Col>
            ))}
          </Row>
        </Form>
      </div>
    </div>
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
