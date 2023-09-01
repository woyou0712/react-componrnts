import React from "react";
import Moduler from "./Moduler";
import { Canvas, Modeling, ElementFactory } from "./types";

export default React.createContext(
  {} as {
    module?: Moduler;
    canvas?: Canvas;
    elementFactory?: ElementFactory;
    modeling?: Modeling;
  }
);
