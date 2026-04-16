"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { PanelLeft, Search } from "lucide-react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { routers } from "@/common/constant/routers";

const SidebarActions: FC = () => {
  const t = useTranslations("appLayout.sidebar.actions");

  const { open, isMobile, setOpen } = useSidebar();

  return (
    <div className="flex justify-between px-2">
      {isMobile ? (
        <SidebarTrigger />
      ) : (
        <Tooltip>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            <PanelLeft className="size-4" />
          </TooltipTrigger>
          <TooltipContent>{open ? t("collapse") : t("expand")}</TooltipContent>
        </Tooltip>
      )}
      <Link href={routers.SEARCH}>
        <Button variant="ghost" className="group-data-[collapsible=icon]:hidden">
          <Search />
        </Button>
      </Link>
    </div>
  );
};

export default SidebarActions;
