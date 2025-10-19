"use client";

import React from "react";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";
import { Logo } from "@/components/Logo";

export default function Loading() {
  const { progress } = useProgress();
  return (
    <div
      className={clsx(
        "absolute inset-0 grid place-content-center bg-brand-navy font-sans text-white text-[15vw] transition-opacity duration-1000",
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <Logo className="text-brand-pink w-[15vw] animate-squiggle" />
	  <p className="w-full content-center text-center leading-none animate-squiggle text-brand-lime">
		LOADING...
	  </p>
    </div>
  );
}
