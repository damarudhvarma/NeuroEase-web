import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { TeamCarousel } from "@/components/team-carousel";

export default function AboutPage() {
  const stats = [
    { number: "8", label: "Years of activity" },
    { number: "17", label: "Design awards" },
    { number: "24", label: "Employees" },
    { number: "150", label: "Happy clients" },
  ];

  const values = ["Creativity", "Integrity", "Collaboration", "Excellence"];

  const images = [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h1 className="text-[56px] leading-[1.1] font-medium tracking-tight">
                Empowering brands through excellence
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed max-w-xl">
                At Impact, our mission is simple: to empower brands with innovative solutions.
                Our goal is to help you tell your story in the most impactful way possible.
              </p>
              <div className="pt-4">
                <Image
                  src="/placeholder.svg"
                  alt="Signature"
                  width={180}
                  height={60}
                  className="w-[180px]"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#F8F9FC] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2">
                    <div className="text-[56px] font-medium">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Passion Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-3xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Team image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <h2 className="text-[56px] leading-[1.1] font-medium tracking-tight">
                Born out of a passion for creativity
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Impact was born out of a passion for creativity. What started as a small
                team has grown into a dynamic agency with a diverse portfolio of successful projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#4285F4]" />
                    <span className="text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-[56px] leading-[1.1] font-medium tracking-tight">
              Meet the team
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
              Each member brings a unique perspective and skill set, making us a well-rounded
              team capable of tackling any challenge.
            </p>
          </div>
          <TeamCarousel />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
