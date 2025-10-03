import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { asImageSrc } from "@prismicio/client";

import { Logo } from "@/components/Logo";
import { Bounded } from "@/components/Bounded";
import { FooterPhysics } from "@/components/FooterPhysics";

type Props = {};

export async function Footer({}: Props) {
  const client = createClient();
  const setting = await client.getSingle("settings");

  const boardTextureURLs = setting.data.footer_skateboards
    .map((item) => asImageSrc(item.skateboard, { h: 600 }))
    .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        <PrismicNextImage
          field={setting.data.footer_image}
          alt=""
          fill
          className="object-cover"
          width={1200}
        />
		<FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded as="nav">
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
          {setting.data.navigation.map((item) => (
            <li key={item.link.text} className="hover:underline">
              <PrismicNextLink field={item.link} className="~text-lg/xl">
                {item.link.text}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </Bounded>
    </footer>
  );
}
