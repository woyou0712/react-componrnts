import { useEffect, useState } from "react";
import ViewNode from "../ViewNode";

function useModule() {
  const [viewNode, setViewNode] = useState<ViewNode>();

  useEffect(() => {
    setViewNode(new ViewNode({ viewContent: "#app-view" }));
  }, []);

  return {
    viewNode,
  };
}

export default useModule;
