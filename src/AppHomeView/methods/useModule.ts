import { useEffect, useState } from "react";
import ViewNode from "../ViewNode";

function useModule() {
  const [viewNode, setViewNode] = useState<ViewNode>();

  useEffect(() => {
    const node = new ViewNode({ viewContent: "#app-view" });
    setViewNode(node);
  }, []);

  return {
    viewNode,
  };
}

export default useModule;
