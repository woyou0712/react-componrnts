import React from 'react';
import FormModule from './FormModule';
import { DragType, ItemTypeOption } from './types';

export default React.createContext(
  {} as { mode: 'create' | 'view'; form: FormModule; dragType: DragType; itemOptions: ItemTypeOption[] },
);
