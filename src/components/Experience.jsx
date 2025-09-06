import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "SANRUSHA - LLC, North Carolina, USA",
    duration: "December 2024 - Ongoing",
    description: [
      "Developed a Subscription based Business Model using PayPal Payment Gateway integration (third party), along with Auto-payment enable.",
      "Collaborated with senior developers on debugging and improved software performance and stability.",
      "Gained industry level knowledge of Git and prevention of Code overstepping, along with importance of Pull Requests (PR).",
      "Built the Calendar Events from User, Vendor and Admin perspective.",
      "Developing the iOS Mobile application using React-Native technology."
    ]
  }
];

const Experience = () => {
  return (
    <div name='experience' className='w-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 py-4'>
      <div className='max-w-[1200px] mx-auto px-6 py-10 w-full h-full'>
        <div className='mb-10'>
          <h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-400'>
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          {/* <div className="absolute left-0 md:left-1/2 -ml-px w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-600/40 hidden md:block rounded-full"></div> */}
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 justify-start md:justify-end items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#112240] to-[#0a192f]/90 backdrop-blur-sm rounded-xl shadow-xl border border-emerald-400/20 hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-500 w-full md:w-7/12 px-8 py-6 ml-6 md:ml-0">
                <div className="bg-emerald-500/10 inline-block px-3 py-1 rounded-full mb-3">
                  <p className="text-emerald-400 font-bold">{exp.duration}</p>
                </div>
                <h3 className="mb-3 font-bold text-2xl text-white">{exp.role}</h3>
                <p className="text-md font-medium leading-snug tracking-wide text-emerald-300 mb-4">{exp.company}</p>
                <ul className="space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;