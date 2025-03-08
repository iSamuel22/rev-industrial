
import { useState, useEffect } from 'react';
import { Check, X, ArrowRight, ArrowLeft, RotateCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Em que período a Revolução Industrial teve início?",
    options: [
      "Século XV",
      "Século XVII",
      "Século XVIII",
      "Século XX"
    ],
    correctAnswer: 2,
    explanation: "A Revolução Industrial começou no século XVIII (anos 1700) na Grã-Bretanha, mais especificamente por volta de 1760."
  },
  {
    id: 2,
    question: "Qual invenção foi fundamental para o início da Revolução Industrial?",
    options: [
      "Máquina a vapor",
      "Telefone",
      "Automóvel",
      "Internet"
    ],
    correctAnswer: 0,
    explanation: "A máquina a vapor, aperfeiçoada por James Watt em 1769, foi essencial para o desenvolvimento industrial, fornecendo energia para fábricas e transportes."
  },
  {
    id: 3,
    question: "Qual país é considerado o berço da Revolução Industrial?",
    options: [
      "França",
      "Estados Unidos",
      "Alemanha",
      "Inglaterra"
    ],
    correctAnswer: 3,
    explanation: "A Inglaterra (Grã-Bretanha) foi o berço da Revolução Industrial devido a fatores como estabilidade política, recursos naturais e avanços tecnológicos."
  },
  {
    id: 4,
    question: "Qual setor industrial se desenvolveu primeiro durante a Revolução Industrial?",
    options: [
      "Indústria química",
      "Indústria automobilística",
      "Indústria têxtil",
      "Indústria eletrônica"
    ],
    correctAnswer: 2,
    explanation: "A indústria têxtil foi a primeira a se mecanizar, com inovações como a lançadeira volante (1733) e a spinning jenny (1764)."
  },
  {
    id: 5,
    question: "Qual destas NÃO foi uma consequência social da Revolução Industrial?",
    options: [
      "Urbanização acelerada",
      "Melhoria imediata das condições de trabalho",
      "Formação da classe operária",
      "Aumento da poluição"
    ],
    correctAnswer: 1,
    explanation: "A Revolução Industrial inicialmente piorou as condições de trabalho, com longas jornadas, baixos salários e ambientes insalubres."
  },
  {
    id: 6,
    question: "O que foi o Ludismo?",
    options: [
      "Um movimento filosófico que defendia o progresso industrial",
      "Um movimento de trabalhadores que destruíam máquinas",
      "Uma nova técnica de produção industrial",
      "Um partido político favorável aos industriais"
    ],
    correctAnswer: 1,
    explanation: "O Ludismo foi um movimento de trabalhadores do início do século XIX que protestavam contra a mecanização destruindo máquinas, por medo de perderem seus empregos."
  },
  {
    id: 7,
    question: "Qual destes inventores é conhecido como o criador da primeira locomotiva a vapor comercialmente viável?",
    options: [
      "James Watt",
      "Thomas Edison",
      "George Stephenson",
      "Alexander Graham Bell"
    ],
    correctAnswer: 2,
    explanation: "George Stephenson desenvolveu a Locomotion Nº1 e a famosa Rocket, que revolucionaram o transporte ferroviário no início do século XIX."
  },
  {
    id: 8,
    question: "O que caracterizou a Segunda Revolução Industrial?",
    options: [
      "Uso de energia a vapor",
      "Uso de energia elétrica e petróleo",
      "Introdução de robôs nas indústrias",
      "Desenvolvimento da internet"
    ],
    correctAnswer: 1,
    explanation: "A Segunda Revolução Industrial (c. 1850-1914) foi caracterizada pelo uso de novas fontes de energia como eletricidade e petróleo, além de avanços na química e metalurgia."
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) {
      toast({
        description: "Por favor, selecione uma resposta.",
        variant: "destructive",
      });
      return;
    }

    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <section className="section-container pt-28 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title text-center">
            Quiz: Revolução <span className="text-industrial-copper">Industrial</span>
          </h1>
          <p className="section-subtitle text-center">
            Teste seus conhecimentos sobre este importante período histórico
          </p>

          {!showResults ? (
            <div className="glass-panel p-6 md:p-10 rounded-xl mt-8 opacity-0 animate-scale-in">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-industrial-light">
                  Questão {currentQuestionIndex + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium">
                  Pontuação: {score}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-medium mb-6">{currentQuestion.question}</h2>

              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedOption === index 
                        ? isAnswered
                          ? index === currentQuestion.correctAnswer
                            ? 'bg-green-100 border-green-500'
                            : 'bg-red-100 border-red-500'
                          : 'bg-industrial-light/10 border-industrial-copper'
                        : 'bg-white border-gray-200 hover:border-industrial-light'
                    }`}
                    disabled={isAnswered}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                        selectedOption === index 
                          ? isAnswered
                            ? index === currentQuestion.correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-industrial-copper text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {isAnswered && selectedOption === index && index === currentQuestion.correctAnswer && (
                          <Check size={14} />
                        )}
                        {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && (
                          <X size={14} />
                        )}
                        {(!isAnswered || selectedOption !== index) && (
                          <span className="text-xs">{String.fromCharCode(65 + index)}</span>
                        )}
                      </div>
                      {option}
                    </div>
                  </button>
                ))}
              </div>

              {isAnswered && (
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 mb-6">
                  <h3 className="font-medium text-blue-800 mb-1">Explicação:</h3>
                  <p className="text-blue-700">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center"
                >
                  <ArrowLeft size={16} className="mr-2" /> Anterior
                </Button>
                
                {!isAnswered ? (
                  <Button onClick={handleConfirm}>Confirmar Resposta</Button>
                ) : (
                  <Button onClick={handleNext} className="flex items-center">
                    {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Ver Resultados'} 
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="glass-panel p-6 md:p-10 rounded-xl mt-8 text-center opacity-0 animate-scale-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Resultados do Quiz</h2>
              
              <div className="my-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-industrial-light/10">
                  <div className="text-center">
                    <span className="block text-4xl font-bold text-industrial-copper">{score}</span>
                    <span className="text-sm text-gray-600">de {questions.length}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg mb-8">
                {score === questions.length ? 
                  "Parabéns! Você acertou todas as questões!" : 
                  score >= questions.length / 2 ? 
                    "Bom trabalho! Você tem um bom conhecimento sobre a Revolução Industrial." : 
                    "Continue estudando! A Revolução Industrial é um tema fascinante."}
              </p>
              
              <Button onClick={resetQuiz} className="flex items-center mx-auto">
                <RotateCw size={16} className="mr-2" /> Tentar Novamente
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Quiz;
