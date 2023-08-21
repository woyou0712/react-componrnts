import Connect from "diagram-js/lib/features/connect/Connect";
import { isObject } from "min-dash";
import { getMid } from "diagram-js/lib/layout/LayoutUtil";
import { EventBus, Dragging, Modeling, Rules, Element, Point } from "../../methods/types";

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
