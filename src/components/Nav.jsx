import { useState } from 'react';
import portfolioData from '../data/index.json';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logo, links } = portfolioData.navigation;

  return (
    <header className="relative">
      <nav className="flex justify-between items-center px-6 lg:px-24 h-32 text-white z-10">
        <a href="#" className="text-2xl font-bold border-2 border-white rounded-full px-2 py-1">
          {logo}
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-20"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg font-bold">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="hover:text-orange-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-90 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 lg:hidden z-10`}>
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-orange-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;