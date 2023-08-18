import ContextPadProvider from "bpmn-js/lib/features/context-pad/ContextPadProvider";
import {
  ContextPadConfig,
  ContextPadEntries,
  Translate,
  Element,
  EventBus,
  ContextPad,
  Modeling,
  ElementFactory,
  Injector,
  Connect,
  Create,
  PopupMenu,
  Rules,
} from "./types.d";

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
