"use client";

import { FC, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import InputPrompt from "@/components/page/InputPrompt";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import usePromptChat from "@/components/page/InputPrompt/usePromptChat";

const ChatForm: FC = () => {
  const [prompt, setPrompt] = useState("");

  const { data: aiResponse, isLoading, onChat } = usePromptChat();

  const handleSubmit = () => onChat(prompt);

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
      <InputPrompt value={prompt} onChange={(e) => setPrompt(e.target.value)} onChat={handleSubmit} />
    </>
  );
};

export default ChatForm;
