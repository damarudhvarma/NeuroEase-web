import Image from "next/image"
import { Button } from "@/components/ui/button"

export function IdentifyingSection() {
  return (
    <section className="container py-12 md:py-20">
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Identifing the issue
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our real time vital analysis provide a brief insights about the user to understand the issue with better touch
          </p>
          <Button
            variant="secondary"
            className="text-base w-full sm:w-auto"
            size="lg"
          >
            View case studies
          </Button>
        </div>
        <div className="grid gap-4 md:gap-6">
          <div className="relative ml-auto aspect-[4/3] w-full sm:w-3/4 overflow-hidden rounded-3xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Smartwatch device interaction"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="relative mr-auto aspect-[4/3] w-full sm:w-3/4 overflow-hidden rounded-3xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Mobile app interface demonstration"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

