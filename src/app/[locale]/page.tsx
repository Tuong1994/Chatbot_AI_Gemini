"use client";

import InputPrompt from "@/components/page/InputPrompt";
import ToolCategories from "@/features/Home/ToolCategories";
import PageLayout from "@/components/page/PageLayout";
import usePromptStore from "@/store/PromptStore";

export default function Home() {
  const [selectedTool] = usePromptStore((state) => [state.selectedTool]);

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
