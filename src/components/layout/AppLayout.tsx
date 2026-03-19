import { ReactNode, useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex">
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
