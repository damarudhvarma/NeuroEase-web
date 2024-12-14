import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: "Pulse Fitness",
    description: "Grew membership sign-ups by 50% with a digital marketing push",
    image: "/placeholder.svg?height=400&width=600",
    slug: "pulse-fitness"
  },
  {
    title: "Autism Care Center",
    description: "Improved therapy outcomes by 40% using VR technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "autism-care-center"
  },
  {
    title: "Mind & Body Wellness",
    description: "Enhanced patient engagement by 65% through real-time monitoring",
    image: "/placeholder.svg?height=400&width=600",
    slug: "mind-body-wellness"
  },
  {
    title: "NeuroHealth Institute",
    description: "Reduced therapy session times by 30% while improving results",
    image: "/placeholder.svg?height=400&width=600",
    slug: "neurohealth-institute"
  },
  {
    title: "Behavioral Therapy Center",
    description: "Achieved 75% better response rates in children with autism",
    image: "/placeholder.svg?height=400&width=600",
    slug: "behavioral-therapy-center"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Case Studies
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=Client${i}`}
                      alt={`Client ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xl text-muted-foreground">
                41 projects completed in 2024
              </span>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} href={`/case-studies/${study.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-[4/3] md:aspect-auto">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                          <p className="text-muted-foreground">
                            {study.title}
                          </p>
                          <h2 className="text-2xl font-bold tracking-tight">
                            {study.description}
                          </h2>
                        </div>
                        <div className="flex items-center text-primary hover:text-primary/80">
                          Read case study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
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

