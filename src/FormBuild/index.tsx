/* eslint-disable */
import React, { useEffect } from "react";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
import PropTypes from "prop-types";
import CreateForm from "./components/CreateForm";
import ViewForm from "./components/ViewForm";
import context from "./methods/context";
import FormModule from "./methods/FormModule";
import useModules from "./methods/useModules";

import "./index.less";
const { Provider } = context;

function FormBuild({
  mode = "view",
  onChange,
  onBack,
  onSubmit,
}: {
  mode?: "view" | "create";
  onChange?: (data: FormModule) => void;
  onBack?: () => void; // 预览页面取消事件
  onSubmit?: (data: FormModule) => void; // 预览页面提交事件
}) {
  const modules = useModules(mode);

  useEffect(() => {
    if (onChange) onChange(modules.form);
  }, [modules]);

  return (
    <ConfigProvider locale={zhCN}>
      <Provider value={modules}>
        <div className="form-build">
          {mode === "create" ? <CreateForm /> : <ViewForm />}
        </div>
      </Provider>
    </ConfigProvider>
  );
}

FormBuild.propTypes = {
  mode: PropTypes.string,
};

export default FormBuild;
