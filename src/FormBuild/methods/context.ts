import React from "react";
import FormModule from "./FormModule";
import { DragType } from "./types";

export default React.createContext(
  {} as { form: FormModule; dragType: DragType }
);
