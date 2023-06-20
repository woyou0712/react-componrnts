/* eslint-disable */
import React, { useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { Row, Col } from "antd";
import { ItemTypeOption } from "../../../../methods/types";
import MoveItem from "./MoveItem";
import context from "../../../../methods/context";
import FormItem from "../../../../methods/FormItem";

import "./index.less";

function CenterView() {
  const modules = useContext(context);
  const [children, setChildren] = useState<FormItem[]>([]);
  const [, drop] = useDrop(() => ({
    accept: modules.dragType.CREATE,
    drop(item: ItemTypeOption, monitor) {
      if (!item) return;
      const dropResult = monitor.getDropResult();
      if (dropResult === null) {
        modules.form.createItem(item);
      }
    },
    collect: (monitor) => ({ canDrop: monitor.canDrop() }),
  }));
  modules.form.onChange((form) => {
    setChildren(form.children);
  });

  return (
    <div className="create-form-center-view" ref={drop}>
      <Row>
        {children.map((item) => (
          <Col span={item.colspan} key={item.id}>
            <MoveItem data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

CenterView.propTypes = {};

CenterView.defaultProps = {};

export default CenterView;
