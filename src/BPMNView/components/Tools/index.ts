import SelfPalette from "./SelfPalette";
import SelfPaletteProvider from "./SelfPaletteProvider";
import SelfContextPadProvider from "./SelfContextPadProvider";
import SelfConnect from "./SelfConnect";
import SelfRuleProvider from "./SelfRuleProvider";
import SelfContextPad from "./SelfContextPad";

export default {
  __init__: [
    "palette",
    "paletteProvider",
    "contextPadProvider",
    "connect",
    "ruleProvider",
    "contextPad",
  ],
  palette: ["type", SelfPalette],
  paletteProvider: ["type", SelfPaletteProvider],
  contextPadProvider: ["type", SelfContextPadProvider],
  connect: ["type", SelfConnect],
  ruleProvider: ["type", SelfRuleProvider],
  contextPad: ["type", SelfContextPad],
};
