import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaNewspaper, FaTrophy, FaDownload, FaEye, FaTimes } from 'react-icons/fa';

const achievementsData = [
  {
    icon: <FaTrophy className="text-yellow-400" size={40} />,
    title: "SAP Innovation Marathon",
    description: "Out of 626 teams across Gujarat and Maharashtra, placed in top 30 at the SAP organized Innovation marathon.",
    // certificates: [
    //   "/certificates/sap-certificate1.jpg",  // Replace with actual paths when available
    //   "/certificates/sap-certificate2.jpg",
    //   "/certificates/sap-certificate3.jpg",
    //   "/certificates/sap-certificate4.jpg"
    // ],
    // type: "pdf"
  },
  {
    icon: <FaNewspaper className="text-blue-400" size={40} />,
    title: "Newspaper Publication - Divya Bhaskar",
    description: "Featured in \"Divya Bhaskar\" newspaper for Meri Shiksha project.",
    pdfUrl: "/DivyaBhaskar.pdf",  // Replace with actual path when available
    type: "newspaper"
  },
  {
    icon: <FaNewspaper className="text-emerald-400" size={40} />,
    title: "Newspaper Publication - Gujarat Samachar",
    description: "Featured in \"Gujarat Samachar\" newspaper for Meri Shiksha project.",
    pdfUrl: "/newspapers/gujarat-samachar.pdf",  // Replace with actual path when available
    type: "newspaper"
  }
];

const Achievements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  return (
    <div
      name="achievements"
      className="w-full bg-gradient-to-b from-[#112240] to-[#0a192f] text-gray-300 py-4 relative"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-10 w-full h-full">
        <div className='mb-10'>
          <h2 className="text-4xl font-bold inline border-b-4 border-emerald-400">
            Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#112240] to-[#0a192f]/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-400/20 hover:border-emerald-400/50 hover:shadow-emerald-500/10 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0a192f] p-4 rounded-lg shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
              
              {item.type === "pdf" && (
                <button 
                  onClick={() => openModal(item)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#0a192f] py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaEye /> View PDF
                </button>
              )}
              
              {item.type === "newspaper" && (
                <div className="flex gap-3">
                  <button 
                    onClick={() => openModal(item)}
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0a192f] py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <FaEye /> View
                  </button>
                  <a 
                    href={item.pdfUrl} 
                    download
                    className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-emerald-400 text-emerald-400 py-2 px-4 rounded-md hover:bg-emerald-400/10 transition-colors duration-300"
                  >
                    <FaDownload /> Download PDF
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificates or newspaper articles */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a192f] rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative">
            <div className="flex justify-between items-center p-4 border-b border-emerald-400/20">
              <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(90vh-100px)]">
              {selectedItem.type === "pdf" && selectedItem.certificates ? (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-white">Certificate Images</h4>
                    <p className="text-emerald-400 text-sm">{currentImageIndex + 1} of {selectedItem.certificates.length}</p>
                  </div>
                  <div className="relative">
                    <img 
                      src={selectedItem.certificates[currentImageIndex]} 
                      alt={`${selectedItem.title} - Certificate ${currentImageIndex + 1}`} 
                      className="w-full h-auto rounded-lg"
                    />
                    {selectedItem.certificates.length > 1 && (
                      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
                        <button 
                          onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedItem.certificates.length - 1 : prev - 1)}
                          className="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        >
                          ❮
                        </button>
                        <button 
                          onClick={() => setCurrentImageIndex(prev => prev === selectedItem.certificates.length - 1 ? 0 : prev + 1)}
                          className="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                        >
                          ❯
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center mt-4 gap-2">
                    {selectedItem.certificates.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-emerald-400' : 'bg-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
              ) : selectedItem.type === "newspaper" && selectedItem.pdfUrl ? (
                <div className="flex flex-col items-center">
                  <iframe
                    src={selectedItem.pdfUrl}
                    className="w-full h-[70vh] rounded-lg mb-4"
                    title={selectedItem.title}
                  />
                  <a 
                    href={selectedItem.pdfUrl} 
                    download
                    className="flex items-center justify-center gap-2 bg-white text-[#0a192f] py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <FaDownload /> Download PDF
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <p className="text-gray-300 mb-4">Preview not available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Achievements;
