import { Puzzle, Sparkles, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function ValuesSection() {
  const values = [
    {
      icon: Puzzle,
      title: "Tailored solutions",
      description: "We take the time to understand your specific needs, challenges, and goals."
    },
    {
      icon: Sparkles,
      title: "Innovative thinking",
      description: "We thrive on pushing boundaries, exploring ideas, and staying ahead of trends."
    },
    {
      icon: RefreshCw,
      title: "Collaborative approach",
      description: "From the initial concept to the final delivery, we work closely with you."
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {values.map((value, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent -z-10 rounded-full" />
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              {i < values.length - 1 && (
                <div className="absolute top-8 left-full w-full border-t-2 border-dashed border-slate-200 hidden md:block" />
              )}
            </div>
            <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

