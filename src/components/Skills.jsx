import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTensorflow,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <img src="/ai.png" className="w-20 h-20" />, name: "AI" },
  { icon: <img src="/ml.png" className="w-20 h-20" />, name: "ML" },
  { icon: <img src="/brain.png" className="w-20 h-20" />, name: "Neural Networks" },
  { icon: <FaReact className="text-blue-400" size={50} />, name: "React" },
  { icon: <FaReact className="text-blue-400" size={50} />, name: "React Native" },
  { icon: <SiTensorflow className="text-red-500" size={50} />, name: "TensorFlow" },
  { icon: <SiJavascript className="text-yellow-400" size={50} />, name: "JavaScript" },
  { icon: <FaHtml5 className="text-orange-500" size={50} />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" size={50} />, name: "CSS3" },
  { icon: <FaPython className="text-yellow-500" size={50} />, name: "Python" },
  { icon: <FaPython className="text-blue-500" size={50} />, name: "Python (Flask)" },
  { icon: <SiMongodb className="text-green-600" size={50} />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-orange-600" size={50} />, name: "Git" },
  { icon: <FaGithub className="text-gray-400" size={50} />, name: "GitHub" },
  { icon: <img src="/project.png" className="w-20 h-20" />, name: "Project Management" },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-300 py-4"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-emerald-400">
            My Tech Stack
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 text-center py-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 rounded-lg bg-[#112240]/40 backdrop-blur-sm hover:shadow-emerald-500/20 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{skill.icon}</div>
              <p className="my-4">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
