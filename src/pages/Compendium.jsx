import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Shield, Users, FileText, Globe, Scale } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon className="w-24 h-24 text-aiesec-blue" />
    </div>
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aiesec-blue group-hover:text-white transition-colors duration-300">
      <Icon className="w-7 h-7 text-aiesec-blue group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed relative z-10">{desc}</p>
  </motion.div>
);

const Compendium = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          {/* Hero */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-blue-100 text-aiesec-blue text-sm font-bold tracking-wide uppercase mb-4"
            >
              The Backbone
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
            >
              National <span className="text-gradient-brand">Compendium</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              The comprehensive legal and procedural reference document that outlines how AIESEC functions structurally and financially.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-10 rounded-bl-full" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What does it cover?</h2>
                <ul className="space-y-6">
                  {[
                    { text: 'Responsibilities of MC and LCs', icon: Users },
                    { text: 'Standards, ethical guidelines, and procedures', icon: FileText },
                    { text: 'Alignment with AIESEC International’s Constitution', icon: Globe },
                    { text: 'Financial & Legal mandates', icon: Scale }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-aiesec-blue">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => window.open('/National Compendium - AIESEC in Pakistan (2).pdf', '_blank')}
            >
              <div className="absolute inset-0 bg-gradient-brand rounded-3xl transform rotate-3 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/compendium_cover_picture.png"
                    alt="National Compendium Cover"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <span className="text-white/80 text-sm font-bold uppercase tracking-wider mb-2">Click to View</span>
                    <h3 className="text-white text-2xl font-bold">National Compendium</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why is it important? Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why is it <span className="text-aiesec-blue">Crucial?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Uniformity', desc: 'Ensures fair practice across all LCs.', icon: BookOpen },
                { title: 'Reference', desc: 'Guide for audits, disputes, and transitions.', icon: CheckCircle },
                { title: 'Protection', desc: 'Protects the brand, legality, and integrity.', icon: Shield },
                { title: 'Training', desc: 'Educates new members on policies.', icon: Users },
              ].map((item, index) => (
                <FeatureCard key={index} {...item} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Compendium;
