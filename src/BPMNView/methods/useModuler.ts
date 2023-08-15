import { useEffect, useState } from "react";
import Moduler from "./Moduler";
import { createBpmnXml } from "./utils";
import Palette from "../components/Tools";

export default function useModuler(
  container: string | HTMLDivElement,
  defaultXml?: string
) {
  const [bpmn, setBpmn] = useState<Moduler>();

  useEffect(() => {
    const _bpmn = new Moduler({ container, additionalModules: [Palette] });
    _bpmn.renderXML(defaultXml || createBpmnXml());
    setBpmn(_bpmn);
  }, []);

  return bpmn;
}
