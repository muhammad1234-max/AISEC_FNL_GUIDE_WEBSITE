import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Book, FileText, Globe, DollarSign, Shield } from 'lucide-react';

const glossaryTerms = [
  // Exchange Programs
  { term: 'iGV', def: 'Incoming Global Volunteer: Bringing international volunteers to work on local social projects.', category: 'Exchange' },
  { term: 'iGTa', def: 'Incoming Global Talent (Academic): International interns in academic/teaching roles.', category: 'Exchange' },
  { term: 'iGTe', def: 'Incoming Global Talent (Corporate): International interns in professional/business roles.', category: 'Exchange' },
  { term: 'oGV', def: 'Outgoing Global Volunteer: Sending local youth abroad for social volunteer experiences.', category: 'Exchange' },
  { term: 'oGTa', def: 'Outgoing Global Talent (Academic): Sending youth abroad for teaching internships.', category: 'Exchange' },
  { term: 'oGTe', def: 'Outgoing Global Talent (Corporate): Sending youth abroad for professional internships.', category: 'Exchange' },
  { term: 'ELDS', def: 'Exchange Leadership Development: Global exchange programs (iGV, iGT, oGV, oGT).', category: 'Exchange' },

  // Accounting Principles
  { term: 'Accrual Basis', def: 'Recording income/expenses when they occur, not when cash changes hands.', category: 'Accounting' },
  { term: 'Consistency Principle', def: 'Using the same accounting methods every term for fair comparison.', category: 'Accounting' },
  { term: 'Cost Principle', def: 'Recording assets at their original purchase price.', category: 'Accounting' },
  { term: 'Economic Entity', def: 'Keeping organization finances separate from personal finances.', category: 'Accounting' },
  { term: 'Full Disclosure', def: 'Sharing all important financial info in reports and audits.', category: 'Accounting' },
  { term: 'Going Concern', def: 'Assumption that the organization will continue operating in the future.', category: 'Accounting' },
  { term: 'Monetary Unit', def: 'Recording all transactions in a single, stable currency.', category: 'Accounting' },
  { term: 'Reliability Principle', def: 'Recording only transactions supported by verified proofs.', category: 'Accounting' },
  { term: 'Time Period', def: 'Reporting financial results for specific periods (monthly, yearly).', category: 'Accounting' },

  // Financial Terms
  { term: 'Assets', def: 'What AIESEC owns (cash, receivables, equipment).', category: 'Finance' },
  { term: 'Liabilities', def: 'What AIESEC owes (payables, debts).', category: 'Finance' },
  { term: 'Equity', def: 'Assets minus Liabilities.', category: 'Finance' },
  { term: 'Receivables', def: 'Money owed to AIESEC by others.', category: 'Finance' },
  { term: 'Payables', def: 'Money AIESEC owes to others.', category: 'Finance' },
  { term: 'General Ledger', def: 'Complete record of all financial transactions sorted by accounts.', category: 'Finance' },
  { term: 'Trial Balance', def: 'List of all account balances to check if debits equal credits.', category: 'Finance' },
  { term: 'Chart of Accounts', def: 'List of all accounts used to record transactions.', category: 'Finance' },
  { term: 'Budget Variance', def: 'Difference between planned budget and actual spending.', category: 'Finance' },
  { term: 'ROI', def: 'Return on Investment: (Net Profit / Total Cost) x 100.', category: 'Finance' },
  { term: 'moCR', def: 'Months of Cash Remaining: How long operations can last with current cash.', category: 'Finance' },
  { term: 'Liquidity Ratio', def: 'Ability to pay short-term debts (Current Assets / Current Liabilities).', category: 'Finance' },

  // Compliance & Governance
  { term: 'GDPR', def: 'General Data Protection Regulation: Laws protecting personal data privacy.', category: 'Legal' },
  { term: 'National Plenary', def: 'National meeting of all LCs to discuss strategy and performance.', category: 'Governance' },
  { term: 'Local Plenary', def: 'Local meeting of EB and members to review goals.', category: 'Governance' },
  { term: 'GFB Survey', def: 'Global Finance Benchmark Survey to track entity health.', category: 'Governance' },
  { term: 'Compendium', def: 'Legal/procedural reference for AIESEC operations.', category: 'Legal' },
  { term: 'Internal Audit', def: 'Financial review conducted within AIESEC by members.', category: 'Audit' },
  { term: 'External Audit', def: 'Financial review by an independent firm outside AIESEC.', category: 'Audit' },
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Exchange', 'Accounting', 'Finance', 'Legal', 'Governance', 'Audit'];

  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.def.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-gray-900 mb-4"
            >
              FnL <span className="text-gradient-brand">Glossary</span>
            </motion.h1>
            <p className="text-xl text-gray-600">The language of AIESEC Finance & Legal.</p>
          </div>

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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredTerms.map((item, index) => (
                <motion.div
                  layout
                  key={item.term}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aiesec-blue transition-colors">
                    {item.term}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.def}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
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
