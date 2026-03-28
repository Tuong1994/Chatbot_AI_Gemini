"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SidebarActions from "./SidebarActions";
import SidebarChats from "./SidebarChats";
import SidebarSetting from "./SidebarSetting";
import SidebarAddChats from "./SidebarAddChats";

export default function AppLayoutSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarActions />
      </SidebarHeader>
      <SidebarContent>
        <SidebarAddChats />
        <SidebarChats />
      </SidebarContent>
      <SidebarFooter>
        <SidebarSetting />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
