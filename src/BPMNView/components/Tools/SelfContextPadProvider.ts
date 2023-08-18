import ContextPadProvider, {
  ContextPadConfig,
  ContextPadEntries,
} from "bpmn-js/lib/features/context-pad/ContextPadProvider";
import { Injector } from "didi";
import { Element } from "bpmn-js/lib/model/Types";
import EventBus from "diagram-js/lib/core/EventBus";
import ContextPad from "diagram-js/lib/features/context-pad/ContextPad";
import Modeling from "bpmn-js/lib/features/modeling/Modeling";
import ElementFactory from "bpmn-js/lib/features/modeling/ElementFactory";
import Connect from "diagram-js/lib/features/connect/Connect";
import Create from "diagram-js/lib/features/create/Create";
import PopupMenu from "diagram-js/lib/features/popup-menu/PopupMenu";
import Rules from "diagram-js/lib/features/rules/Rules";
import { Translate } from "./types.d";

export default class SelfContextPadProvider extends ContextPadProvider {
  constructor(
    config: ContextPadConfig,
    injector: Injector,
    eventBus: EventBus,
    contextPad: ContextPad,
    modeling: Modeling,
    elementFactory: ElementFactory,
    connect: Connect,
    create: Create,
    popupMenu: PopupMenu,
    canvas: any,
    rules: Rules,
    translate: Translate
  ) {
    super(
      config,
      injector,
      eventBus,
      contextPad,
      modeling,
      elementFactory,
      connect,
      create,
      popupMenu,
      canvas,
      rules,
      translate
    );
  }

  getContextPadEntries(element: Element): ContextPadEntries {
    const result = super.getContextPadEntries(element);
    console.log("节点工具", result);
    const newData = Object.assign({}, result);
    delete newData["replace"]; // 删除扳手（转换类型）工具
    delete newData["append.end-event"]; // 删除结束节点
    delete newData["append.intermediate-event"]; // 删除中间事件节点
    return newData;
  }
}
