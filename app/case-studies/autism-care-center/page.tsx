import { CaseStudyLayout } from "@/components/case-study-layout"

export default function AutismCareCenterCaseStudy() {
  const caseStudyData = {
    title: "Improved therapy outcomes by 40% using VR technology",
    company: "Autism Care Center",
    heroImage: "/placeholder.svg?height=800&width=1200",
    tags: ["VR Therapy", "Data Analytics", "Patient Care"],
    content: [
      {
        title: "Implementing VR Therapy Solutions",
        description: "The Autism Care Center sought to enhance their therapy programs with cutting-edge virtual reality technology. We developed and implemented customized VR environments that provided safe, controlled spaces for patients to practice social interactions and develop crucial life skills."
      },
      {
        title: "Data-Driven Therapy Tracking",
        description: "Our solution included comprehensive analytics tools that allowed therapists to track patient progress in real-time. This data-driven approach enabled more personalized therapy plans and better outcome measurement, leading to a 40% improvement in therapy effectiveness."
      },
      {
        title: "Training and Integration",
        description: "We provided extensive training to the therapy team and developed protocols for integrating VR sessions into existing treatment programs. This ensured smooth adoption of the new technology and maximum benefit for patients."
      }
    ]
  }

  return <CaseStudyLayout {...caseStudyData} />
}

