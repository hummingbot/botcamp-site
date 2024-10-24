import Image from 'next/image'
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
// Company logos
import binance from "@/images/logos/binance-dark.png"
import amazewallet from "@/images/logos/amazewallet.png"
import injective from "@/images/logos/Injective.png"
import decrypt from "@/images/logos/decrypt-dark.png"
import harvard from "@/images/logos/harvard-dark.png"
import apple from "@/images/logos/apple-dark.png"
import ripple from "@/images/logos/ripple-dark.png"
import outlier from "@/images/logos/outlier-dark.png"
// Testimonial thumbnails
import alexThumb from "@/images/testimonials/alex-thumb.webp"
import tobyThumb from "@/images/testimonials/toby-thumb.webp"
import vikThumb from "@/images/testimonials/vik-thumb.webp"
import alkalifahThumb from "@/images/testimonials/alkalifah-thumb.webp"
import alanThumb from "@/images/testimonials/alan-thumb.webp"
import valentinThumb from "@/images/testimonials/valentin-thumb.webp"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex",
      role: "Singapore",
      content: "I'm a software engineer, so learning the trader mindset and navigating the DeFi jungle were important to help me grow as an algo trader.",
      image: alexThumb,
      videoUrl: "https://www.youtube.com/watch?v=4elUhsZdc6w"
    },
    {
      name: "Toby",
      role: "Germany",
      content: "Botcamp helped me utilize Hummingbot to its fullest, and I finally grasped the nuances of the cross-exchange market making strategy.",
      image: tobyThumb,
      videoUrl: "https://www.youtube.com/watch?v=QPnOPPoXcrM"
    },
    {
      name: "Vik",
      role: "Russia",
      content: "Coding was just a hobby, but then I found that I can make money from it. Now, I run Hummingbot to support my family's needs!",
      image: vikThumb,
      videoUrl: "https://www.youtube.com/watch?v=rFq0Add0qJ0"
    },
    {
      name: "Alkalifah",
      role: "Abu Dhabi",
      content: "",
      image: alkalifahThumb,
      videoUrl: "https://www.youtube.com/watch?v=lamJjaHcRSs"
    },
    {
      name: "Alan",
      role: "USA",
      content: "",
      image: alanThumb,
      videoUrl: "https://www.youtube.com/watch?v=atoEWjF37B8"
    },
    {
      name: "Valentin",
      role: "Germany",
      content: "",
      image: valentinThumb,
      videoUrl: "https://www.youtube.com/watch?v=m_PNTacb3Ks"
    },
  ]

  const logos = [
    { src: binance, alt: 'Binance' },
    { src: apple, alt: 'Apple' },
    { src: ripple, alt: 'Ripple' },
    { src: harvard, alt: 'Harvard University' },
    { src: decrypt, alt: 'Decrypt' },
    { src: outlier, alt: 'Outlier Ventures' },
    { src: injective, alt: 'Injective' },
    { src: amazewallet, alt: 'Amaze Wallet' },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Join Traders and Engineers from Top Institutions
          </h2>

          {/* Logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3 w-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} image={testimonial.image.src} />
            ))}
          </div>

          {/* Updated button for more testimonials */}
          <div className="mt-12">
            <Button variant="default" size="lg" asChild>
              <a
                href="https://www.youtube.com/playlist?list=PLDwlNkL_4MMeI3oyeACxbn-PZsobcEWJn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch More Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
