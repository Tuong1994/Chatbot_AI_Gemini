"use client";

import {
  FormEvent,
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  KeyboardEvent,
  useCallback,
  ChangeEvent,
} from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Image, List, Music, SendHorizonal, X } from "lucide-react";
import { Title } from "@/components/ui/typography";
import { EToolType } from "@/services/prompt/enum";
import { useTranslations } from "next-intl";
import usePromptStore from "@/store/PromptStore";
import usePromptChat from "./usePromptChat";

interface InputPromptProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSendMessage?: () => void;
}

const InputPrompt: ForwardRefRenderFunction<HTMLTextAreaElement, InputPromptProps> = (
  { onSendMessage, ...restProps },
  ref
) => {
  const t = useTranslations("common");

  const [prompt, selectedTool, setPrompt, setSelectedTool, resetTool] = usePromptStore((state) => [
    state.prompt,
    state.selectedTool,
    state.setPrompt,
    state.setSelectedTool,
    state.resetTool,
  ]);

  const { onChat } = usePromptChat();

  const tools = [
    {
      type: EToolType.IMAGE,
      title: t("inputPrompt.tools.image"),
      icon: Image,
    },
    {
      type: EToolType.MUSIC,
      title: t("inputPrompt.tools.music"),
      icon: Music,
    },
  ];

  const renderToolDropdownItem = () => {
    return tools.map((tool) => (
      <DropdownMenuRadioItem key={tool.type} value={tool.type}>
        <tool.icon />
        <span>{tool.title}</span>
      </DropdownMenuRadioItem>
    ));
  };

  const renderSelectedTool = useCallback(() => {
    return tools
      .filter((tool) => tool.type === selectedTool)
      .map((tool) => (
        <Button key={tool.type} variant="outline" onClick={resetTool}>
          <tool.icon />
          <span className="hidden lg:block">{tool.title}</span>
          <X onClick={resetTool} />
        </Button>
      ));
  }, [selectedTool]);

  const handleSelectTool = (tool: string) => {
    const newTool = tool as EToolType;
    setSelectedTool(newTool);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onChat(prompt);
      onSendMessage?.();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setPrompt(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onChat(prompt);
    onSendMessage?.();
  };

  return (
    <div className="w-full bg-background">
      {!Boolean(selectedTool) ? <Title className="mb-5 font-medium">{t("inputPrompt.label")} ?</Title> : null}

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupTextarea
            ref={ref}
            {...restProps}
            value={prompt}
            onChange={handleChange}
            placeholder="Ask AI"
            onKeyDown={handleKeyDown}
          />

          <InputGroupAddon align="block-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <List />
                  <span>{t("inputPrompt.tools.title")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuGroup>
                  <DropdownMenuRadioGroup value={String(selectedTool)} onValueChange={handleSelectTool}>
                    {renderToolDropdownItem()}
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {renderSelectedTool()}

            <InputGroupButton type="submit" variant="ghost" size="sm" className="ml-auto">
              <SendHorizonal />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>

      <p className="p-2.5 text-xs text-center">{t("inputPrompt.note")}</p>
    </div>
  );
};

export default forwardRef(InputPrompt);
