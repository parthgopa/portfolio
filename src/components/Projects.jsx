import React from 'react';
// import Project1 from '../assets/images/project1.png'; // Add project images
// import Project2 from '../assets/images/project2.png';
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "AI-Based Adoptive Learning Portal",
        // image: Project1,
        description: "A cutting-edge educational platform that empowers both learners and tutors with AI-driven features like lesson planning, summarization, and exercise generation.",
        techStack: ["React JS", "Python", "Artificial Intelligence", "MongoDB"],
        liveDemo: "https://www.merishiksha.com",
        github: "https://github.com/parthgopa/MeriShiksha"
    },
    {
        title: "AI Tool for Company Secretary",
        // image: Project2,
        description: "An AI-powered tool streamlining critical workflows for Company Secretaries with modules for compliance calendar, secretarial audit,reply to notices, and regulatory updates.",
        techStack: ["React JS", "AI API Integration", "Prompts Engineering", "AI Chatbot"],
        liveDemo: "https://www.ai4cs.in",
        github: "https://github.com/parthgopa/ai4cs2"
    },
     {
        title: "AI-Based Health Analysis",
        // image: Project3,
        description: "A health analysis tool using Python that analyzes facial features frame by frame through OpenCV and Google's Gemini AI, solving real-world lab testing problems at reduced costs.",
        techStack: ["Python", "OpenCV", "NumPy", "Google Gemini AI"],
        liveDemo: "#",
        github: "#"
    }
];

const Projects = () => {
  return (
    <div name='projects' className='w-full text-gray-300 bg-gradient-to-b from-[#112240] to-[#0a192f] py-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-400'>
            Projects I've Built
          </p>
        </div>

        {/* Projects container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="shadow-lg shadow-[#040c16] rounded-xl overflow-hidden bg-[#112240] hover:shadow-emerald-500/20 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-28 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 flex items-center justify-center border-b border-emerald-400/20">
                <h3 className="text-2xl font-bold text-emerald-400 text-center">{project.title}</h3>
              </div>
              
              <div className="p-6 bg-[#0a192f] flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full text-center rounded-lg px-4 py-3 bg-white text-[#0a192f] font-medium hover:bg-gray-100 transition-colors duration-300">
                      Live Demo
                    </button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full text-center rounded-lg px-4 py-3 bg-transparent border-2 border-emerald-400 text-emerald-400 font-medium hover:bg-emerald-400/10 transition-colors duration-300">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;