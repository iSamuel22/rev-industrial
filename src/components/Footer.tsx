
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-industrial-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Revolução<span className="text-industrial-copper">Industrial</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Explorando a era que transformou a humanidade e criou o mundo moderno.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} - Emanuele e Laysa
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Seções</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-industrial-copper transition-colors">Início</a>
              </li>
              <li>
                <a href="#linhaTempo" className="text-gray-300 hover:text-industrial-copper transition-colors">Linha do Tempo</a>
              </li>
              <li>
                <a href="#invencoes" className="text-gray-300 hover:text-industrial-copper transition-colors">Invenções</a>
              </li>
              <li>
                <a href="#impacts" className="text-gray-300 hover:text-industrial-copper transition-colors">Impactos</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-industrial-copper transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#fases" className="text-gray-300 hover:text-industrial-copper transition-colors">Fases</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre o Projeto</h4>
            <p className="text-gray-300 mb-4">
              Este site foi desenvolvido como projeto educacional sobre a Revolução Industrial, suas causas, eventos e impactos na sociedade moderna.
            </p>
            <p className="text-gray-400 text-sm">
              3º Ano - Ensino Médio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
