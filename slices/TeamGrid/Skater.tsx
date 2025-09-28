import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { ButtonLink } from "@/components/ButtonLink";
import { SkaterScribble } from "./SkaterScribble";

type Props = {
  skater: Content.SkaterDocument;
  index: number;
};

export function Skater({ skater, index }: Props) {
	const colors = [
		"text-brand-blue",
		"text-brand-pink",
		"text-brand-lime",
		"text-brand-orange",
	];

	const scribbleColor = colors[index];

  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <PrismicNextImage
          field={skater.data.photo_background}
          width={500}
          imgixParams={{ q: 20 }}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
		<SkaterScribble className={clsx("relative", scribbleColor)} />
        <PrismicNextImage
          field={skater.data.photo_foreground}
          width={500}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
		<div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{skater.data.firstname}</span>
          <span className="block">{skater.data.lastname}</span>
        </h3>
      </div>
	  <ButtonLink field={skater.data.customizer_link} color="orange" size="sm">Build Their Board</ButtonLink>
    </div>
  );
}
