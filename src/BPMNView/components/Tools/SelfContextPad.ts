import ContextPad from "diagram-js/lib/features/context-pad/ContextPad";
import { ContextPadTarget, Element, ContextPadEntries } from "../../methods/types";

export default class SelfContextPad extends ContextPad {
  getEntries(target: ContextPadTarget<Element>): ContextPadEntries {
    const result = super.getEntries(target);
    return result;
  }
}
