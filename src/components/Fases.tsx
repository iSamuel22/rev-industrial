import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flag, Factory, Cpu } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const phasesData = [
  {
    id: 1,
    name: "Primeira Fase",
    period: "1760-1850",
    icon: <Clock />,
    color: "bg-amber-500",
    description: "Marcada pelo uso da energia a vapor e mecanização da indústria têxtil. Teve início na Inglaterra com o desenvolvimento da máquina a vapor por James Watt. O ferro e o carvão foram matérias-primas fundamentais.",
    inventions: ["Máquina a vapor", "Tear mecânico", "Locomotiva a vapor", "Barco a vapor"],
    impacts: ["Crescimento das cidades", "Surgimento de fábricas", "Início do capitalismo industrial", "Êxodo rural"]
  },
  {
    id: 2,
    name: "Segunda Fase",
    period: "1850-1900",
    icon: <Flag />,
    color: "bg-blue-500",
    description: "Caracterizada pelo uso da eletricidade e do petróleo como fontes de energia. Houve o desenvolvimento de novos materiais como o aço. A indústria química e automobilística ganhou impulso nesta fase.",
    inventions: ["Motor a combustão", "Telefone", "Lâmpada elétrica", "Automóvel", "Avião"],
    impacts: ["Produção em massa", "Expansão imperialista", "Desenvolvimento dos meios de comunicação", "Crescimento do proletariado"]
  },
  {
    id: 3,
    name: "Terceira Fase",
    period: "1950-1980",
    icon: <Factory />,
    color: "bg-green-500",
    description: "Conhecida como Revolução Técnico-Científica-Informacional. Marcada pelo avanço da eletrônica, energia nuclear e telecomunicações. Automatização dos processos produtivos e início da informática.",
    inventions: ["Computador", "Televisão", "Energia nuclear", "Satélites", "Internet (início)"],
    impacts: ["Globalização", "Terceirização", "Transnacionalização de empresas", "Telecomunicações globais"]
  },
  {
    id: 4,
    name: "Quarta Fase",
    period: "2010-Atual",
    icon: <Cpu />,
    color: "bg-purple-500",
    description: "Conhecida como Indústria 4.0 ou Revolução Digital. Caracterizada pela integração de tecnologias digitais à produção industrial. Destaca-se a internet das coisas, inteligência artificial e robotização avançada.",
    inventions: ["Smartphones", "Impressão 3D", "Inteligência Artificial", "Big Data", "Robótica avançada"],
    impacts: ["Automação inteligente", "Novas formas de trabalho", "Transformação digital", "Economia de plataforma", "Questões sobre privacidade"]
  }
];

const Fases = () => {
  const [activePhase, setActivePhase] = useState(phasesData[0]);

  return (
    <>
      <div id="fases" className="pt-28 pb-16 bg-gray-50">
        <div className="section-container">
          <h1 className="section-title text-center">Fases da Revolução Industrial</h1>
          <p className="section-subtitle text-center mx-auto">
            A Revolução Industrial se desenvolveu em quatro grandes fases, cada uma com suas próprias
            características, invenções e impactos na sociedade. Explore cada uma delas abaixo.
          </p>

          {/* Phase selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {phasesData.map((phase) => (
              <Button
                key={phase.id}
                variant={activePhase.id === phase.id ? "default" : "outline"}
                className={`${activePhase.id === phase.id ? phase.color + ' text-white' : ''}`}
                onClick={() => setActivePhase(phase)}
              >
                {phase.icon}
                {phase.name}
              </Button>
            ))}
          </div>

          {/* Phase content */}
          <motion.div
            key={activePhase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-panel rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
          >
            <div className={`inline-flex items-center justify-center ${activePhase.color} text-white p-3 rounded-full mb-4`}>
              {activePhase.icon}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {activePhase.name} <span className="text-muted-foreground font-normal">({activePhase.period})</span>
            </h2>

            <p className="text-muted-foreground mb-6">
              {activePhase.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className={`h-2 w-2 rounded-full ${activePhase.color} mr-2`}></span>
                  Principais Invenções
                </h3>
                <ul className="space-y-2">
                  {activePhase.inventions.map((invention, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`${activePhase.color} h-1.5 w-1.5 rounded-full mt-2 mr-2`}></span>
                      {invention}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className={`h-2 w-2 rounded-full ${activePhase.color} mr-2`}></span>
                  Impactos Sociais
                </h3>
                <ul className="space-y-2">
                  {activePhase.impacts.map((impact, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`${activePhase.color} h-1.5 w-1.5 rounded-full mt-2 mr-2`}></span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline visualization */}
          <div className="mt-16 mb-8">
            <h3 className="text-xl font-semibold text-center mb-6">Linha do Tempo das Fases</h3>
            <div className="relative h-4 bg-gray-200 rounded-full max-w-3xl mx-auto overflow-hidden">
              {phasesData.map((phase, index) => {
                const width = 100 / phasesData.length;
                return (
                  <div
                    key={phase.id}
                    className={`absolute h-full ${phase.color} cursor-pointer transition-all`}
                    style={{
                      left: `${index * width}%`,
                      width: `${width}%`,
                      opacity: activePhase.id === phase.id ? 1 : 0.7
                    }}
                    onClick={() => setActivePhase(phase)}
                  ></div>
                );
              })}
            </div>
            <div className="flex justify-between max-w-3xl mx-auto mt-2 text-sm text-gray-500">
              <span>1760</span>
              <span>1850</span>
              <span>1950</span>
              <span>2010</span>
              <span>Atual</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fases;