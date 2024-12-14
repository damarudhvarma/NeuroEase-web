import { ServiceLayout } from "@/components/service-layout"

export default function RealTimeInteractionPage() {
  const serviceData = {
    title: "Real Time Interaction",
    subtitle: "Enhancing Autism Therapy with Real-Time Feedback",
    description: "Our Real Time Interaction technology provides immediate, adaptive responses to individuals with autism, creating a more engaging and effective therapy experience.",
    content: [
      {
        title: "Key Features of Real Time Interaction",
        items: [
          {
            title: "Adaptive Response System",
            description: [
              "Instantly adjusts to the user's actions and reactions",
              "Provides personalized feedback based on individual progress",
              "Encourages continued engagement and learning"
            ]
          },
          {
            title: "Multi-Sensory Feedback",
            description: [
              "Combines visual, auditory, and tactile feedback for comprehensive learning",
              "Helps reinforce positive behaviors and correct challenges in real-time",
              "Supports various learning styles and preferences"
            ]
          },
          {
            title: "Progress Tracking",
            description: [
              "Monitors and records user interactions and responses",
              "Generates detailed reports for therapists and caregivers",
              "Allows for data-driven adjustments to therapy plans"
            ]
          },
          {
            title: "Collaborative Therapy Sessions",
            description: [
              "Enables remote participation of therapists in real-time sessions",
              "Facilitates immediate guidance and intervention when needed",
              "Supports a team-based approach to autism therapy"
            ]
          }
        ]
      }
    ]
  }

  const otherServices = [
    {
      title: "VR Interaction",
      image: "/placeholder.svg?height=96&width=96",
      slug: "vr-interaction"
    },
    {
      title: "REAL TIME VITALS",
      image: "/placeholder.svg?height=96&width=96",
      slug: "real-time-vitals"
    }
  ]

  return <ServiceLayout service={serviceData} otherServices={otherServices} />
}

