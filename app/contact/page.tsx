import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-20">
          <div className="rounded-3xl bg-slate-50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="space-y-4 max-w-lg">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Get in touch
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Whether you&apos;re ready to kick off a new project, have questions about our services, we&apos;d love to hear from you!
                  </p>
                </div>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Person writing on desk with laptop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

