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
    "w-full flex flex-col justify-center",
    Boolean(selectedTool) ? "fixed bottom-0 flex justify-center items-center" : ""
  );

  return (
    <div className="h-full flex justify-center">
      <div className="w-[800px]">{children}</div>
      <div className={footerClassName}>
        <div className="w-[800px]">{footer}</div>
      </div>
    </div>
  );
};

export default PageLayout;
