import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Partners from '@/components/sections/Partners'
import Testimonials from '@/components/sections/Testimonials'
import Blogs from '@/components/sections/Blogs'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import AIBackground from '@/components/AIBackground'
import Demo from '@/components/sections/Demo'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* AI Background - covers entire page */}
      <AIBackground intensity="medium" animated={true} />
      
      {/* All content with relative z-index to appear above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Partners />
        <Demo/>
        <Pricing />
        <Blogs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}