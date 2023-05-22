import AppBlock from "./AppBlock";
import AppCol from "./AppCol";
import AppHead from "./AppHead";
import AppItem from "./AppItem";
import AppRow from "./AppRow";
import AppText from "./AppText";

// 占比
export type Proportion = 1 | 2 | 3 | 4 | 5;

// 视图区域
export type AppContent = {
  children: (AppRow | AppBlock)[];
};

// 行（宽度100%）
export type AppRowOption = {
  parent?: AppBlock | AppHead;
  proportion: Proportion; // 份额
  height: string | number;
  margin: string | number;
  padding: string | number;
  children: AppCol[];
};
// 列
export type AppColOption = {
  parent: AppRow;
  proportion: Proportion; // 占比
  margin: string | number;
  padding: string | number;
  children: AppBlock[] | AppItem[];
};

// 块级区域（宽度100%）
export type AppBlockOption = {
  id?: string;
  key?: string;
  parent?: AppCol;
  background?: string;
  border?: string;
  borderRadius: string | number;
  proportion: Proportion;
  height: string | number;
  margin: string | number;
  padding: string | number;
  children: (AppRow | AppHead)[];
};

// 块级区域头部
export type AppHeadOption = {
  parent: AppBlock;
  children: AppRow;
  border?: string;
};

// 一个小应用
export type AppItemOption = {
  id?: string;
  key?: string;
  parent: AppCol;
  background?: string;
  border?: string;
  borderRadius: string | number;
  children: AppText[];
};

// 文本
export type AppTextOption = {
  parent: AppItem;
  textAlign: string;
  fontSize: string | number;
  fontWeight: string | number;
  color: string;
  background?: string;
};
