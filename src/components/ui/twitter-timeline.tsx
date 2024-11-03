import { useEffect, useRef } from 'react'

interface TwitterTimelineProps {
  username: string
  height?: number
  theme?: 'light' | 'dark'
}

export function TwitterTimeline({ 
  username, 
  height = 400,
  theme = 'dark' 
}: TwitterTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)

    // Create and embed timeline
    if (containerRef.current) {
      // Clear any existing content
      containerRef.current.innerHTML = ''
      
      // Create new timeline
      const anchor = document.createElement('a')
      anchor.className = 'twitter-timeline'
      anchor.setAttribute('data-theme', theme)
      anchor.setAttribute('data-height', height.toString())
      anchor.setAttribute('data-chrome', 'noheader nofooter noborders transparent')
      anchor.href = `https://twitter.com/${username}`
      
      containerRef.current.appendChild(anchor)
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [username, height, theme])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-lg overflow-hidden bg-transparent"
    />
  )
}