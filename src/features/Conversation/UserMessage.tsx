"use client";

import { FC } from "react";
import { Copy, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

interface UserMessageProps {
  content?: string;
}

const UserMessage: FC<UserMessageProps> = ({ content }) => {
  const t = useTranslations("conversation");

  return (
    <div className="flex gap-1 justify-end items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">
            <Copy />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("actions.copyPrompt")}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">
            <Pen />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">{t("actions.editPrompt")}</TooltipContent>
      </Tooltip>
      <Card className="max-w-max">
        <CardContent>
          <CardDescription>{content}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMessage;
