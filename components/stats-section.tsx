import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Team collaborating at whiteboard",
      title: "More than 40 projects",
      description: "Our application showcases a selection of our most impactful projects we worked on throughout our journey.",
      link: {
        text: "See our latest case studies",
        href: "/case-studies"
      }
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Laptops and devices on desk",
      title: "Founded in 2024",
      description: "Founded in 2024, our project was born out of a passion for cure. Our years of experience fuel our care.",
      link: {
        text: "Read about our story",
        href: "/about"
      }
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      imageAlt: "Abstract gradient shape",
      title: "Driven by passion",
      description: "Our team lives and breathes creativity, bringing genuine passion to every person we care.",
      link: {
        text: "Meet the team",
        href: "/team"
      }
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-50 border-none">
            <CardContent className="space-y-4 p-6">
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/95">
                  <Image
                    src={stat.image}
                    alt={stat.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
              <Link 
                href={stat.link.href}
                className="inline-flex items-center text-primary hover:text-primary/90"
              >
                {stat.link.text}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

