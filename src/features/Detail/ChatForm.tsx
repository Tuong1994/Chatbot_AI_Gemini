"use client";

import { FC } from "react";
import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import usePromptStore from "@/store/PromptStore";

const ChatForm: FC = () => {
  const [aiResponse, isLoading] = usePromptStore((state) => [state.aiResponse, state.isLoading]);

  return (
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
          {aiResponse}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default ChatForm;
