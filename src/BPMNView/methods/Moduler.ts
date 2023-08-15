import { ModdleElement } from "bpmn-js/lib/BaseModeler";
import BpmnModeler, { ImportXMLResult } from "bpmn-js/lib/Modeler";

export default class Moduler extends BpmnModeler {
  /** 渲染XML */
  renderXML(
    xml: string,
    bpmnDiagram?: ModdleElement | string
  ): Promise<ImportXMLResult> {
    return new Promise((resolve, reject) => {
      this.importXML(xml, bpmnDiagram)
        .then((res) => {
          const definitions = this.getDefinitions();
          console.log("重置命名空间definitions：", definitions);
          definitions.set("xmlns:activiti", "http://activiti.org/bpmn");
          definitions.set("xmlns:flowable", "http://flowable.org/bpmn");
          definitions.set("xmlns:camunda", "http://camunda.org/bpmn");
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  }
}
