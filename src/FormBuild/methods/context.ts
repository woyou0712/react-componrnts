import React from "react";
import FormModule from "./FormModule";
import { DragType, ItemTypeOption } from "./types";

export default React.createContext(
  {} as { form: FormModule; dragType: DragType; itemOptions: ItemTypeOption[] }
);
