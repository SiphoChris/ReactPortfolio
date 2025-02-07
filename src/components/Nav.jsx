import { useState } from 'react';
import data from '../data/index.json';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const { navigation } = data.result;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center px-6 md:px-24 h-[8rem] backdrop-blur-sm">
        {/* Logo */}
        <a href="#" className="logo text-[#FF4500] font-bold text-2xl md:text-3xl border-4 border-[#FF4500] rounded-full p-1">
          {navigation.logo}
        </a>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navigation.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-item text-[#FF4500] font-bold tracking-wide text-xl hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} className="text-[#FF4500]" /> : <Menu size={24} className="text-[#FF4500]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 bg-gray-800 py-4">
          {navigation.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white font-bold hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
