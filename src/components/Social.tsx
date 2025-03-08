
import { useEffect, useRef } from 'react';

const impacts = [
  {
    title: 'Urbanização',
    description: 'Migração em massa da população rural para as cidades em busca de trabalho nas fábricas, criando grandes centros urbanos.'
  },
  {
    title: 'Crescimento da Classe Operária',
    description: 'Formação de uma nova classe social - o proletariado industrial - que trabalhava nas fábricas sob condições frequentemente precárias.'
  },
  {
    title: 'Surgimento de Sindicatos',
    description: 'Organização dos trabalhadores para lutar por melhores condições de trabalho, salários justos e jornadas reduzidas.'
  },
  {
    title: 'Transformação Econômica',
    description: 'Transição de uma economia predominantemente agrária para uma economia industrial, com crescimento econômico sem precedentes.'
  },
  {
    title: 'Mudanças Ambientais',
    description: 'Aumento da poluição e degradação ambiental com o crescimento das indústrias e o uso intensivo de combustíveis fósseis.'
  },
  {
    title: 'Globalização',
    description: 'Expansão do comércio internacional, colonialismo e interconexão global através de novas redes de transporte e comunicação.'
  }
];

const Social = () => {
  const impactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = impactsRef.current?.querySelectorAll('.impact-item');
          items?.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (impactsRef.current) {
      observer.observe(impactsRef.current);
    }

    return () => {
      if (impactsRef.current) {
        observer.unobserve(impactsRef.current);
      }
    };
  }, []);

  return (
    <section id="impacts" className="py-24 bg-industrial-dark text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-white">Impactos Econômicos e Sociais</h2>
          <p className="section-subtitle text-gray-300">
            Como a Revolução Industrial transformou profundamente a sociedade, a economia e o meio ambiente.
          </p>
        </div>

        <div ref={impactsRef} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => (
              <div 
                key={index} 
                className="impact-item bg-industrial-dark/90 border border-industrial-light/20 p-6 rounded-xl opacity-0 transform translate-y-10 transition-all duration-500"
              >
                <h3 className="text-xl font-bold mb-3 text-industrial-copper">{impact.title}</h3>
                <p className="text-gray-300">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
