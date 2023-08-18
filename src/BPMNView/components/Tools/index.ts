import SelfPalette from "./SelfPalette";
import SelfPaletteProvider from "./SelfPaletteProvider";
import SelfContextPadProvider from "./SelfContextPadProvider";
import SelfConnect from "./SelfConnect";
import SelfRuleProvider from "./SelfRuleProvider";

export default {
  __init__: [
    "palette",
    "paletteProvider",
    "contextPadProvider",
    "connect",
    "ruleProvider",
  ],
  palette: ["type", SelfPalette],
  paletteProvider: ["type", SelfPaletteProvider],
  contextPadProvider: ["type", SelfContextPadProvider],
  connect: ["type", SelfConnect],
  ruleProvider: ["type", SelfRuleProvider],
};
