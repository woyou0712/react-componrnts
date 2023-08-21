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
  Shape,
} from "../../methods/types";
import { createAction } from "./utils";

export default class SelfContextPadProvider extends ContextPadProvider {
  private config: ContextPadConfig;
  private injector: Injector;
  private eventBus: EventBus;
  private contextPad: ContextPad;
  private modeling: Modeling;
  private elementFactory: ElementFactory;
  private connect: Connect;
  private create: Create;
  private popupMenu: PopupMenu;
  private canvas: any;
  private rules: Rules;
  private translate: Translate;

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
    this.config = config;
    this.injector = injector;
    this.eventBus = eventBus;
    this.contextPad = contextPad;
    this.modeling = modeling;
    this.elementFactory = elementFactory;
    this.connect = connect;
    this.create = create;
    this.popupMenu = popupMenu;
    this.canvas = canvas;
    this.rules = rules;
    this.translate = translate;
  }

  getContextPadEntries(shape: Shape): ContextPadEntries {
    const result = super.getContextPadEntries(shape);
    console.log(result);
    const newData = Object.assign({}, result);
    delete newData["replace"]; // 删除扳手（转换类型）工具
    delete newData["append.end-event"]; // 删除结束节点
    delete newData["append.intermediate-event"]; // 删除中间事件节点
    delete newData["append.append-task"]; // 删除任务节点
    // 不是结束节点，在节点工具上添加任务和抄送节点
    if (shape.type !== "bpmn:EndEvent") {
      // newData["append.append-service-task"]
      // newData["append.append-service-task"]
    }
    if (newData["append.text-annotation"]) {
      newData["append.text-annotation"].group = "connect";
    }
    console.log("节点工具", newData);
    return newData;
  }
}
