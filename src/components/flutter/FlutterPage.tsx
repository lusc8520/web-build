import { Box, Stack } from "@chakra-ui/react";
import "./flutter_bootstrap";
import { useEffect, useRef } from "react";
import { basePath } from "../../routes.ts";

export function FlutterPage() {
  const wind = window as any;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    wind._flutter.buildConfig = {
      engineRevision: "36335019a8eab588c3c2ea783c618d90505be233",
      builds: [
        {
          compileTarget: "dart2js",
          renderer: "canvaskit",
        },
      ],
    };

    wind._flutter.loader.load({
      serviceWorkerSettings: {
        serviceWorkerVersion: "1061233865",
      },
      config: {
        entryPointBaseUrl: `${basePath}`,
        hostElement: containerRef.current,
      },
      // assetBase: `${basePath}/`,
    });
  }, []);

  return (
    <Stack margin="10px" flexGrow={1}>
      <Box flexGrow={1} ref={containerRef} />
    </Stack>
  );
}
