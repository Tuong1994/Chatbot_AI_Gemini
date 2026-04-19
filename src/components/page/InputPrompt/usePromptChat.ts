"use client";

import { onStreamChat } from "@/services/prompt/api";
import usePromptStore from "@/store/PromptStore";

const usePromptChat = () => {
  const [setAiResponse, setIsLoading, setIsError] = usePromptStore((state) => [
    state.setAiResponse,
    state.setIsLoading,
    state.setIsError,
  ]);

  const onChat = async (prompt: string) => {
    setIsLoading(true);
    setIsError(false);
    setAiResponse(""); // Xóa nội dung cũ
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
        // setData((prev) => prev + chunkValue);
        setAiResponse(chunkValue);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { onChat };
};

export default usePromptChat;
