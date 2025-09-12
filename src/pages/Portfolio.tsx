import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

/**
 * Main Portfolio Page Component
 * Contains all sections of Youssef's portfolio website
 */
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background Elements */}
      <AnimatedBackground />
      
      {/* Navigation Bar */}
      <Navbar />
      
      {/* All Sections */}
      <main className="relative z-10">
        {/* Hero Section - Landing area with introduction */}
        <Hero />
        
        {/* About Section - Personal information and highlights */}
        <About />
        
        {/* Skills Section - Technical abilities and proficiency */}
        <Skills />
        
        {/* Projects Section - Portfolio of work */}
        <Projects />
        
        {/* Education Section - Academic background and courses */}
        <Education />
        
        {/* Contact Section - Ways to get in touch */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Portfolio