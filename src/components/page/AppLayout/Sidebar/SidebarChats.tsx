"use client";

import { FC } from "react";
import { Dot, MoreHorizontal, Pen, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";

const SidebarChats: FC = () => {
  const t = useTranslations('appLayout.sidebar')

  const { isMobile } = useSidebar();

  const chats = [
    {
      name: "Design Engineering",
      url: "#",
    },
    {
      name: "Sales & Marketing",
      url: "#",
    },
    {
      name: "Travel",
      url: "#",
    },
  ];

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-sm">
        {t('chats')}
      </SidebarGroupLabel>
      <SidebarMenu>
        {chats.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton size="lg" asChild>
              <a href={item.url}>
                <Dot className="size-8" />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Pen className="text-muted-foreground" />
                  <span>{t('actions.rename')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>{t('actions.delete')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarChats;
