import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const icons = [
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "Bicycle icon"
    },
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "Mobile apps icon"
    },
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "Computer setup icon"
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="rounded-3xl bg-slate-50 p-8 md:p-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex -space-x-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-background"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s bring your vision to life
          </h2>
          <Button 
            size="lg" 
            className="text-base rounded-full px-8"
          >
            Book a discovery call
          </Button>
        </div>
      </div>
    </section>
  )
}

