import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type invencao = {
  id: number;
  name: string;
  year: string;
  inventor: string;
  description: string;
  image: string;
};

const invencoesData: invencao[] = [
  {
    id: 1,
    name: "Máquina a Vapor",
    year: "1769",
    inventor: "James Watt",
    description: "Aperfeiçoamento da máquina a vapor que revolucionou a indústria ao fornecer uma fonte de energia confiável e eficiente para as fábricas.",
    image: "https://nationalgeographic.pt/images/edicoesespeciais/GrandesPersonagens/JamesWatt/w2.jpg"
  },
  {
    id: 2,
    name: "Tear Mecânico",
    year: "1785",
    inventor: "Edmund Cartwright",
    description: "Automatizou o processo de tecelagem, aumentando drasticamente a produção de tecidos e transformando a indústria têxtil.",
    image: "https://th.bing.com/th/id/R.43b7286b64c69e004581e5bc850e5d7c?rik=YqOtwkG%2fQcjpUA&riu=http%3a%2f%2fwww.winstongomes.com.br%2fwp-content%2fuploads%2fTear-da-Toyota-Sakichi-Toyoda.gif&ehk=nw5jKoyQL0y17SI6GTGfQmi1Lhr5K19s8u93wzb98eM%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 3,
    name: "Locomotiva a Vapor",
    year: "1814",
    inventor: "George Stephenson",
    description: "Revolucionou o transporte terrestre, permitindo o movimento rápido de mercadorias e pessoas através de ferrovias.",
    image: "https://th.bing.com/th/id/R.4d0104a8e23d7bce659355e20e06e654?rik=OuU0Xygt%2byrhlA&pid=ImgRaw&r=0"
  },
  {
    id: 4,
    name: "Telégrafo Elétrico",
    year: "1837",
    inventor: "Samuel Morse",
    description: "Permitiu a comunicação rápida a longas distâncias, transformando o fluxo de informações e conectando o mundo.",
    image: "https://th.bing.com/th/id/OIP.Wtl2vWDlGbDw6rg4RKvFTQHaEH?rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    name: "Dínamo",
    year: "1831",
    inventor: "Michael Faraday",
    description: "Primeiro gerador elétrico prático, que convertia energia mecânica em eletricidade, abrindo caminho para a Segunda Revolução Industrial.",
    image: "https://th.bing.com/th/id/OIP.ezOVO_kt3f8Ro54z7mfrLwHaEg?rs=1&pid=ImgDetMain"
  },
  {
    id: 6,
    name: "Processo Bessemer",
    year: "1856",
    inventor: "Henry Bessemer",
    description: "Método para produção em massa de aço de alta qualidade a baixo custo, essencial para a construção de ferrovias, navios e edifícios.",
    image: "https://www.bepex.com.br/wp-content/uploads/2023/04/henry-bessemer-1024x679.jpg"
  }
];

const invencoes = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const showMore = () => {
    setVisibleCount(invencoesData.length);
  };
  
  return (
    <section id="invencoes" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">
          Invenções <span className="text-industrial-copper">Revolucionárias</span>
        </h2>
        <p className="section-subtitle text-center mx-auto">
          Conheça as principais inovações tecnológicas que impulsionaram a Revolução Industrial e transformaram para sempre a forma como vivemos e trabalhamos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {invencoesData.slice(0, visibleCount).map((invencao, index) => (
            <div 
              key={invencao.id} 
              className="invencao-card"
              style={{ '--index': index } as React.CSSProperties}
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={invencao.image} 
                  alt={invencao.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Imagem+Indisponível";
                  }}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-industrial-dark">{invencao.name}</h3>
                  <span className="text-sm font-medium bg-industrial-light/10 px-2 py-1 rounded text-industrial-copper">
                    {invencao.year}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500">Inventor: {invencao.inventor}</p>
                <p className="text-gray-700">{invencao.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {visibleCount < invencoesData.length && (
          <div className="text-center mt-10">
            <button 
              onClick={showMore}
              className="inline-flex items-center px-4 py-2 rounded-full bg-industrial-dark text-white hover:bg-industrial-copper transition-all duration-300"
            >
              Ver mais invenções
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default invencoes;
