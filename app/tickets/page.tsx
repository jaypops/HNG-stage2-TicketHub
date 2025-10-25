"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getUser } from "@/lib/auth"
import { getTickets } from "@/lib/tickets"
import type { Ticket } from "@/lib/tickets"
import { Button } from "@/components/ui/button"
import { TicketList } from "@/components/tickets/ticket-list"
import { CreateTicketDialog } from "@/components/tickets/create-ticket-dialog"
import { EditTicketDialog } from "@/components/tickets/edit-ticket-dialog"

export default function TicketsPage() {
  const router = useRouter()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  useEffect(() => {
    const user = getUser()
    if (!user) {
      router.push("/login")
      return
    }
    setTickets(getTickets())
    setIsLoading(false)
  }, [router])

  const handleTicketCreated = () => {
    setTickets(getTickets())
    setShowCreateDialog(false)
  }

  const handleTicketUpdated = () => {
    setTickets(getTickets())
    setEditingTicket(null)
  }

  const handleTicketDeleted = () => {
    setTickets(getTickets())
  }

  const filteredTickets = filterStatus === "all" ? tickets : tickets.filter((t) => t.status === filterStatus)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Ticket Management</h1>
          <Button onClick={() => router.push("/dashboard")}>Back to Dashboard</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">All Tickets</h2>
            <p className="text-sm text-muted-foreground">Manage and track all your tickets</p>
          </div>
          <Button onClick={() => setShowCreateDialog(true)}>Create Ticket</Button>
        </div>

        <div className="mb-6 flex gap-2">
          {["all", "open", "in_progress", "closed"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              onClick={() => setFilterStatus(status)}
              size="sm"
            >
              {status === "all" ? "All" : status.replace("_", " ")}
            </Button>
          ))}
        </div>

        <TicketList tickets={filteredTickets} onEdit={setEditingTicket} onDelete={handleTicketDeleted} />

        <CreateTicketDialog
          open={showCreateDialog}
          onOpenChange={setShowCreateDialog}
          onTicketCreated={handleTicketCreated}
        />

        {editingTicket && (
          <EditTicketDialog
            ticket={editingTicket}
            open={!!editingTicket}
            onOpenChange={(open) => !open && setEditingTicket(null)}
            onTicketUpdated={handleTicketUpdated}
          />
        )}
      </main>
    </div>
  )
}
