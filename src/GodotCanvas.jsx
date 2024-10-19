import { Engine } from "./engine.js";
import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function GodotCanvas() {
  const godotConfig = {
    canvasResizePolicy: 0,
    executable: "untitled game",
    fileSizes: {
      "untitled game.pck": 18111248,
      "untitled game.wasm": 18926504,
    },
    onProgress: (number, number2) => {
      console.log(number, number2);
    },
    onExit: (n) => {
      console.warn("exit", n);
    },
  };

  function reloadSize() {
    setHeight(wrapper.current.clientHeight);
    setWidth(wrapper.current.clientWidth);
  }

  const [engine] = useState(new Engine(godotConfig));

  useEffect(() => {
    window.onresize = reloadSize;
    reloadSize();
    engine.startGame();
    return () => (window.onresize = null);
  }, []);

  const wrapper = useRef(null);

  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <Flex
      ref={wrapper}
      overflow="hidden"
      justify="center"
      align="center"
      width="100vw"
      height="100vh"
      bgColor="black"
      color="black"
    >
      <Button onClick={() => engine.requestQuit()}>hi</Button>
      <canvas
        style={{ display: "block" }}
        id="canvas"
        height={height}
        width={width}
      >
        HTML5 canvas appears to be unsupported in the current browser.
        <br />
        Please try updating or use a different browser.
      </canvas>
    </Flex>
  );
}
