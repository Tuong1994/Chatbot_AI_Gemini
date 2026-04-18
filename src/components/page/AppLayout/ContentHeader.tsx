"use client";

import { FC } from "react";
import { Title } from "@/components/ui/typography";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, MoreVertical, Pen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ContentHeader: FC = () => {
  const t = useTranslations();

  const { isMobile } = useSidebar();

  return (
    <div className="min-w-full px-5 py-3 sticky top-0 z-20 flex items-center justify-between bg-background">
      {isMobile && <SidebarTrigger />}
      {!isMobile && (
        <>
          <Title level={4}>Chatbot AI</Title>
          <Title level={4}>Chat title</Title>
        </>
      )}
      <div className="flex gap-2.5 w-min">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreVertical className="size-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align={isMobile ? "end" : "start"}
          >
            <DropdownMenuItem>
              <Pen className="text-muted-foreground" />
              <span>{t("appLayout.sidebar.actions.rename")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 className="text-muted-foreground" />
              <span>{t("appLayout.sidebar.actions.delete")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="grayscale" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 rounded-lg">
            <DropdownMenuGroup>
              <div className="p-2.5 flex flex-col justify-between items-center">
                <Avatar className="size-20">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="grayscale" />
                </Avatar>
                <span>Account name</span>
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOut className="text-muted-foreground" />
                <span>{t("common.profile.logout")}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ContentHeader;
