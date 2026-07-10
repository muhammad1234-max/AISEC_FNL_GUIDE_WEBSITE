import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, PieChart, ShieldCheck, Book, TrendingUp, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/bg1.jpg"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="page-container py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm"
            >
              Finance & Legal Guide 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]"
            >
              Mastering the <br />
              <span className="text-blue-400">
                Art of Finance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="text-lg md:text-xl text-blue-50/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Your comprehensive guide to navigating the financial and legal landscape of AIESEC with confidence and clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/fundamentals" className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-200 flex-center shadow-sm">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/tools" className="px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
                Explore Tools
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Equation Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="page-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">The FnL Equation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Understanding the four pillars that drive our organizational sustainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Accounting', desc: 'Recording what happens', icon: Book, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
              { title: 'Finance', desc: 'Managing the money', icon: TrendingUp, color: 'bg-green-500', shadow: 'shadow-green-200' },
              { title: 'Legalities', desc: 'Following the laws', icon: ShieldCheck, color: 'bg-red-500', shadow: 'shadow-red-200' },
              { title: 'Standards', desc: 'The Rulebook', icon: PieChart, color: 'bg-purple-500', shadow: 'shadow-purple-200' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="panel-featured card-hover group cursor-default"
              >
                <div className={`${item.color} w-12 h-12 rounded-xl flex-center mb-6 text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-24 bg-white">
        <div className="page-container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore the Guide</h2>
              <p className="text-gray-500">Deep dive into specific topics</p>
            </div>
            <Link to="/glossary" className="hidden md:flex text-aiesec-blue font-semibold items-center hover:underline">
              View Glossary <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'National Compendium', path: '/compendium', color: 'from-blue-600 to-blue-400', subtitle: 'Rules & Procedures', icon: Book },
              { title: 'Operational Standards', path: '/operations', color: 'from-purple-600 to-purple-400', subtitle: 'Reporting & Audits', icon: BarChart2 },
              { title: 'Governance & Legal', path: '/governance', color: 'from-teal-600 to-teal-400', subtitle: 'EFB, GFB & Frameworks', icon: ShieldCheck },
            ].map((item, index) => (
              <Link key={index} to={item.path} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] card-hover">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

                {/* Icon Background */}
                <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:opacity-30 transition-all duration-500 transform rotate-12 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-48 h-48 text-white" strokeWidth={1} />
                </div>

                {/* Abstract Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end relative z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-50 font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.subtitle}</p>
                    <div className="inline-flex items-center text-white font-semibold group-hover:underline decoration-2 underline-offset-4">
                      Explore Section <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
