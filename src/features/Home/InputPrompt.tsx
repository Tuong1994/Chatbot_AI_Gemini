"use client";

import { forwardRef, ForwardRefRenderFunction, HTMLAttributes, useCallback, useState } from "react";
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

interface InputPromptProps extends HTMLAttributes<HTMLTextAreaElement> {
  selectedTool: string;
  onSelectTool: (tool: string) => void
  onCancelTool: () => void;
}

const InputPrompt: ForwardRefRenderFunction<HTMLTextAreaElement, InputPromptProps> = (
  { selectedTool, onSelectTool, onCancelTool, ...restProps },
  ref
) => {

  const tools = [
    {
      type: "image",
      title: "Create image",
      icon: Image,
    },
    {
      type: "music",
      title: "Create music",
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
        <Button key={tool.type} variant="outline" onClick={onCancelTool}>
          <tool.icon />
          <span>{tool.title}</span>
          <X onClick={onCancelTool} />
        </Button>
      ));
  }, [selectedTool]);

  return (
    <div>
      <Title className="mb-5 font-semibold">Where should we start ?</Title>
      <InputGroup>
        <InputGroupTextarea ref={ref} {...restProps} placeholder="Ask AI" />
        <InputGroupAddon align="block-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <List />
                <span>Tools</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuRadioGroup value={selectedTool} onValueChange={onSelectTool}>
                  {renderToolDropdownItem()}
                </DropdownMenuRadioGroup>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {renderSelectedTool()}

          <InputGroupButton variant="ghost" size="sm" className="ml-auto">
            <SendHorizonal />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default forwardRef(InputPrompt);
