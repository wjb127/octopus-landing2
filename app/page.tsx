import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ContactSection />
    </main>
  )
}