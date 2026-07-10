import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText } from 'lucide-react';

import { glossaryTerms } from '../data/glossaryData';

const categories = ['All', 'Exchange', 'Accounting', 'Finance', 'Legal', 'Governance', 'Audit'];

const getCategoryColor = (cat) => {
  switch (cat) {
    case 'Exchange': return 'bg-orange-100 text-orange-700';
    case 'Accounting': return 'bg-blue-100 text-blue-700';
    case 'Finance': return 'bg-green-100 text-green-700';
    case 'Legal': return 'bg-red-100 text-red-700';
    case 'Governance': return 'bg-purple-100 text-purple-700';
    case 'Audit': return 'bg-yellow-100 text-yellow-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.def.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="page-container">
          <PageHeader
            title="FnL"
            highlight="Glossary"
            description="The language of AIESEC Finance & Legal."
          />

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search terms..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-aiesec-blue focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat
                      ? 'bg-aiesec-blue text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dictionary List */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200/60 overflow-hidden">
            <div className="divide-y divide-gray-100">
              <AnimatePresence>
                {filteredTerms.map((item) => (
                  <motion.div
                    layout
                    key={item.term}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 sm:p-8 hover:bg-gray-50/50 transition-colors flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
                  >
                    <div className="md:w-1/3 shrink-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-aiesec-blue transition-colors">
                          {item.term}
                        </h3>
                      </div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.def}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-xl">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Glossary;
