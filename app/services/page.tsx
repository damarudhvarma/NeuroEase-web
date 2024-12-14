import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, LightbulbIcon, Activity } from 'lucide-react'

const services = [
  {
    title: "VR Interaction",
    icon: ArrowRight,
    image: "/placeholder.svg?height=600&width=800",
    imageAlt: "Person using VR headset while seated",
    slug: "vr-interaction"
  },
  {
    title: "REAL TIME INTERACTION",
    icon: LightbulbIcon,
    image: "/placeholder.svg?height=600&width=800",
    imageAlt: "Person using VR equipment with monitors",
    slug: "real-time-interaction"
  },
  {
    title: "REAL TIME VITALS",
    icon: Activity,
    image: "/placeholder.svg?height=600&width=800",
    imageAlt: "Analytics dashboard on laptop screen",
    slug: "real-time-vitals"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="text-center space-y-4 mb-20">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Services
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
              At NeuroEase, we provide a comprehensive range of services designed to revolutionize autism therapy and improve quality of life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <Card className="border-none shadow-none overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-2 p-4">
                      <service.icon className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

