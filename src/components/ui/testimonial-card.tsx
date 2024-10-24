import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
  videoUrl: string
}

export function TestimonialCard({ name, role, content, image, videoUrl }: TestimonialCardProps) {
  return (
    <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
      <Card className="bg-gray-900 border border-gray-700 overflow-hidden transition-colors duration-200 hover:border-secondary">
        <div className="relative">
          <Image
            src={image}
            alt={`${name}'s testimonial`}
            width={320}
            height={180}
            className="w-full"
          />
        </div>
        <CardContent className="pt-4">
          <p className="text-gray-300">{content}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <CardTitle className="text-white">{name}</CardTitle>
          <CardDescription className="text-gray-400">{role}</CardDescription>
        </CardFooter>
      </Card>
    </Link>
  )
}