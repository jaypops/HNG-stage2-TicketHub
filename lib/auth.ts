export interface User {
  id: string
  email: string
  name: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

const STORAGE_KEY = "ticket_app_user"

export function saveUser(user: User): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : null
}

export function clearUser(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
