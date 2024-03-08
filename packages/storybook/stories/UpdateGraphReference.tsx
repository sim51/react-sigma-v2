import { FC, useEffect, useMemo, useState, CSSProperties } from "react";

import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

import { useRandom } from "./common/useRandom";

export const UpdatedGraphReference: FC<{ style?: CSSProperties }> = ({ style }) => {
  const { randomGraph } = useRandom();
  const [graph, setGraph] = useState(randomGraph());
  const settings = useMemo(() => ({ allowInvalidContainer: true }), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGraph(randomGraph);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <SigmaContainer style={style} graph={graph} settings={settings} />;
};
