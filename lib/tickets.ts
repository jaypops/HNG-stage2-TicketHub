import { generateId } from "./auth"

export interface Ticket {
  id: string
  title: string
  description: string
  status: "open" | "in_progress" | "closed"
  priority: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
}

const TICKETS_STORAGE_KEY = "ticket_app_tickets"

export function getTickets(): Ticket[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(TICKETS_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveTickets(tickets: Ticket[]): void {
  localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(tickets))
}

export function createTicket(data: Omit<Ticket, "id" | "createdAt" | "updatedAt">): Ticket {
  const ticket: Ticket = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  const tickets = getTickets()
  tickets.push(ticket)
  saveTickets(tickets)
  return ticket
}

export function updateTicket(id: string, data: Partial<Omit<Ticket, "id" | "createdAt">>): Ticket | null {
  const tickets = getTickets()
  const index = tickets.findIndex((t) => t.id === id)
  if (index === -1) return null

  tickets[index] = {
    ...tickets[index],
    ...data,
    updatedAt: new Date().toISOString(),
  }
  saveTickets(tickets)
  return tickets[index]
}

export function deleteTicket(id: string): boolean {
  const tickets = getTickets()
  const filtered = tickets.filter((t) => t.id !== id)
  if (filtered.length === tickets.length) return false
  saveTickets(filtered)
  return true
}
