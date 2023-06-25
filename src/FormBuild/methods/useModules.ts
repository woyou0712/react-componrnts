import { useEffect, useState } from "react";
import FormModule from "./FormModule";
import { itemOptions, dragType } from "./ConstData";

export default function useModules() {
  const [form] = useState(new FormModule());
  const [modules, setModules] = useState({
    form,
    itemOptions,
    dragType,
  });
  // 初始化触发一次更新
  useEffect(() => {
    setModules({ form, itemOptions, dragType });
  }, [form]);

  modules.form.removeOnCaheng();
  modules.form.onChange(() => {
    setModules({ form, itemOptions, dragType });
  });

  return modules;
}
