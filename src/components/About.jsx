import React from "react";
// import ProfilePic from "../assets/images/profile-picture.jpg"; // Add your picture here
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-[#112240] to-[#0a192f] text-gray-300 py-2"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-10 w-full ">
        <div className="mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-emerald-400">
            About Me
          </h2>
        </div>
        
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-4 flex justify-center items-start">
            <div className="bg-[#112240]/60 p-6 rounded-lg border border-emerald-400/20 shadow-lg w-full">
              {/* Profile image container */}
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full overflow-hidden mb-6">
                {/* Replace with your image if available */}
                <img className="w-full h-full flex items-center justify-center text-white text-4xl font-bold" src="/image.jpg" alt="" />
              </div>
              <h3 className="text-center text-2xl font-bold text-white mb-2">Parth Gopani</h3>
              <p className="text-center text-emerald-400 mb-4">React JS & AI Developer</p>
            </div>
          </div>
          
          <div className="md:col-span-8 text-lg text-gray-300 leading-relaxed flex flex-col justify-center">
            <p>
              Hello! I'm a Computer Science and Engineering graduate from The Maharaja Sayajirao University of Baroda with a strong passion for AI and Web Development. I'm specialized in React JS, Flask, and the development of chatbots.
            </p>
            <br />
            <p>
              I'm currently working as a Software Developer Intern at SANRUSHA in North Carolina, where I've developed a subscription-based business model with PayPal payment integration. I'm passionate about leveraging AI solutions to address real-world problems and always keen to explore AI tools and technologies for innovative solution development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
