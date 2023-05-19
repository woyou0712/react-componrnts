import { useEffect, useState } from "react";
import MoveElement from "../MoveElement";

function useModule() {
  const [move, setMove] = useState<MoveElement>();

  useEffect(() => {
    setMove(new MoveElement());
  });

  return {
    move,
  };
}

export default useModule;
