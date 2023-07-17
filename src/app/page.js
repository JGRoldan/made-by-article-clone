import AboutSection from '@/components/AboutSection';
import HeroVideo from '@/components/HeroVideo';
import TopSection from '@/components/TopSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="container mx-auto m-5">
      <div className="h-screen relative ">
        <TopSection />
        <div className="w-full absolute top-45 h-screen z-20">
          <div className="sticky top-0 ">
            <HeroVideo/>
          </div>
          <div className="w-full md:mt-20 md:mb-10">
            <AboutSection />
          </div>
          <Footer />
        </div>
      </div>
  </div>
  )
}
