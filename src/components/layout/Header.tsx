import { Bell, Search, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const unreadNotifications = 3;

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40">
      <div className="h-full px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              placeholder="Search cars, alerts, owners..."
              className="pl-10 h-10 bg-background/60 border-border/60 focus:bg-background focus:border-primary/50 transition-all rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-lg hover:bg-muted">
                <Bell className="h-5 w-5" strokeWidth={1.75} />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-critical animate-pulse" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <DropdownMenuLabel className="flex items-center justify-between px-4 py-3 border-b">
                <span className="font-display font-semibold">Notifications</span>
                <Button variant="ghost" size="sm" className="text-xs text-primary h-7 px-2">
                  Mark all read
                </Button>
              </DropdownMenuLabel>
              <div className="max-h-80 overflow-y-auto">
                <DropdownMenuItem className="flex flex-col items-start gap-1.5 px-4 py-3 cursor-pointer focus:bg-muted">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-critical" />
                    <span className="font-medium text-sm">Critical Alert</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    KA-05-MN-1234 compliance expired
                  </p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start gap-1.5 px-4 py-3 cursor-pointer focus:bg-muted">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-warning" />
                    <span className="font-medium text-sm">Warning</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    5 cars expiring in next 7 days
                  </p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start gap-1.5 px-4 py-3 cursor-pointer focus:bg-muted">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-ai animate-pulse-subtle" />
                    <span className="font-medium text-sm flex items-center gap-1">
                      AI Insight
                      <Sparkles className="h-3 w-3 text-ai" />
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-4">
                    New risk predictions available
                  </p>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-primary cursor-pointer justify-center py-3 font-medium">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2.5 px-2 h-10 rounded-lg hover:bg-muted">
                <Avatar className="h-8 w-8 ring-2 ring-primary/10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-ai text-white text-sm font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-[11px] text-muted-foreground">Administrator</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-display">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Profile Settings</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Preferences</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
