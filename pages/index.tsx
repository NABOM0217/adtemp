import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchAds from '../components/SearchAds'
import Viral from '../components/Viral'
import SNS from '../components/SNS'
import YouTube from '../components/YouTube'
import Outdoor from '../components/Outdoor'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <SearchAds />
        <Viral />
        <SNS />
        <YouTube />
        <Outdoor />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}