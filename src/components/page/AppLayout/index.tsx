"use client";

import { FC, ReactNode } from "react";
import { SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import AppLayoutSidebar from "./Sidebar";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const { isMobile } = useSidebar();

  return (
    <main className="flex min-h-screen">
      <AppLayoutSidebar />
      <SidebarInset>
        {isMobile && <SidebarTrigger />}
        {children}
      </SidebarInset>
    </main>
  );
};

export default AppLayout;
