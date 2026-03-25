import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import Expertise      from '@/components/Expertise'
import Processus      from '@/components/Processus'
import Realisations   from '@/components/Realisations'
import Accompagnement from '@/components/Accompagnement'
import Contact        from '@/components/Contact'
import Footer         from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <Processus />
      <Realisations />
      <Accompagnement />
      <Contact />
      <Footer />
    </main>
  )
}
