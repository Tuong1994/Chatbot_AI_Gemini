"use client";

import { FC } from "react";
import { SquarePen } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import usePromptStore from "@/store/PromptStore";

const SidebarAddChats: FC = () => {
  const t = useTranslations("appLayout.sidebar.actions");

  const [resetTool] = usePromptStore(state => [state.resetTool])

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={t("newChat")} onClick={resetTool}>
            <SquarePen />
            <span>{t("newChat")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarAddChats;
