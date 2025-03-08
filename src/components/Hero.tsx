
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white z-0"></div>

      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block px-3 py-1 bg-industrial-light/10 rounded-full text-industrial-dark text-sm font-medium">
            Transformação da humanidade
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-industrial-dark opacity-0 animate-fade-in">
            A Revolução<br />
            <span className="text-industrial-copper">Industrial</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-delayed-fade-in">
            Um período de transformação radical que mudou para sempre a maneira como vivemos, trabalhamos e nos relacionamos com o mundo.
          </p>

          <div className="py-4 opacity-0 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <a
              href="#linhaTempo"
              className="inline-flex items-center px-6 py-3 rounded-full bg-industrial-dark text-white hover:bg-industrial-copper transition-all duration-300"
            >
              Explorar
              <ArrowDown size={18} className="ml-2 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
