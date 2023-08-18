import { Shape } from "bpmn-js/lib/model/Types";
import EventBus from "diagram-js/lib/core/EventBus";
import RuleProvider from "diagram-js/lib/features/rules/RuleProvider";
import Rules from "diagram-js/lib/features/rules/Rules";

export default class SelfRuleProvider extends RuleProvider {
  constructor(eventBus: EventBus, rules: Rules) {
    super(eventBus);
    this.initRules();
  }

  initRules() {
    // 添加规则，创建节点规则
    this.addRule(["shape.create"], 2000, (context: any) => {
      const newNode: Shape = context.shape;
      const oldNodes: Shape[] = context.target.children;
      // 开始节点和结束节点只能创建一个
      if (["bpmn:EndEvent", "bpmn:StartEvent"].indexOf(newNode.type) !== -1) {
        for (let i = 0; i < oldNodes.length; i++) {
          const node = oldNodes[i];
          if (node.type === newNode.type) {
            return false;
          }
        }
      }
      return true;
    });
  }
}
