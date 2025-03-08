import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const linhaTempo = () => {
  const linhaTempoRef = useRef<HTMLDivElement>(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && linhaTempoRef.current) {
      const linhaTempoItems = linhaTempoRef.current.querySelectorAll('.linhaTempo-item');
      linhaTempoItems.forEach((item, index) => {
        (item as HTMLElement).style.setProperty('--index', String(index));
      });
    }
  }, [inView]);

  const linhaTempoItems = [
    {
      year: '1760',
      title: 'Início da Revolução Industrial',
      description: 'A Revolução Industrial tem seu início na Inglaterra, marcando uma era de grandes transformações econômicas e sociais.',
    },
    {
      year: '1764',
      title: 'Invenção da Spinning Jenny',
      description: 'James Hargreaves inventa a Spinning Jenny, revolucionando a produção têxtil e aumentando a eficiência na fiação.',
    },
    {
      year: '1769',
      title: 'Máquina a Vapor de Watt',
      description: 'James Watt patenteia a máquina a vapor, uma invenção crucial que impulsiona a indústria e o transporte.',
    },
    {
      year: '1785',
      title: 'Tear Mecânico de Cartwright',
      description: 'Edmund Cartwright inventa o tear mecânico, automatizando o processo de tecelagem e aumentando a produção de tecidos.',
    },
    {
      year: '1825',
      title: 'Locomotiva a Vapor de Stephenson',
      description: 'George Stephenson constrói a primeira locomotiva a vapor bem-sucedida, revolucionando o transporte ferroviário.',
    },
    {
      year: '1870',
      title: 'Segunda Revolução Industrial',
      description: 'A Segunda Revolução Industrial tem início, com avanços na eletricidade, química e produção em massa.',
    },
  ];

  return (
    <section id="linhaTempo" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">
          Linha do <span className="text-industrial-copper">Tempo</span>
        </h2>
        <center><p className="section-subtitle">
          Uma jornada através dos principais eventos e inovações que moldaram a Revolução Industrial.
        </p></center>
      </div>

      <div className="relative">
        <div ref={linhaTempoRef} className="linhaTempo-wrapper">
          {linhaTempoItems.map((item, index) => (
            <div key={index} ref={ref} className="linhaTempo-item">
              <div className="linhaTempo-dot"></div>
              <div className="flex flex-col md:flex-row gap-4">
                <span className="font-semibold text-industrial-copper w-24">{item.year}</span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default linhaTempo;
