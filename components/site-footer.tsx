import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Youtube } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
  ]

  const serviceLinks = [
    { name: "Content creation", href: "/services/content" },
    { name: "Brand strategy", href: "/services/brand" },
    { name: "Website design", href: "/services/web" },
    { name: "App design", href: "/services/app" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/placeholder.svg?height=32&width=120"
                alt="NeuroEase"
                width={120}
                height={32}
                className="h-8"
              />
            </Link>
            <div className="space-y-2 text-muted-foreground">
              <p>5th Avenue</p>
              <p>10001 New York City</p>
            </div>
            <Button variant="outline" className="gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Open for projects
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-accent w-full"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

