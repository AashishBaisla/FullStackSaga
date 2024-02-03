import { MainHeader } from '@/components/MainHeader'
import './globals.css'
import { MainFooter } from '@/components/MainFooter'
import { Metadata } from 'next'
import { ABeeZee } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
// const poppins = Poppins({ weight: ["100", "200", "300", "700"], subsets: ['latin'] })
const aBeeZee = ABeeZee({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Aashish Baisla - Full Stack Web Developer',
  description: 'Embark on a journey through my digital domain as a Full Stack Web Developer specializing in ReactJS, Next.js, and Node.js. Explore my portfolio and dive into the world of code, creativity, and innovation.',
  openGraph: {
    images: '/images/ashu-4.jpg'
  },
  keywords: ["Full Stack Developer",
    "ReactJS Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Development Portfolio",
    "Frontend and Backend Development",
    "JavaScript Developer",
    "UI/UX Design",
    "Code Portfolio",
    "Software Engineer",
    "Web Application Development",
    "Creative Coding",
    "Responsive Web Design",
    "Modern Web Development",
    "Portfolio Website",
    "Web Development Showcase",
    "Innovative Web Solutions",
    "Website Projects",
    "JavaScript Frameworks",
    "Developer Portfolio"]
}

export default function RootLayout({children, modal}: { children: React.ReactNode; modal: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={aBeeZee.className}>
        <MainHeader />
        {children}
        {modal}
        <MainFooter />
        <div id="modal-root" />
      </body>
    </html>
  )
}
