import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Computer Science and Engineering',
    institution: 'The Maharaja Sayajirao University of Baroda',
    duration: '2022-2026',
    grade: 'CGPA: 7.84'
  },
  {
    degree: 'High School (Major in Mathematics) GHSEB',
    institution: 'Shree Swaminarayan Gurukul Vidyalaya',
    duration: '2021-2022',
    grade: 'Percentage: 86.33%'
  },
  {
    degree: 'Secondary School (Major in Science)',
    institution: 'Shree Swaminarayan Gurukul Vidyalaya',
    duration: '2020-2021',
    grade: 'Percentage: 84.30%'
  }
];

const Education = () => {
  return (
    <div
      name="education"
      className="w-full bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 py-4"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-emerald-400">
            Education
          </p>
        </div>
        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-[#112240]/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-emerald-400/10 hover:border-emerald-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-emerald-400 mt-1">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded text-sm font-medium">
                    {edu.duration}
                  </span>
                  <p className="mt-2 text-gray-400">{edu.grade}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
