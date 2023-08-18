import EventBus from "diagram-js/lib/core/EventBus";
import Connect from "diagram-js/lib/features/connect/Connect";
import Dragging from "diagram-js/lib/features/dragging/Dragging";
import Modeling from "diagram-js/lib/features/modeling/Modeling";
import Rules from "diagram-js/lib/features/rules/Rules";
import { Element } from "diagram-js/lib/model/Types";
import { Point } from "diagram-js/lib/util/Types";
import { isNil, isObject } from "min-dash";
import { getMid } from "diagram-js/lib/layout/LayoutUtil";

export default class SelfConnect extends Connect {
  private eventBus: EventBus;
  private dragging: Dragging;
  private modeling: Modeling;
  private rules: Rules;
  constructor(
    eventBus: EventBus,
    dragging: Dragging,
    modeling: Modeling,
    rules: Rules
  ) {
    super(eventBus, dragging, modeling, rules);
    this.eventBus = eventBus;
    this.dragging = dragging;
    this.modeling = modeling;
    this.rules = rules;
  }

  start = function (
    event: MouseEvent | TouchEvent,
    start: Element,
    connectionStart?: Point,
    autoActivate?: boolean
  ) {
    if (!isObject(connectionStart)) {
      autoActivate = connectionStart;
      connectionStart = getMid(start);
    }

    this.dragging.init(event, "connect", {
      autoActivate: autoActivate,
      data: {
        shape: start,
        context: {
          start: start,
          connectionStart: connectionStart,
        },
      },
    });
  };
}
