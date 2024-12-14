'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'

interface TeamMember {
  name: string
  role: string
  image: string
}

export function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const autoplayRef = useRef<NodeJS.Timeout>()

  const teamMembers: TeamMember[] = [
    {
      name: "Ricky Stokes",
      role: "General Manager",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Michael Reynolds",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Ryan Johnson",
      role: "Financial Manager",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=300",
    }
  ]

  const autoplay = (delay: number) => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
    }
    autoplayRef.current = setTimeout(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
        autoplay(delay)
      }
    }, delay)
  }

  useEffect(() => {
    if (emblaApi) {
      autoplay(3000) // Start autoplay with 3 second intervals
    }
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }
  }, [emblaApi])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Gradient Mask */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <Carousel
        ref={emblaRef}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {teamMembers.map((member, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-none">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-4 space-y-1">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Right Gradient Mask */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  )
}

