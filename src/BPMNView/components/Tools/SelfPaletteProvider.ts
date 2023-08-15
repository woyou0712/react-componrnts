import PaletteProvider, {
  SpaceTool,
} from "bpmn-js/lib/features/palette/PaletteProvider";
import {
  PaletteEntries,
  PaletteEntry,
} from "diagram-js/lib/features/palette/PaletteProvider";
import { assign } from "min-dash";
import SelfPalette from "./SelfPalette";
import { getDi } from "bpmn-js/lib/util/ModelUtil";
import { Event } from "diagram-js/lib/core/EventBus";
type Create = import("diagram-js/lib/features/create/Create").default;
type ElementFactory = import("diagram-js/lib/core/ElementFactory").default;
type LassoTool = import("diagram-js/lib/features/lasso-tool/LassoTool").default;
type HandTool = import("diagram-js/lib/features/hand-tool/HandTool").default;
type GlobalConnect =
  import("diagram-js/lib/features/global-connect/GlobalConnect").default;
type Translate =
  typeof import("diagram-js/lib/i18n/translate/translate").default;

export default class SelfPaletteProvider extends PaletteProvider {
  private palette: SelfPalette;
  private create: Create;
  private elementFactory: ElementFactory;
  private spaceTool: SpaceTool;
  private lassoTool: LassoTool;
  private handTool: HandTool;
  private globalConnect: GlobalConnect;
  private translate: Translate;

  constructor(
    palette: SelfPalette,
    create: Create,
    elementFactory: ElementFactory,
    spaceTool: SpaceTool,
    lassoTool: LassoTool,
    handTool: HandTool,
    globalConnect: GlobalConnect,
    translate: Translate
  ) {
    super(
      palette,
      create,
      elementFactory,
      spaceTool,
      lassoTool,
      handTool,
      globalConnect,
      translate
    );
    this.palette = palette;
    this.create = create;
    this.elementFactory = elementFactory;
    this.spaceTool = spaceTool;
    this.lassoTool = lassoTool;
    this.handTool = handTool;
    this.globalConnect = globalConnect;
    this.translate = translate;
  }

  private createAction(
    type: string,
    group: string,
    className: string,
    title: string,
    options?: any
  ) {
    var shortType = type.replace(/^bpmn:/, "");
    const createListener = (event: Event) => {
      var shape = this.elementFactory.createShape(
        assign({ type: type }, options)
      );

      if (options) {
        var di = getDi(shape as any);
        di.isExpanded = options.isExpanded;
      }

      this.create.start(event, shape, undefined);
    };
    return {
      group: group,
      className: className,
      title: title || this.translate("Create {type}", { type: shortType }),
      action: {
        dragstart: createListener,
        click: createListener,
      },
    };
  }

  getPaletteEntries(): PaletteEntries {
    const result = super.getPaletteEntries();
    const newData = Object.assign({}, result);
    // 删除无用节点
    delete newData["create.group"];
    delete newData["create.data-object"];
    delete newData["create.data-store"];
    delete newData["create.participant-expanded"];
    delete newData["create.intermediate-event"];
    delete newData["create.subprocess-expanded"];
    delete newData["create.task"];
    // 添加用户节点
    newData["create.user-task"] = this.createAction(
      "bpmn:UserTask",
      "activity",
      "bpmn-icon-user-task",
      this.translate("创建任务节点")
    ) as any;
    // 添加服务节点
    newData["create.service-task"] = this.createAction(
      "bpmn:ServiceTask",
      "activity",
      "bpmn-icon-service-task",
      this.translate("创建抄送节点")
    ) as any;
    // 修改title属性
    newData["hand-tool"].title = "激活移动工具";
    newData["lasso-tool"].title = "激活锁套工具";
    newData["space-tool"].title = "激活空间工具";
    newData["global-connect-tool"].title = "激活全局连接工具";

    newData["create.start-event"].title = "创建开始节点";
    newData["create.end-event"].title = "创建结束节点";
    newData["create.exclusive-gateway"].title = "创建条件节点";
    console.log("左侧工具栏", newData);
    return newData;
  }
}
