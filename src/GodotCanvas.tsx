import { Engine } from "./engine";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function GodotCanvas() {
  const godotConfig = {
    canvasResizePolicy: 0,
    executable: "untitled game",
    fileSizes: {
      "untitled game.pck": 18111248,
      "untitled game.wasm": 18926504,
    },
    onProgress: (current: number, total: number) => {
      console.log("current", current, "total", total);
    },
    onExit: (code: number) => {
      console.warn("exit", code);
    },
  };

  const [engine] = useState<any>(new Engine(godotConfig));
  const wrapper = useRef<HTMLDivElement>(null);

  function reloadSize() {
    if (wrapper.current) {
      setHeight(wrapper.current.clientHeight);
      setWidth(wrapper.current.clientWidth);
    }
  }

  useEffect(() => {
    window.onresize = reloadSize;
    reloadSize();
    engine.startGame();
  }, []);

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <Box position="relative" flexGrow={1} ref={wrapper}>
      {/*<Button onClick={() => engine.requestQuit()}>hi</Button>*/}
      <canvas
        style={{
          display: "block",
          outline: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        id="canvas"
        width={width}
        height={height}
      >
        HTML5 canvas appears to be unsupported in the current browser.
        <br />
        Please try updating or use a different browser.
      </canvas>
    </Box>
  );
}
