import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoIosMail } from 'react-icons/io';
import { MdCall } from 'react-icons/md';

const Hero = () => {
  return (
    <div name='home' className='w-full mt-18 pt-18 bg-gradient-to-b from-[#0a192f] to-[#112240] relative'>
      {/* Container */}
      <motion.div 
        className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className='text-emerald-400 text-xl font-semibold tracking-wider'>Hi, my name is</p>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-2 tracking-tight'>
          Parth Gopani
        </h2>
        <h2 className='text-3xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-blue-500 text-transparent bg-clip-text mb-4'>
          A Passionate React JS & AI Developer.
        </h2>
        <p className='text-gray-300 py-4 max-w-[700px] text-lg leading-relaxed'>
          I'm a Computer Science graduate from The Maharaja Sayajirao University of Baroda, specializing in AI and Web Development. I'm passionate about leveraging AI solutions to address real-world problems and creating innovative software solutions.
        </p>
        <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 my-4'>
            <Link to='projects' smooth={true} duration={500} className='w-full sm:w-auto'>
                <button className='bg-white text-[#0a192f] group border-0 px-8 py-3 w-full flex items-center justify-center hover:bg-gray-100 rounded-md font-medium transition-all duration-300'>
                    My Projects
                </button>
            </Link>
            <Link to='contact' smooth={true} duration={500} className='w-full sm:w-auto'>
                <button className='bg-transparent text-emerald-400 group border-2 border-emerald-400 px-8 py-3 w-full flex items-center justify-center hover:bg-emerald-400/10 transition-all duration-300 rounded-md font-medium'>
                    Contact Me
                </button>
            </Link>
        </div>
        <div className='flex space-x-6 mt-4'>
            <a href="https://linkedin.com/in/parth-gopani-89918253" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'>
                <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/parthgopa" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'>
                <FaGithub size={30} />
            </a>
            <a href="mailto:bdgopani3@gmail.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'>
                <IoIosMail size={30} />
            </a>
            <a href="tel:+918469847060" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'>
                <MdCall size={30} />
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;