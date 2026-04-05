import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import usePromptStore from "@/store/PromptStore";

interface PageLayoutProps {
  children?: ReactNode;
  footer?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children, footer }) => {
  const [selectedTool] = usePromptStore((state) => [state.selectedTool]);

  const footerClassName = cn(
    "w-full flex flex-col items-center justify-center",
    selectedTool ? "fixed bottom-0 flex justify-center items-center" : ""
  );

  return (
    <div className="h-full flex justify-center">
      {selectedTool && <div className="w-[300px] sm:w-[500px] lg:w-[800px]">{children}</div>}
      <div className={footerClassName}>
        <div className="w-[300px] sm:w-[500px] lg:w-[800px] min-h-3 bg-background shadow-[0_-50px_30px_40px_var(--background)] absolute -z-2"></div>
        <div className="w-[300px] sm:w-[500px] lg:w-[800px] ">{footer}</div>
      </div>
    </div>
  );
};

export default PageLayout;
