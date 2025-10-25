"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, clearUser, type User } from "@/lib/auth"; 
import { getTickets } from "@/lib/tickets";
import type { Ticket } from "@/lib/tickets";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { TicketStats } from "@/components/dashboard/ticket-stats";
import { RecentTickets } from "@/components/dashboard/recent-tickets";
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null); 
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeDashboard = () => {
      const currentUser = getUser();
      if (!currentUser) {
        router.push("/login");
        return;
      }
      
      setTimeout(() => {
        setUser(currentUser);
        setTickets(getTickets());
        setIsLoading(false);
      }, 0);
    };

    initializeDashboard();
  }, [router]);

  const handleLogout = () => {
    clearUser();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your tickets.
          </p>
        </div>

        <TicketStats tickets={tickets} />

        <div className="mt-8">
          <RecentTickets tickets={tickets} />
        </div>

        <div className="mt-8 flex gap-4">
          <Button onClick={() => router.push("/tickets")}>
            Manage Tickets
          </Button>
        </div>
      </main>
    </div>
  );
}