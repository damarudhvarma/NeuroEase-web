import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CtaSection } from "./cta-section"

interface ServiceLayoutProps {
  service: {
    title: string
    description: string
    subtitle: string
    content: {
      title: string
      items: {
        title: string
        description: string[]
      }[]
    }[]
  }
  otherServices: {
    title: string
    image: string
    slug: string
  }[]
}

export function ServiceLayout({ service, otherServices }: ServiceLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[40vh] min-h-[400px] w-full bg-slate-50">
          <div className="container h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              {service.title}
            </h1>
          </div>
        </section>
        
        <section className="container py-12 md:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              {otherServices.map((otherService) => (
                <Link key={otherService.slug} href={`/services/${otherService.slug}`}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24">
                          <Image
                            src={otherService.image}
                            alt={otherService.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-semibold p-4">{otherService.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{service.subtitle}</h2>
                <p className="text-muted-foreground text-lg">
                  {service.description}
                </p>
              </div>
              
              {service.content.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-muted-foreground">
                            • {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <SiteFooter />
    </div>
  )
}

