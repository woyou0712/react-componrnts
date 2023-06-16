export type Align = "left" | "center" | "right";
export type Size = "large" | "default" | "small";

export interface FormModuleOption {
  name: string; // 表名称
  formSize: Size; // 表单大小
  labelAlign: Align; // label对齐方式
  labelWidth: string; // label宽度
  disabled: boolean; // 是否禁用
}
