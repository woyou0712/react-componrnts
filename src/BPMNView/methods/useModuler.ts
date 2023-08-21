import { useEffect, useState } from "react";
import Moduler from "./Moduler";
import { createBpmnXml } from "./utils";
import Palette from "../components/Tools";
import { Canvas, Modeling, ElementFactory } from "./types";

export default function useModuler(
  container: string | HTMLDivElement,
  defaultXml?: string
) {
  const [module, setModule] = useState<Moduler>();
  const [canvas, setCanvas] = useState<Canvas>();
  const [elementFactory, setElementFactory] = useState<ElementFactory>();
  const [modeling, setModeling] = useState<Modeling>();

  useEffect(() => {
    if (!container) return;
    const _module = new Moduler({ container, additionalModules: [Palette] });
    setModule(_module);
  }, [container]);
  useEffect(() => {
    if (!module) return;
    module.renderXML(defaultXml || createBpmnXml());
  }, [module, defaultXml]);
  useEffect(() => {
    if (!module) return;
    const _e = module.get<ElementFactory>("elementFactory");
    setElementFactory(_e);
    const _c = module.get<Canvas>("canvas");
    setCanvas(_c);
    const _m = module.get<Modeling>("modeling");
    setModeling(_m);
  }, [module]);

  return { module, canvas, elementFactory, modeling };
}
