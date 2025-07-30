'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Cpu, Zap, Wallet, Globe, Github, Network, Link } from "lucide-react"

export default function WhatsNew() {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="whats-new-grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#whats-new-grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            New in Cohort 12
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
            Students in this cohort will learn to build more powerful strategies and deploy them in production using the latest Hummingbot innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Hummingbot API Card */}
          <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-8 relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Network className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">Hummingbot API</h3>
                    <a 
                      href="https://github.com/hummingbot/hummingbot-api" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Hummingbot API on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <Badge variant="default" className="mb-4 bg-primary text-black">Open Source OEMS</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Master the new Hummingbot API - a powerful command center that revolutionizes how you deploy and manage trading strategies in production environments.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm">Centralized bot management & monitoring</p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm">Real-time strategy deployment & control</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm">Production-grade security & scalability</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Learn in Week 2:</span> <span className="text-foreground">Deploy your strategies to cloud providers and manage them through the Hummingbot API Dashboard.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gateway v2.8 Card */}
          <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-8 relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <Link className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">Gateway v2.8</h3>
                    <a 
                      href="https://github.com/hummingbot/gateway" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View Gateway on GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <Badge variant="secondary" className="mb-4 text-black">DEX Execution Middleware</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Experience the latest Gateway architecture featuring Solana DEX connectors and hardware wallet support for enhanced security and expanded trading opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-sm">Native Solana DEX integration</p>
                </div>
                <div className="flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-sm">Hardware wallet support for secure trading</p>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-secondary flex-shrink-0" />
                  <p className="text-sm">Improved performance & reliability</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                <p className="text-sm">
                  <span className="font-semibold text-secondary">Learn in Week 2:</span> <span className="text-foreground">Build DEX strategies using Gateway v2.8 with Solana and other blockchain integrations.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">
              Be among the first to master these cutting-edge tools in a hands-on environment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}