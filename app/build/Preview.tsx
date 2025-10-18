"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, Preload } from "@react-three/drei";

import { useCustomizerControls } from "./context";
import { asImageSrc } from "@prismicio/client";
import { Skateboard } from "@/components/Skateboard";

const DEFAULT_WHEEL_TEXTURE_URL = "/skateboard/SkateWheel1.png";
const DEFAULT_DECK_TEXTURE_URL = "/skateboard/Deck.webp";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";

type Props = {
  wheelTextureURLs: string[];
  deckTextureURLs: string[];
};

export function Preview({ wheelTextureURLs, deckTextureURLs }: Props) {
  const cameraControls = useRef<CameraControls>(null);

  const { selectedWheel, selectedTruck, selectedDeck, selectedBolt } =
    useCustomizerControls();

  const wheelTextureURL =
    asImageSrc(selectedWheel?.texture) ?? DEFAULT_WHEEL_TEXTURE_URL;
  const deckTextureURL =
    asImageSrc(selectedDeck?.texture) ?? DEFAULT_DECK_TEXTURE_URL;
  const truckColor = selectedTruck?.color ?? DEFAULT_TRUCK_COLOR;
  const boltColor = selectedBolt?.color ?? DEFAULT_BOLT_COLOR;

  return (
    <Canvas>
      <React.Suspense fallback={null}>
        <Environment
          files={"/hdr/warehouse-512.hdr"}
          environmentIntensity={0.6}
        />
        <directionalLight
          castShadow
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          intensity={1.6}
        />
        <Skateboard
          wheelTextureURLs={wheelTextureURLs}
          wheelTextureURL={wheelTextureURL}
          deckTextureURLs={deckTextureURLs}
          deckTextureURL={deckTextureURL}
          truckColor={truckColor}
          boltColor={boltColor}
          pose="side"
        />
        <CameraControls
          ref={cameraControls}
          minDistance={0.2}
          maxDistance={4}
        />
      </React.Suspense>
      <Preload all />
    </Canvas>
  );
}
