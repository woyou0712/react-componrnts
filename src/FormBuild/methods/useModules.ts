import { useState } from "react";
import FormModule from "./FormModule";
import { dragType } from "./ConstData";

export default function useModules() {
  const [modules, setModules] = useState({ form: new FormModule(), dragType });

  // modules.form.removeOnCaheng();
  // modules.form.onChange(() => setModules({ ...modules }));

  return modules;
}
