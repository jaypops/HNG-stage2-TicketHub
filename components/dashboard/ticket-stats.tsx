"use client"

import type { Ticket } from "@/lib/tickets"
import { Card } from "@/components/ui/card"

interface TicketStatsProps {
  tickets: Ticket[]
}

export function TicketStats({ tickets }: TicketStatsProps) {
  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="p-6">
        <div className="text-sm font-medium text-muted-foreground mb-2">Total Tickets</div>
        <div className="text-3xl font-bold text-foreground">{stats.total}</div>
      </Card>

      <Card className="p-6">
        <div className="text-sm font-medium text-muted-foreground mb-2">Open</div>
        <div className="text-3xl font-bold text-blue-600">{stats.open}</div>
      </Card>

      <Card className="p-6">
        <div className="text-sm font-medium text-muted-foreground mb-2">In Progress</div>
        <div className="text-3xl font-bold text-yellow-600">{stats.inProgress}</div>
      </Card>

      <Card className="p-6">
        <div className="text-sm font-medium text-muted-foreground mb-2">Closed</div>
        <div className="text-3xl font-bold text-green-600">{stats.closed}</div>
      </Card>
    </div>
  )
}
