import { ServiceLayout } from "@/components/service-layout"

export default function RealTimeVitalsPage() {
  const serviceData = {
    title: "Real Time Vitals",
    subtitle: "Optimizing Autism Therapy with Physiological Insights",
    description: "Our Real Time Vitals monitoring system provides crucial physiological data during therapy sessions, allowing for more informed and responsive care for individuals with autism.",
    content: [
      {
        title: "Advantages of Real Time Vitals Monitoring",
        items: [
          {
            title: "Stress and Anxiety Management",
            description: [
              "Monitors heart rate and skin conductance to detect stress levels",
              "Allows therapists to adjust sessions based on physiological responses",
              "Helps individuals learn to recognize and manage their own stress responses"
            ]
          },
          {
            title: "Sensory Overload Prevention",
            description: [
              "Tracks indicators of sensory overload in real-time",
              "Enables proactive adjustments to the therapy environment",
              "Supports the development of personalized coping strategies"
            ]
          },
          {
            title: "Sleep Pattern Analysis",
            description: [
              "Monitors sleep quality and patterns over time",
              "Provides insights into the relationship between sleep and therapy outcomes",
              "Helps in developing strategies for improved sleep hygiene"
            ]
          },
          {
            title: "Physical Activity Tracking",
            description: [
              "Measures movement and activity levels during therapy sessions",
              "Encourages appropriate levels of physical engagement",
              "Helps in designing more effective movement-based interventions"
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
      title: "REAL TIME INTREACTION",
      image: "/placeholder.svg?height=96&width=96",
      slug: "real-time-interaction"
    }
  ]

  return <ServiceLayout service={serviceData} otherServices={otherServices} />
}

