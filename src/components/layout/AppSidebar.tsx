import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  AlertTriangle,
  Bell,
  Settings,
  Brain,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Cars", href: "/cars", icon: Car },
  { name: "Alerts", href: "/alerts", icon: AlertTriangle },
  { name: "Notifications", href: "/notifications", icon: Bell },
];

export function AppSidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 h-screen overflow-visible bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-ai shadow-lg shadow-ai/25">
                <Brain className="h-5 w-5 text-white" strokeWidth={1.75} />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-warning animate-pulse-subtle" />
              </div>
              <div>
                <span className="font-display font-semibold text-sidebar-primary text-sm">
                  CarComply
                </span>
                <span className="block text-[10px] text-sidebar-muted font-medium tracking-wider">
                  AI POWERED
                </span>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-ai mx-auto shadow-lg shadow-ai/25">
              <Brain className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>
          )}
          <div className="relative flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className={cn(
                "h-7 w-7 text-sidebar-muted hover:text-sidebar-primary hover:bg-sidebar-accent transition-all",
                collapsed &&
                  "absolute -right-2 top-4 bg-sidebar border border-sidebar-border rounded-full shadow-md",
              )}
            >
              <ChevronLeft
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  collapsed && "rotate-180",
                )}
              />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1.5 p-3 mt-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-sidebar-accent to-sidebar-accent/80 text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive && "text-primary",
                  )}
                  strokeWidth={1.75}
                />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border p-3">
          <NavLink
            to="/"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all duration-200",
              location.pathname === "/" &&
                "bg-sidebar-accent text-sidebar-accent-foreground",
            )}
          >
            <Settings className="h-5 w-5 flex-shrink-0" strokeWidth={1.75} />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
