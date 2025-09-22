import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/ButtonLink";
import { TallLogo } from "./TallLogo";
import { WideLogo } from "./WideLogo";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr_auto] place-items-end px-6 ~py-10/16">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex relative w-full flex-col lg:flex-row items-center justify-between ~gap-2/4">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field={slice.primary.button} icon="skateboard" size="lg" className="z-20 mt-2 block">
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
      {/**
       * 💡 Use Prismic MCP with your code editor
       *
       * Get AI-powered help to build your slice components — based on your actual model.
       *
       * ▶️ Setup:
       * 1. Add a new MCP Server in your code editor:
       *
       * {
       *   "mcpServers": {
       *     "Prismic MCP": {
       *       "command": "npx",
       *       "args": ["-y", "@prismicio/mcp-server@latest"]
       *     }
       *   }
       * }
       *
       * 2. Select a model optimized for coding (e.g. Claude 3.7 Sonnet or similar)
       *
       * ✅ Then open your slice file and ask your code editor:
       *    "Code this slice"
       *
       * Your code editor reads your slice model and helps you code faster ⚡
       * 🎙️ Give your feedback: https://community.prismic.io/t/help-us-shape-the-future-of-slice-creation/19505
       * 📚 Documentation: https://prismic.io/docs/ai#code-with-prismics-mcp-server
       */}
    </Bounded>
  );
};

export default Hero;
