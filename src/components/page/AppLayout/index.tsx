"use client";

import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarInset } from "@/components/ui/sidebar";
import AppLayoutSidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";

interface AppLayoutProps {
  children?: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex w-full min-h-screen">
        <AppLayoutSidebar />
        <SidebarInset>
          <ContentHeader />
          <div className="w-full p-5 flex-1">{children}</div>
        </SidebarInset>
      </div>
    </QueryClientProvider>
  );
};

export default AppLayout;
