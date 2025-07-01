export type BlogPost = {
  slug: string
  title: string
  description: string
  image: string
  date: string  // ✅ added
}

export const posts: BlogPost[] = [
  {
    slug: "streamline-hiring-with-ai-powered-applicant-tracking",
    title: "Streamline Hiring with AI-Powered Applicant Tracking",
    description: "Enhance recruitment efficiency, spot top talent faster, and make smarter hiring decisions with AI-driven applicant tracking solutions.",
    image: "images/post1.jpg",
    date: "June 30, 2025",
  },
  {
    slug: "data-driven-hiring-decisions",
    title: "Data-Driven Hiring Decisions",
    description: "Utilize advanced analytics and AI insights to make informed decisions and build high-performing teams.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero3.png&w=1536&q=75",
    date: "June 28, 2025", 
  },
  {
    slug: "streamline-hiring-with-ai-powered-applicant-tracking-1",
    title: "Streamline Hiring with AI-Powered Applicant Tracking",
    description: "Enhance recruitment efficiency, spot top talent faster, and make smarter hiring decisions with AI-driven applicant tracking solutions.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero1.png&w=1536&q=75",
    date: "June 30, 2025",
  },
  {
    slug: "data-driven-hiring-decisions-1",
    title: "Data-Driven Hiring Decisions",
    description: "Utilize advanced analytics and AI insights to make informed decisions and build high-performing teams.",
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fblog%2FHero%2Fhero3.png&w=1536&q=75",
    date: "June 28, 2025", 
  },
]
