import { Engine } from "./engine";
import {
  Box,
  Button,
  Center,
  Image,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import godotSplash from "./assets/images/untitled game.png";

export function GodotCanvas() {
  const godotConfig = {
    canvasResizePolicy: 0,
    executable: "untitled game",
    fileSizes: {
      "untitled game.pck": 18111248,
      "untitled game.wasm": 18926504,
    },
    onProgress: (current: number, total: number) => {
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
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  function reloadSize() {
    if (wrapper.current) {
      setHeight(wrapper.current.clientHeight);
      setWidth(wrapper.current.clientWidth);
    }
  }

  useEffect(() => {
    if (!wrapper.current) return;
    const observer = new ResizeObserver(reloadSize);
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    engine.startGame().then(() => setShowOverlay(false));
  }, []);

  return (
    <Box position="relative" flexGrow={1} ref={wrapper}>
      <Button zIndex={5} onClick={() => wrapper.current?.requestFullscreen()}>
        hi
      </Button>
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
          <Box width="500px">
            <Image
              width="100%"
              objectFit="contain"
              align="center"
              src={godotSplash}
            />
          </Box>
          <Text fontSize="20px">{progress} %</Text>
          <Progress
            borderRadius="10px"
            bgColor="whiteAlpha.800"
            width="300px"
            colorScheme="blue"
            height="20px"
            value={progress}
          />
          <Text fontSize="20px">downloading game...</Text>
        </VStack>
      </Center>
    </Box>
  );
}
