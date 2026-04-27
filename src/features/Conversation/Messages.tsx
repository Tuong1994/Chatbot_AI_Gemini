"use client";

import { FC } from "react";
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
        "### The Whispering Pebble Elara loved the beach at sunset, when the sand glowed like embers and the waves whispered secrets to the shore. Most days, she collected shells, but today felt different. A glint of impossible colour caught her eye near a tide pool, just as the last sliver of sun dipped below the horizon. It wasn't a shell, nor a piece of sea glass. It was a pebble, smooth and perfectly round, but shimmering with the blues of the deep ocean and the purples of the twilight sky. As she picked it up, a faint, almost imperceptible hum vibrated against her palm. It felt alive, radiating a gentle warmth. She pressed it to her ear. ***Whush... whush...*** It was the sound of the ocean, miniaturized, echoing from within the stone. A tiny, perfect secret. Elara clutched the pebble tightly, a wide smile spreading across her face. This wasn't just a stone; it was a piece of the sea's ancient song, humming just for her. She knew, with a certainty only a child could possess, that she’d found her very own ocean companion, a tiny heart beating with the rhythm of the waves. She tucked it carefully into her pocket, the hum still a faint tremor against her hip, and walked home beneath the burgeoning stars, a guardian of the ocean's smallest, most magical secret.",
      role: ERole.BOT,
    },
  ];

  return (
    <>
      {messages.map((message) => (
        <>
          <UserMessage />
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
              {aiResponse}
            </ReactMarkdown>
          </div>
        </>
      ))}
    </>
  );
};

export default Messages;
