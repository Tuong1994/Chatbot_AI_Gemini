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
    <div className="flex justify-end mb-8">
      <div className="group max-w-max flex gap-1 items-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
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
      </div>
      <Card className="max-w-max">
        <CardContent>
          <CardDescription>{content}</CardDescription>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default UserMessage;
