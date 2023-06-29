import { useEffect, useState } from 'react';
import FormModule from './FormModule';
import { itemOptions, dragType } from './ConstData';

export default function useModules(mode: 'create' | 'view') {
  const [form] = useState(new FormModule());
  const [modules, setModules] = useState({
    mode,
    form,
    itemOptions,
    dragType,
  });
  // 初始化触发一次更新
  useEffect(() => {
    setModules({ mode, form, itemOptions, dragType });
  }, [form]);

  modules.form.removeOnCaheng();
  modules.form.onChange(() => {
    setModules({ mode, form, itemOptions, dragType });
  });

  return modules;
}
