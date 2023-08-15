import SelfPalette from "./SelfPalette";
import SelfPaletteProvider from "./SelfPaletteProvider";
import SelfContextPadProvider from "./SelfContextPadProvider";
export default {
  __init__: ["palette", "paletteProvider", "contextPadProvider"],
  palette: ["type", SelfPalette],
  paletteProvider: ["type", SelfPaletteProvider],
  contextPadProvider: ["type", SelfContextPadProvider],
};
