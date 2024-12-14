import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DigitalSolutionsSection() {
  return (
    <section className="container py-12 md:py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Team meeting in modern office space"
            width={800}
            height={600}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Delivering creative digital solution
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We provide personalized care with enhanced technology to provide personalized support for individuals with autism, fostering social skills, communication, and cognitive development.
          </p>
          <Button
            variant="secondary"
            className="text-base w-full sm:w-auto"
            size="lg"
          >
            Explore services
          </Button>
        </div>
      </div>
    </section>
  )
}

