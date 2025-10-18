"use client";

import React, { createContext, useContext } from "react";
import { Content } from "@prismicio/client";

type CustomizerControlsContextType = {
  selectedWheel?: Content.BoardCustomizerDocumentDataWheelsItem;
  setWheel?: (wheel: Content.BoardCustomizerDocumentDataWheelsItem) => void;
  selectedDeck?: Content.BoardCustomizerDocumentDataDecksItem;
  setDeck?: (deck: Content.BoardCustomizerDocumentDataDecksItem) => void;
  selectedTruck?: Content.BoardCustomizerDocumentDataMetalsItem;
  setTruck?: (trucks: Content.BoardCustomizerDocumentDataMetalsItem) => void;
  selectedBolt?: Content.BoardCustomizerDocumentDataMetalsItem;
  setBolt?: (bolts: Content.BoardCustomizerDocumentDataMetalsItem) => void;
};

const defaultContext: CustomizerControlsContextType = {
  setWheel: () => {},
  setDeck: () => {},
  setTruck: () => {},
  setBolt: () => {},
};

const CustomizerControlsContext = createContext(defaultContext);

type CustomizerControlsProviderPropsType = {
  defaultWheel?: Content.BoardCustomizerDocumentDataWheelsItem;
  defaultDeck?: Content.BoardCustomizerDocumentDataDecksItem;
  defaultTruck?: Content.BoardCustomizerDocumentDataMetalsItem;
  defaultBolt?: Content.BoardCustomizerDocumentDataMetalsItem;
  children?: React.ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderPropsType) {
  const [selectedWheel, setWheel] = React.useState(defaultWheel);
  const [selectedDeck, setDeck] = React.useState(defaultDeck);
  const [selectedTruck, setTruck] = React.useState(defaultTruck);
  const [selectedBolt, setBolt] = React.useState(defaultBolt);

  const value = React.useMemo(() => {
    return {
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    };
  }, [selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  return useContext(CustomizerControlsContext);
}
