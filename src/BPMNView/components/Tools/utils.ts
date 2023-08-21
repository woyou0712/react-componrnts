import { getDi } from "bpmn-js/lib/util/ModelUtil";
import { assign } from "min-dash";
import {
  Create,
  ElementFactory,
  Injector,
  PaletteEntry,
  Translate,
} from "../../methods/types";

/**
 * 创建节点类型对象
 */
export function createAction(
  type: string,
  group: string,
  className: string,
  title: string,
  elementFactory: ElementFactory,
  create: Create,
  translate: Translate,
  options?: any
): PaletteEntry {
  var shortType = type.replace(/^bpmn:/, "");
  const createListener = (event: Event) => {
    var shape = elementFactory.createShape(assign({ type: type }, options));

    if (options) {
      var di = getDi(shape as any);
      di.isExpanded = options.isExpanded;
    }

    create.start(event, shape, undefined);
  };
  const result: any = {
    group: group,
    className: className,
    title: title || translate("Create {type}", { type: shortType }),
    action: { dragstart: createListener, click: createListener },
  };
  return result;
}
/**
 * 添加节点工具
 */
export function appendAction(
  type: string,
  group: string,
  className: string,
  title: string,
  translate: Translate,
  elementFactory: ElementFactory,
  create: Create,
  injector: Injector,
  options?: any
): any {
  if (typeof title !== "string") {
    options = title;
    title = translate("Append {type}", { type: type.replace(/^bpmn:/, "") });
  }

  function appendStart(event, element) {
    var shape = elementFactory.createShape(assign({ type: type }, options));
    create.start(event, shape, {
      source: element,
    });
  }
  const autoPlace: any = injector.get("autoPlace", false);
  var append = autoPlace
    ? function (event, element) {
        var shape = elementFactory.createShape(assign({ type: type }, options));

        autoPlace.append(element, shape);
      }
    : appendStart;

  return {
    group,
    className: className,
    title: title,
    action: {
      dragstart: appendStart,
      click: append,
    },
  };
}
