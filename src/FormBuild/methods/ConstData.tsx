import { DragType, ItemTypeOption } from "./types.d";

export const ItemTypeOptions: ItemTypeOption[] = [
  { type: "input", name: "文本输入" },
  { type: "textarea", name: "多行文本" },
  { type: "password", name: "密码输入" },
  { type: "count", name: "计数器" },
  { type: "select", name: "下拉选择" },
  { type: "cascader", name: "级联选择" },
  { type: "radio", name: "单选框组" },
  { type: "checkbox", name: "多选框组" },
  { type: "switch", name: "开关" },
  { type: "slider", name: "滑块" },
  { type: "time", name: "时间选择" },
  { type: "times", name: "时间范围" },
  { type: "date", name: "日期选择" },
  { type: "dates", name: "日期范围" },
  { type: "rate", name: "评分" },
  { type: "upload", name: "上传" },
  { type: "block", name: "容器" },
  { type: "button", name: "按钮" },
];

export const dragType: DragType = {
  CREATE: "create",
  MOVE: "move",
};
