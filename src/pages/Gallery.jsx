import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Folder } from 'lucide-react';

const lcData = [
  {
    id: 'faisalabad',
    name: 'LC Faisalabad',
    folder: 'Bilal - FSD',
    images: ['YSF + EB + Sem 2.jpeg', 'Sem 2 .jpeg']
  },
  {
    id: 'lahore',
    name: 'LC Lahore',
    folder: 'Fatima - Lahore',
    images: ['eb pic.jfif', 'fav team.jfif', 'fnl team.jfif']
  },
  {
    id: 'karachi',
    name: 'LC Karachi',
    folder: 'Fizza- Khi',
    images: ['EB pic.jpeg', 'one close 2 heart.jpeg', 'sem 1.jpeg', 'sem 2.jpeg']
  },
  {
    id: 'nust',
    name: 'LC NUST',
    folder: 'Haris - NUST',
    images: ['EBRahbar.jpeg', 'sem1-aitebaar.jpeg', 'sen2-bankchor.jpeg']
  },
  {
    id: 'islamabad',
    name: 'LC Islamabad',
    folder: 'Shaheera - ISB',
    images: ['EB.jpeg', 'Fav team.jpeg', 'Semester 1.jpeg', 'semester 2.jpeg']
  },
  {
    id: 'iba',
    name: 'LC IBA',
    folder: 'Wahaj - IBA',
    images: [] // Currently empty/missing in directory
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLC, setSelectedLC] = useState(null);

  const getImageUrl = (folder, image) => {
    return `/Wajahat lakhani/${folder}/${image}`;
  };

  return (
    <Layout>
      <section className="bg-gray-50 min-h-screen py-20 relative">
        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-gray-900 mb-4"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Visual highlights and key moments from our Local Committees.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedLC ? (
              /* LC Selection View */
              <motion.div
                key="lc-grid"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {lcData.map((lc, index) => (
                  <motion.div
                    key={lc.id}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    onClick={() => setSelectedLC(lc)}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-100"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative flex items-center justify-center overflow-hidden">
                      {lc.images.length > 0 ? (
                        <>
                          <img 
                            src={getImageUrl(lc.folder, lc.images[0])} 
                            alt={lc.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </>
                      ) : (
                        <Folder className="w-16 h-16 text-white/50" />
                      )}
                      <h3 className="text-2xl font-bold text-white relative z-10 shadow-black drop-shadow-md">{lc.name}</h3>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">{lc.images.length} Photos</span>
                        <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                          View Gallery <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* LC Detail View */
              <motion.div
                key="lc-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="mb-8 flex items-center">
                  <button
                    onClick={() => setSelectedLC(null)}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-semibold group"
                  >
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3 group-hover:shadow-md transition-shadow">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    Back to LCs
                  </button>
                  <h2 className="text-3xl font-bold text-gray-900 ml-6 border-l-4 border-blue-500 pl-4">
                    {selectedLC.name}
                  </h2>
                </div>

                {selectedLC.images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedLC.images.map((imgName, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4, scale: 1.02 }}
                        onClick={() => setSelectedImage(getImageUrl(selectedLC.folder, imgName))}
                        className="aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer bg-gray-200"
                      >
                        <img 
                          src={getImageUrl(selectedLC.folder, imgName)} 
                          alt={`${selectedLC.name} ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500 font-medium">No photos available for this LC yet.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;

