import Image from "next/image"
import { Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center space-y-10 py-12 md:py-20 text-center">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-full border-2 border-background overflow-hidden"
            >
              <Image
                src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                alt={`Client ${i}`}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-muted-foreground">
          Trusted by 200+ clients
        </span>
      </div>
      <div className="space-y-4 max-w-3xl px-4 md:px-0">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Enhance your cure with VR
        </h1>
        <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground">
          Revolutionizing autism therapy through immersive technology.
        </p>
        <p className="mx-auto max-w-[700px] text-base md:text-lg text-muted-foreground">
          Our innovative solutions empower individuals with autism to overcome challenges and reach their full potential.
        </p>
      </div>
    </section>
  )
}

