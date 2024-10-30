declare global {
  interface Window {
    gtag: (command: string, id: string, config: any) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID!

type GTagEvent = {
  action: string
  category: string
  label: string
}

export const pageview = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
  })
}