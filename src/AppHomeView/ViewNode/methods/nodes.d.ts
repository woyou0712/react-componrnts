import AppBlock from "./AppBlock";
import AppCol from "./AppCol";
import AppHead from "./AppHead";
import AppItem from "./AppItem";
import AppRow from "./AppRow";
import AppText from "./AppText";

// 分区/占比
export type Partition = 1 | 2 | 3 | 4 | 5;

// 视图区域
export type AppContent = {
  children: (AppRow | AppBlock)[];
};

// nodes
export type NodeType =
  | "AppBlock"
  | "AppHead"
  | "AppItem"
  | "AppText"
  | "AppRow"
  | "AppCol";

export type Node = AppBlock | AppHead | AppItem | AppText | AppRow | AppCol;

// 行（宽度100%）
export type AppRowOption = {
  id?: string;
  parent?: AppBlock | AppHead;
  partition: Partition;
  height: string | number;
  margin: string | number;
  padding: string | number;
  children: AppCol[];
};
// 列
export type AppColOption = {
  id?: string;
  parent: AppRow;
  partition: Partition; // 占比
  margin: string | number;
  padding: string | number;
  children: (AppBlock | AppItem)[];
};

// 块级区域（宽度100%）
export type AppBlockOption = {
  id?: string;
  key?: string;
  parent?: AppCol;
  background?: string;
  border?: string;
  borderRadius: string | number;
  partition: Partition;
  height: string | number;
  margin: string | number;
  padding: string | number;
  children: (AppRow | AppHead)[];
};

// 块级区域头部
export type AppHeadOption = {
  id?: string;
  parent: AppBlock;
  children: AppRow[];
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
  id?: string;
  parent: AppItem;
  textAlign: string;
  fontSize: string | number;
  fontWeight: string | number;
  color: string;
  background?: string;
};
