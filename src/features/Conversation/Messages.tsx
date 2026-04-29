"use client";

import { FC, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { ERole } from "@/services/user/enum";
import type { Messages } from "@/services/message/type";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import usePromptStore from "@/store/PromptStore";
import UserMessage from "./UserMessage";

const Messages: FC = () => {
  const [aiResponse, isLoading] = usePromptStore((state) => [state.aiResponse, state.isLoading]);

  const messages: Messages = [
    {
      id: "1",
      content: "Write me a story under 300 words",
      role: ERole.USER,
    },
    {
      id: "2",
      content:
        "# The Whispering Glimmer\n\nElara, an astronomer whose life was etched in starlight, adjusted the colossal telescope. Perched on the highest peak of Mount Cinder, her observatory hummed with quiet purpose. Tonight, a familiar, ancient star cluster, **The Dragon's Breath**, was her quarry.\n\nUsually, its familiar shimmer brought comfort. But tonight, a tiny anomaly flickered at its periphery. Not a comet, nor a rogue asteroid. This was… a pulse. A rhythmic, almost deliberate blinking.\n\nShe leaned closer, her eye pressed to the eyepiece until the dark ring of the cosmos filled her vision. Zooming in, the pulse resolved into a cluster of lights, too ordered to be natural. A grid, perhaps? A structure? It was moving, not drifting, but *navigating*.\n\nA chill, not of the mountain air but of profound realization, traced her spine. This wasn't merely a discovery; it was a conversation. For centuries, humanity had gazed outward, wondering if anyone gazed back.\n\nWith trembling fingers, Elara reached for the communication array, her heart thudding against her ribs. The universe had just sent a message, and she was the first to read it. The night sky, once a canvas of distant beauty, had become a bustling thoroughfare.",
      role: ERole.BOT,
    },
  ];

  return (
    <>
      {/* {isLoading && <Spinner className="size-6" />}
      <div className="prose dark:prose-invert max-w-none custom-markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Tùy chỉnh để Table có thanh cuộn ngang khi quá dài
            table: ({ node, ...props }) => (
              <div className="table-wrapper">
                <table {...props} />
              </div>
            ),
          }}
        >
          {aiResponse}
        </ReactMarkdown>
      </div> */}

      {messages.map((message) => (
        <>
          {message.role === ERole.USER && <UserMessage content={message.content} />}
          {message.role === ERole.BOT && (
            <>
              {isLoading && <Spinner className="size-6" />}
              <div className="prose dark:prose-invert max-w-none custom-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    // Tùy chỉnh để Table có thanh cuộn ngang khi quá dài
                    table: ({ node, ...props }) => (
                      <div className="table-wrapper">
                        <table {...props} />
                      </div>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default Messages;
