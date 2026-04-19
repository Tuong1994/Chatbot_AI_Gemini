"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import usePromptStore from "@/store/PromptStore";

interface PageLayoutProps {
  children?: ReactNode;
  footer?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children, footer }) => {
  const [aiResponse, isLoading, selectedTool] = usePromptStore((state) => [state.aiResponse, state.isLoading, state.selectedTool]);

  const isRender = Boolean(selectedTool || aiResponse || isLoading);

  const childClassName = cn(
    "w-[300px] sm:w-[450px] lg:w-[700px] opacity-0 transition-opacity",
    isRender ? "opacity-100 animate-[fadeIn_1s_ease_forwards]" : ""
  );

  const footerClassName = cn(
    "w-full fixed top-1/2 bottom-1/2 flex flex-col items-center justify-center",
    isRender ? "top-[unset] bottom-0 justify-center items-center animate-slidedown" : ""
  );

  return (
    <div className="h-full relative flex justify-center">
      {isRender && <div className={childClassName}>{children}</div>}
      <div className={footerClassName}>
        <div className="w-[300px] sm:w-[450px] lg:w-[700px] min-h-3 bg-background shadow-[0_-50px_30px_40px_var(--background)] absolute -z-2"></div>
        <div className="w-[300px] sm:w-[450px] lg:w-[700px] ">{footer}</div>
      </div>
    </div>
  );
};

export default PageLayout;
