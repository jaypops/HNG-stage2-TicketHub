"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WavyBackground } from "@/components/wavy-background"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-background">
      <WavyBackground />

      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-primary">TicketHub</div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"></div>

        <div className="relative z-20 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Manage Your Tickets with Ease
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Streamline your workflow, track issues, and collaborate with your team. All in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl">
          <div className="p-6 bg-white rounded-lg border border-border shadow-sm">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-semibold text-foreground mb-2">Easy Tracking</h3>
            <p className="text-sm text-muted-foreground">Track all your tickets in one centralized dashboard</p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-border shadow-sm">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-foreground mb-2">Fast & Responsive</h3>
            <p className="text-sm text-muted-foreground">Lightning-fast performance for seamless workflow</p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-border shadow-sm">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-foreground mb-2">Secure</h3>
            <p className="text-sm text-muted-foreground">Your data is safe with us, always encrypted</p>
          </div>
        </div>
      </div>
    </div>
  )
}
