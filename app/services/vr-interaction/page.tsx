import { ServiceLayout } from "@/components/service-layout"

export default function VRInteractionPage() {
  const serviceData = {
    title: "VR Interaction",
    subtitle: "Revolutionizing Autism Therapy with AR/VR",
    description: "AR offers a groundbreaking approach to autism therapy, providing personalized and engaging experiences that can significantly improve the quality of life for individuals on the autism spectrum.",
    content: [
      {
        title: "Key Applications of AR in Autism Therapy",
        items: [
          {
            title: "Social Skills Development",
            description: [
              "Simulate real-world social interactions in a controlled environment.",
              "Practice conversation, eye contact, body language, and emotional cues.",
              "Receive immediate feedback and guidance from therapists."
            ]
          },
          {
            title: "Communication Enhancement",
            description: [
              "Provide visual aids, prompts, and interactive language exercises.",
              "Facilitate communication between individuals with autism and their peers.",
              "Encourage expressive language and comprehension skills."
            ]
          },
          {
            title: "Sensory Integration Therapy",
            description: [
              "Offer calming visual and auditory stimuli to regulate sensory processing.",
              "Create sensory experiences tailored to individual needs and preferences.",
              "Reduce sensory sensitivities and improve sensory integration."
            ]
          },
          {
            title: "Behavioral Therapy",
            description: [
              "Reinforce positive behaviors and provide immediate feedback.",
              "Create engaging and motivating therapy sessions.",
              "Address challenging behaviors in a supportive virtual environment."
            ]
          }
        ]
      }
    ]
  }

  const otherServices = [
    {
      title: "REAL TIME INTREACTION",
      image: "/placeholder.svg?height=96&width=96",
      slug: "real-time-interaction"
    },
    {
      title: "REAL TIME VITALS",
      image: "/placeholder.svg?height=96&width=96",
      slug: "real-time-vitals"
    }
  ]

  return <ServiceLayout service={serviceData} otherServices={otherServices} />
}

