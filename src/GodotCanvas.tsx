import { Engine } from "./engine";
import { Box, Center, Progress, Stack, Text, VStack } from "@chakra-ui/react";
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
      setProgress(Math.floor((current / total) * 100));
    },
    onExit: (code: number) => {
      console.warn("exit", code);
    },
  };

  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);
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
    engine.startGame().then(() => setShowOverlay(false));
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
      <Center
        display={showOverlay ? "flex" : "none"}
        height="100%"
        width="100%"
        bgColor="#0c0d14"
        position="absolute"
        top={0}
        left={0}
      >
        <VStack>
          <Text fontSize="20px">{progress} %</Text>
          <Progress
            borderRadius="10px"
            bgColor="transparent"
            width="300px"
            colorScheme="green"
            height="20px"
            border="1px lightgreen solid"
            value={progress}
          />
        </VStack>
      </Center>
    </Box>
  );
}
