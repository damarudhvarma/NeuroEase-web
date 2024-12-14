import Image from "next/image"

export function ImpactSection() {
  return (
    <section className="container py-12 md:py-20">
      <div className="space-y-12">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-12 items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Impactful solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Partnering with you to create solutions that drive impact. Your success, our mission
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/placeholder.svg?height=800&width=1400"
            alt="Team collaborating in modern office space with whiteboard"
            width={1400}
            height={800}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

