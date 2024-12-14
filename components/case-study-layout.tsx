import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface CaseStudyLayoutProps {
  title: string
  company: string
  heroImage: string
  tags: string[]
  content: {
    title: string
    description: string
  }[]
}

export function CaseStudyLayout({
  title,
  company,
  heroImage,
  tags,
  content
}: CaseStudyLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground">{company}</p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="container py-12">
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="rounded-full px-4 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="space-y-16">
              {content.map((section, index) => (
                <div key={index} className="space-y-4 text-center">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

