"use client";

import type { User } from "@/lib/auth";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  user: User | null;
  onLogout: () => void;
}

export function DashboardHeader({ user, onLogout }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-4 md:flex items-center justify-between hidden ">
        <div>
          <h2 className="text-xl font-bold text-foreground">TicketHub</h2>
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm text-muted-foreground">
              Welcome, {user.name}
            </span>
          )}
          <Button variant="outline" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:hidden">
        <div>
          <h2 className="text-xl font-bold text-foreground">TicketHub</h2>
          {user && (
            <span className="text-sm text-muted-foreground">
              Welcome, {user.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
