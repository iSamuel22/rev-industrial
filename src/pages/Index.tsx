
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/linhaTempo';
import Inventions from '@/components/invencoes';
import Fases from '@/components/Fases';
import Social from '@/components/Social';
import Gallery from '@/components/galeria';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Timeline />
      <Inventions />
      <Fases />
      <Social />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
