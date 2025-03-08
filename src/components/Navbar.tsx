import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { title: 'Início', href: '/', hash: '#home' },
    { title: 'Linha do Tempo', href: '/', hash: '#linhaTempo' },
    { title: 'Invenções', href: '/', hash: '#invencoes' },
    { title: 'Fases', href: '/', hash: '#fases' },
    { title: 'Impactos', href: '/', hash: '#impacts' },
    { title: 'Galeria', href: '/', hash: '#galeria' },
  ];

  const quizItem = { title: 'Quiz', href: '/quiz', hash: '', isQuiz: true };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-industrial-dark font-bold text-xl tracking-tight">
            Revolução<span className="text-industrial-copper">Industrial</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link 
              key={item.title}
              to={item.hash ? `${item.href}${item.hash}` : item.href}
              className="nav-item"
              onClick={() => {
                if (location.pathname === item.href && item.hash) {
                  const element = document.querySelector(item.hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {item.title}
            </Link>
          ))}
          <Link 
            to={quizItem.href}
            className="nav-item quiz-link"
          >
            {quizItem.title}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass-panel mt-3 py-4 px-6 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link 
                  to={item.hash ? `${item.href}${item.hash}` : item.href}
                  className="block py-2 text-industrial-dark"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname === item.href && item.hash) {
                      setTimeout(() => {
                        const element = document.querySelector(item.hash);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to={quizItem.href}
                className="block py-2 text-industrial-dark quiz-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {quizItem.title}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;