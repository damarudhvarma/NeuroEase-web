import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
  ]

  return (
    <header className="container flex h-20 items-center justify-between py-6">
      <Link href="/" className="flex items-center space-x-2">
        <Image 
          src="/placeholder.svg?height=32&width=32" 
          alt="NeuroEase logo" 
          width={32} 
          height={32}
          className="h-8 w-8"
        />
        <span className="text-xl font-semibold">NeuroEase</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link 
            key={item.title}
            href={item.href} 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Contact us</Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.title} href={item.href} className="text-lg font-medium">
                  {item.title}
                </Link>
              ))}
              <Link href="/contact" className="text-lg font-medium">
                Contact us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

