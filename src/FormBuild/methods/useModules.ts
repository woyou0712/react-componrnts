import { useState } from "react";
import FormModule from "./FormModule";

export default function useModule() {
  const [modules, setModules] = useState({ form: new FormModule() });

  modules.form.removeOnCaheng();
  modules.form.onChange(() => setModules(modules));

  return modules;
}
