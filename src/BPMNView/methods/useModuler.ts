import { useEffect, useState } from "react";
import Moduler from "./Moduler";
import { createBpmnXml } from "./utils";
import Palette from "../components/Tools";
import { Canvas, Modeling, ElementFactory } from "./types";

export default function useModuler(
  container: string | HTMLDivElement,
  defaultXml?: string
) {
  const [result, setResult] = useState<{
    module?: Moduler;
    canvas?: Canvas;
    elementFactory?: ElementFactory;
    modeling?: Modeling;
  }>({
    module: undefined,
    canvas: undefined,
    elementFactory: undefined,
    modeling: undefined,
  });

  useEffect(() => {
    if (!container) return;
    const module = new Moduler({ container, additionalModules: [Palette] });
    module.renderXML(defaultXml || createBpmnXml()).then(() => {
      setResult({ ...result, module });
    });
  }, [container]);

  useEffect(() => {
    if (!result.module) return;
    const elementFactory = result.module.get<ElementFactory>("elementFactory");
    const canvas = result.module.get<Canvas>("canvas");
    const modeling = result.module.get<Modeling>("modeling");
    setResult({ ...result, elementFactory, canvas, modeling });
  }, [result.module]);

  result.module?.onChange(() => setResult({ ...result }));

  return result;
}
