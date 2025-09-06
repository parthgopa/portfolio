import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, name: 'Home', to: 'home' },
    { id: 2, name: 'About', to: 'about' },
    { id: 3, name: 'Skills', to: 'skills' },
    { id: 4, name: 'Projects', to: 'projects' },
    { id: 5, name: 'Experience', to: 'experience' },
    { id: 6, name: 'Education', to: 'education' },
    { id: 7, name: 'Achievements', to: 'achievements' },
    { id: 8, name: 'Contact', to: 'contact' },
  ];

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f]/95 backdrop-blur-sm text-gray-300 z-50 shadow-lg'>
      <div>
        <h2 className='text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text'>Parth Gopani</h2>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {links.map(({ id, name, to }) => (
          <li key={id} className='px-4 cursor-pointer hover:text-emerald-400 transition-colors duration-300 font-medium'>
            <Link to={to} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <a href="/Myresume.pdf" download className='hidden md:flex items-center px-5 py-2 border border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400 hover:text-white transition-colors duration-300 font-medium'>
        Download Resume
      </a>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-[70vw] bg-[#0a192f] flex flex-col  items-center p-0'
        }
      >
        {links.map(({ id, name, to }) => (
          <li key={id} className='py-6 text-1xl'>
            <Link onClick={handleClick} to={to} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
        <li className='py-6'>
          <a href="/Myresume.pdf" download className='px-6 py-3 border-2 border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400 hover:text-white transition-colors duration-300 font-medium'>
            Download CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;