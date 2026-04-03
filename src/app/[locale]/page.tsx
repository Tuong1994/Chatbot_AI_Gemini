"use client";
import { useState } from "react";
import InputPrompt from "@/features/Home/InputPrompt";
import ToolCategories from "@/features/Home/ToolCategories";
import PageLayout from "@/components/page/PageLayout";
import usePromptStore from "@/store/PromptStore";

export default function Home() {
  const [selectedTool] = usePromptStore((state) => [state.selectedTool]);

  const [prompt, setPrompt] = useState("");

  const [response, setResponse] = useState("");
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    setResponse(""); // Xóa nội dung cũ

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.body) return;

      // 1. Khởi tạo đầu đọc stream
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      // 2. Vòng lặp đọc từng chunk dữ liệu
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        // Giải mã binary sang text
        const chunkValue = decoder.decode(value);

        // 3. Update state liên tục để tạo hiệu ứng chữ chạy
        setResponse((prev) => prev + chunkValue);
      }
    } catch (error) {
      setResponse("Error fetching response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout footer={<InputPrompt />}>
      {Boolean(selectedTool) && (
        <div className="flex-1">
          <ToolCategories />
        </div>
      )}
    </PageLayout>
  );
}
