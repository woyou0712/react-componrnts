export type Translate =
  typeof import("diagram-js/lib/i18n/translate/translate").default;
export type Injector = import("didi").Injector;
export type EventBus = import("diagram-js/lib/core/EventBus").default;
export type ContextPad =
  import("diagram-js/lib/features/context-pad/ContextPad").default;
export type Modeling = import("bpmn-js/lib/features/modeling/Modeling").default;
export type ElementFactory =
  import("bpmn-js/lib/modeling/ElementFactory").default;
export type Connect = import("diagram-js/lib/features/connect/Connect").default;
export type Create = import("diagram-js/lib/features/create/Create").default;
export type PopupMenu =
  import("diagram-js/lib/features/popup-menu/PopupMenu").default;
export type Canvas = any;
export type Rules = import("diagram-js/lib/features/rules/Rules").default;
export type Element = import("bpmn-js/lib/model/Types").Element;
export type ModdleElement = import("bpmn-js/lib/model/Types").ModdleElement;
export type BaseContextPadProvider =
  import("diagram-js/lib/features/context-pad/ContextPadProvider").default<Element>;
export type ContextPadEntries =
  import("diagram-js/lib/features/context-pad/ContextPadProvider").ContextPadEntries;
export type ContextPadEntry =
  import("diagram-js/lib/features/context-pad/ContextPadProvider").ContextPadEntry;
