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
import { Link } from "@/i18n/navigation";
import { routers } from "@/common/constant/routers";

const SidebarChats: FC = () => {
  const t = useTranslations("appLayout.sidebar");

  const { isMobile } = useSidebar();

  const chats = [
    {
      id: "1",
      name: "Design Engineering",
    },
    {
      id: "2",
      name: "Sales & Marketing",
    },
    {
      id: "3",
      name: "Travel",
    },
  ];

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="text-sm">{t("chats")}</SidebarGroupLabel>
      <SidebarMenu>
        {chats.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton size="lg" asChild>
              <Link href={routers.DETAIL + item.id}>
                <Dot className="size-8" />
                <span>{item.name}</span>
              </Link>
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
                  <span>{t("actions.rename")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>{t("actions.delete")}</span>
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
