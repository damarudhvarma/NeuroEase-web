import Link from "next/link"
import { ArrowRight, GitBranch, Gauge, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function WorkProcessSection() {
  const processSteps = [
    {
      icon: GitBranch,
      title: "Discover the problem"
    },
    {
      icon: Gauge,
      title: "Design, Identify & implement"
    },
    {
      icon: Rocket,
      title: "Launch module & gather feedback"
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              A work process that drives results
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We work with a solid plan and a clear process. By combining creativity with strategic planning, we deliver solutions that not only look great but also drive meaningful results for your business.
            </p>
            <Link 
              href="/process"
              className="inline-flex items-center text-primary hover:text-primary/90 font-medium"
            >
              Learn more about our work process
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-none bg-white">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

