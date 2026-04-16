"use client";

import { FC } from "react";
import { SquarePen } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routers } from "@/common/constant/routers";
import usePromptStore from "@/store/PromptStore";

const SidebarAddChats: FC = () => {
  const t = useTranslations("appLayout.sidebar.actions");

  const [resetTool] = usePromptStore((state) => [state.resetTool]);

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link href={routers.HOME}>
            <SidebarMenuButton tooltip={t("newChat")} onClick={resetTool}>
              <SquarePen />
              <span>{t("newChat")}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarAddChats;
