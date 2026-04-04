"use client";

import { ChangeEvent, FC } from "react";
import { ChevronsUpDown, Globe, Settings, SunMoon } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

const SidebarSetting: FC = () => {
  const t = useTranslations("appLayout.sidebar");

  const pathname = usePathname();

  const router = useRouter();

  const { isMobile } = useSidebar();

  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Tách path hiện tại, thay locale bằng newLocale
    const segments = pathname.split("/");
    segments[1] = newLocale; // vì segment 0 là "" (do string bắt đầu bằng "/")

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              tooltip={t("setting")}
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Settings className="size-8" />
              <span className="truncate font-medium group-data-[collapsible=icon]:hidden">
                {t("setting")}
              </span>
              <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <SunMoon className="size-4" />
                  <span className="truncate font-medium">{t("theme.title")}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                        <DropdownMenuRadioItem value="light">{t("theme.light")}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">{t("theme.dark")}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">{t("theme.system")}</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Globe className="size-4" />
                  <span className="truncate font-medium">{t("locale.title")}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuGroup>
                      <DropdownMenuRadioGroup value={pathname.split("/")[1]} onValueChange={() => {}}>
                        {routing.locales.map(locale => (
                          <DropdownMenuRadioItem key={locale} value={locale}>{t(`locale.${locale}`)}</DropdownMenuRadioItem>
                        ))}
                        {/* <DropdownMenuRadioItem value="en">{t("locale.en")}</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="vn">{t("locale.vn")}</DropdownMenuRadioItem> */}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarSetting;
