import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Lightbulb, Activity } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      title: "VR Interaction",
      image: "/placeholder.svg?height=400&width=600",
      icon: Pencil,
      alt: "Person using VR headset while seated"
    },
    {
      title: "REAL TIME INTREACTION",
      image: "/placeholder.svg?height=400&width=600",
      icon: Lightbulb,
      alt: "Therapy setup with VR equipment and monitors"
    },
    {
      title: "REAL TIME VITALS",
      image: "/placeholder.svg?height=400&width=600",
      icon: Activity,
      alt: "Analytics dashboard on laptop screen"
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Card key={i} className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  className="aspect-[3/2] h-auto w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 pt-4">
                <feature.icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold tracking-tight">
                  {feature.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

