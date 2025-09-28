import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";

import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYoutubePlayer";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock: FC<VideoBlockProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video">
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 bg-brand-lime ~translate-x-2/3 ~translate-y-2/3"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 bg-white ~translate-x-1/3 ~translate-y-1/2"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "absolute inset-0 bg-white ~translate-x-1/2 ~translate-y-1/3"
          )}
        />

        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          {isFilled.keyText(slice.primary.youtube_video_id) ? 
          (<LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />) : null}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
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

export default VideoBlock;
