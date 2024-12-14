import { CaseStudyLayout } from "@/components/case-study-layout"

export default function PulseFitnessCaseStudy() {
  const caseStudyData = {
    title: "Grew membership sign-ups by 50% with a digital marketing push",
    company: "Pulse Fitness",
    heroImage: "/placeholder.svg?height=800&width=1200",
    tags: ["Video Ads", "Digital Campaign", "Social Media"],
    content: [
      {
        title: "Rebranding Pulse Fitness Studio",
        description: "Pulse Fitness Studio, a boutique gym, needed a refreshed brand identity to attract a younger, health-conscious audience. We developed a bold, energetic logo and a vibrant color palette that aligned with their high-intensity workout programs. The new branding captured the essence of strength, community, and motivation, helping Pulse stand out in a crowded fitness market."
      },
      {
        title: "Building a Conversion-Focused Website",
        description: "We created a sleek, conversion-optimized website that highlights Pulse's classes, trainers, and membership options. The site was designed to be mobile-friendly, with quick access to class schedules, booking features, and membership sign-ups. This streamlined experience led to a 50% increase in online membership registrations within the first three months of the new site's launch."
      },
      {
        title: "Launching a Dynamic Digital Campaign",
        description: "To boost awareness, we launched a comprehensive digital marketing campaign, featuring video ads that showcased Pulse Fitness Studio's unique workout experiences. The campaign ran across social media platforms and targeted local audiences interested in fitness and wellness. Through strategic ad placement and compelling content, we significantly increased brand visibility and engagement."
      }
    ]
  }

  return <CaseStudyLayout {...caseStudyData} />
}

