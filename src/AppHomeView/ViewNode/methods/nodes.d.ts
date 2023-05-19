// 占比
type Proportion = 1 | 2 | 3 | 4 | 5;

// 视图区域
type AppContent = {
  children: (AppRow | AppBlock)[];
};

// 行（宽度100%）
type AppRow = {
  parent?: AppBlock | AppHead;
  proportion: Proportion; // 份额（有父级则以父级为准）
  height: number;
  margin: string;
  padding: string;
  children: AppCol[];
};
// 列
type AppCol = {
  parent: AppRow;
  proportion: Proportion; // 占比
  margin: string;
  padding: string;
  children: AppBlock[] | AppItem[];
};

// 块级区域（宽度100%）
type AppBlock = {
  id: string;
  parent?: AppCol;
  proportion: Proportion; // 份额（有父级则以父级为准）
  width: number;
  height: number;
  margin: string;
  padding: string;
  children: (AppRow | AppHead)[];
  background?: string;
};

// 块级区域头部
type AppHead = {
  parent: AppBlock;
  children: AppRow[];
};

// 一个小应用
type AppItem = {
  id: string;
  parent: AppCol;
  background?: string;
  children: AppText[];
};

// 文本
type AppText = {
  parent: AppItem;
  textAlign: string;
  fontSize: number;
  fontWeight: string;
  color: string;
  background?: string;
};
