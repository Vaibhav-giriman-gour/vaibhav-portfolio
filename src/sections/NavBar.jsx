import { useState } from 'react';
import { navLinks } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const NavItems = () => (
  <ul className='nav-ul'>
    {navLinks.map((link) => (
      <li key={link.id} className='nav-li'>
        <a href={link.href} className='nav-li-a'>{link.name}</a>
      </li>
    ))}
  </ul>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 sm:mx-auto c-space'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            <img className='w-10 h-10 rounded-lg' src="assets/Logo_BG.png" alt="Logo" />
          </a>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu} 
            className='flex text-neutral-400 hover:text-white focus:outline-none md:hidden'
            aria-label='Toggle Menu'
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu-icon" className='w-6 h-6'/>
          </button>

          {/* Desktop Navigation */}
          <nav className='md:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Menu - Properly Hidden */}
<AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-[#0E0E10] backdrop-blur-sm z-30 px-5 py-4 md:hidden overflow-hidden"
          >
            <nav>
              <NavItems />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;