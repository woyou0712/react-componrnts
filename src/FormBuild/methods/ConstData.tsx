import { ItemTypeOption } from "./types.d";

export const ItemTypeOptions: ItemTypeOption[] = [
  { type: "input", label: "文本输入" },
  { type: "textarea", label: "多行文本" },
  { type: "password", label: "密码输入" },
  { type: "count", label: "计数器" },
  { type: "select", label: "下拉选择" },
  { type: "cascader", label: "级联选择" },
  { type: "radio", label: "单选框组" },
  { type: "checkbox", label: "多选框组" },
  { type: "switch", label: "开关" },
  { type: "slider", label: "滑块" },
  { type: "time", label: "时间选择" },
  { type: "times", label: "时间范围" },
  { type: "date", label: "日期选择" },
  { type: "dates", label: "日期范围" },
  { type: "rate", label: "评分" },
  { type: "upload", label: "上传" },
  { type: "block", label: "容器" },
  { type: "button", label: "按钮" },
];
