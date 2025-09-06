import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-[#112240] to-[#0a192f] flex justify-center items-center p-4 py-20"
    >
      <motion.div
        className="max-w-[800px] w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-emerald-400 text-gray-300">
            Contact Me
          </h2>
        </div>
        
        <div className="bg-[#0a192f]/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-emerald-400/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-full">
                  <FaPhone className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Phone</h3>
                  <a href="tel:+918469847060" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    +91-8469847060
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-full">
                  <FaEnvelope className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Email</h3>
                  <a href="mailto:bdgopani3@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    bdgopani3@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Location</h3>
                  <p className="text-emerald-400">
                    Vadodara, Surat.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-full">
                  <FaLinkedin className="text-emerald-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/parth-gopani-89918253" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    linkedin.com/in/parth-gopani-89918253
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-[#112240]/50 rounded-lg p-6 border border-emerald-400/10">
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-4">
                Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to discussing new projects and ideas.  
              </p>
              <div className="flex gap-4 mt-6">
                <a 
                  href="mailto:bdgopani3@gmail.com" 
                  className="bg-white text-[#0a192f] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium flex-1 text-center"
                >
                  Email Me
                </a>
                <a 
                  href="tel:+918469847060" 
                  className="bg-transparent border-2 border-emerald-400 text-emerald-400 py-2 px-6 rounded-md hover:bg-emerald-400/10 transition-colors duration-300 font-medium flex-1 text-center"
                >
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
     </div>
  );
};

export default Contact;
