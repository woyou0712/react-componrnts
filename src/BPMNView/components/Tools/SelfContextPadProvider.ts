import ContextPadProvider, {
  ContextPadEntries,
} from "bpmn-js/lib/features/context-pad/ContextPadProvider";
import { Element } from "bpmn-js/lib/model/Types";

export default class SelfContextPadProvider extends ContextPadProvider {
  getContextPadEntries(element: Element): ContextPadEntries {
    const result = super.getContextPadEntries(element);
    console.log("节点工具", result);
    const newData = Object.assign({}, result);
    delete newData["replace"]; // 删除扳手（转换类型）工具
    return newData;
  }
}
