/* eslint-disable */
import React from "react";
import { Tabs } from "antd";
import ItemOption from "./components/ItemOption";
import FormOption from "./components/FormOption";

import "./index.less";

function RightView() {
  return (
    <div className="create-form-right-view">
      <Tabs defaultActiveKey="2" type="card">
        <Tabs.TabPane tab="组件属性" key="1">
          <ItemOption />
        </Tabs.TabPane>
        <Tabs.TabPane tab="表单属性" key="2">
          <FormOption />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

RightView.propTypes = {};

RightView.defaultProps = {};

export default RightView;
