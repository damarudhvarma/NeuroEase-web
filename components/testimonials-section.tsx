"use client"

import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "We came with a challenge, and they delivered beyond our expectations. Their team was not only creative but also strategic, helping us navigate the digital landscape with ease.",
      author: "Ricky Stokes",
      company: "Vista Ventures",
      image: "/placeholder.svg?height=64&width=64"
    },
    {
      rating: 5,
      text: "They're a true partner in our growth. Their work has been instrumental in helping us reach new heights, and we look forward to continuing our commercial relationship.",
      author: "Ryan Martinez",
      company: "EchoWave Tech",
      image: "/placeholder.svg?height=64&width=64"
    },
    {
      rating: 4,
      text: "Their team took the time to understand our needs and delivered a brand identity that exceeded our expectations. The response from our customers has been phenomenal.",
      author: "Michael Turner",
      company: "Urban Innovations",
      image: "/placeholder.svg?height=64&width=64"
    },
    {
      rating: 5,
      text: "Brought our ideas to life in ways we never imagined. Their approach and attention to detail made our project a huge success. Highly recommended.",
      author: "David Lawson",
      company: "GreenLeaf Organics",
      image: "/placeholder.svg?height=64&width=64"
    },
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Trusted by industry leaders<br />and loved by clients
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          At Impact, our user&apos;s success stories are our greatest achievement. Hear what our doctors have to say.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-1/6 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-none bg-slate-50">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

