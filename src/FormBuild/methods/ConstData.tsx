import { ItemTypeOption } from "./types.d";

export const ItemTypeOptions: ItemTypeOption[] = [
  { value: "input", label: "文本输入" },
  { value: "textarea", label: "多行文本" },
  { value: "password", label: "密码输入" },
  { value: "count", label: "计数器" },
  { value: "select", label: "下拉选择" },
  { value: "cascader", label: "级联选择" },
  { value: "radio", label: "单选框组" },
  { value: "checkbox", label: "多选框组" },
  { value: "switch", label: "开关" },
  { value: "slider", label: "滑块" },
  { value: "time", label: "时间选择" },
  { value: "times", label: "时间范围" },
  { value: "date", label: "日期选择" },
  { value: "dates", label: "日期范围" },
  { value: "rate", label: "评分" },
  { value: "upload", label: "上传" },
  { value: "block", label: "容器" },
  { value: "button", label: "按钮" },
];
