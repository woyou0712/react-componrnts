import { useEffect, useState } from "react";
import { FormModuleOption } from "./types";
import FormModule from "./FormModule";

export default function useModule(option?: FormModuleOption) {
  const [modules, setModules] = useState<FormModule>();

  useEffect(() => {
    if (option) {
      const form = new FormModule(option);
      setModules(form);
    }
  }, [option]);

  return modules;
}
