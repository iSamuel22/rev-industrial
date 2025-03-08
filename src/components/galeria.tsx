
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galeriaImages = [
  {
    src: "https://conceitosdomundo.pt/wp-content/uploads/2021/10/industria-textil-2.jpg",
    alt: "Antiga fábrica industrial",
    caption: "Fábrica têxtil do século XIX"
  },
  {
    src: "https://s1.static.brasilescola.uol.com.br/be/2023/05/locomotiva-vapor-primeira-revolucao-industrial.jpg",
    alt: "Locomotiva a vapor",
    caption: "Locomotiva a vapor em estação ferroviária"
  },
  {
    src: "https://jornaltribuna.com.br/wp-content/uploads/2021/06/primeira-revolcao-industrial.jpg",
    alt: "Máquinas industriais",
    caption: "Maquinário industrial da época"
  },
  {
    src: "https://pt-static.z-dn.net/files/dfd/7a3f74b9e9aa9d4e5a800a9ec0afa273.jpg",
    alt: "Trabalhadores em fábrica",
    caption: "Operários em fábrica têxtil"
  },
  {
    src: "https://img.freepik.com/fotos-premium/paisagem-urbana-de-urbanizacao-industrial-com-chamines-e-edificios-industriais-em-um-ambiente-de-cidade-moderna_38013-1974.jpg",
    alt: "Paisagem urbana industrial",
    caption: "Cidade industrial com chaminés de fábricas"
  },
  {
    src: "https://ea7f3b9810.cbaul-cdnwnd.com/37ac4988310c24015fcf95d050efbc42/system_preview_detail_200002883-c34b0c4457-public/Tear%20Mec%C3%A2nico%20de%20Crompton.jpeg",
    alt: "Tecelagem",
    caption: "Tear mecânico revolucionário"
  }
];

const galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galeriaImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galeriaImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Galeria de Imagens</h2>
          <p className="section-subtitle">
            Explore fotografias e ilustrações que capturam a essência da Revolução Industrial.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {galeriaImages.map((image, index) => (
            <div 
              key={index}
              className="galeria-image cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
          <button 
            className="absolute top-4 right-4 text-white hover:text-industrial-copper transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-industrial-copper transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={galeriaImages[selectedImage].src} 
              alt={galeriaImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <p className="text-white text-center">{galeriaImages[selectedImage].caption}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-industrial-copper transition-colors"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default galeria;
