import { getDi } from "bpmn-js/lib/util/ModelUtil";
import Create from "diagram-js/lib/features/create/Create";
import { assign } from "min-dash";
import { Translate } from "./types.d";

export function createAction(
  type: string,
  group: string,
  className: string,
  title: string,
  create: Create,
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

    create.start(event, shape, undefined);
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
