"use client";

import { FC, ReactNode } from "react";
import { SidebarInset } from "@/components/ui/sidebar";
import AppLayoutSidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen">
      <AppLayoutSidebar />
      <SidebarInset>
        <ContentHeader />
        <div className="w-full p-5 flex-1">{children}</div>
      </SidebarInset>
    </div>
  );
};

export default AppLayout;
