"use client";

import { onStreamChat } from "@/services/prompt/api";
import { useState } from "react";

const usePromptChat = () => {
  const [data, setData] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isError, setIsError] = useState<boolean>(false);

  const onChat = async (prompt: string) => {
    setIsLoading(true);
    setIsError(false);
    setData(""); // Xóa nội dung cũ
    try {
      const response = await onStreamChat({ prompt });
      if (!prompt) return;
      if (!response.body) return;
      // 1. Khởi tạo đầu đọc stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      // 2. Vòng lặp đọc từng chunk dữ liệu
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        // Giải mã binary sang text
        const chunkValue = decoder.decode(value, { stream: true });
        // 3. Update state liên tục để tạo hiệu ứng chữ chạy
        setData((prev) => prev + chunkValue);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, onChat };
};

export default usePromptChat;
