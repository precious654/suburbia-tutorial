import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import React from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Skater } from "./Skater";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid: FC<TeamGridProps> = async ({ slice }) => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-navy bg-texture"
    >
      <Heading as="h2" size="lg" className="text-center text-white">
        <PrismicText field={slice.primary.heading}/>
      </Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-10">
        {
          skaters.map((skater, index) => (
            <React.Fragment key={index}>
              {
                skater.data.firstname && (
                  <Skater skater={skater} index={index} />
                )
              }
            </React.Fragment>
          ))
        }
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

export default TeamGrid;
