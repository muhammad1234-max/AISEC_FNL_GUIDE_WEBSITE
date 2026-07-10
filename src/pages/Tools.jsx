import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Globe, FileText, CheckCircle, Server, Cloud } from 'lucide-react';

const Tools = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-gray-900 mb-4"
            >
              Financial <span className="text-gradient-brand">Tools</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The digital platforms that power AIESEC's financial management, reporting, and transparency.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Odoo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 card-hover"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-brand"></div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-purple-100 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <Server className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Odoo</h2>
                    <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full mt-1">
                      Official Global Software
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  AIESEC’s official bookkeeping and financial management software, used globally across entities to record, track, and report financial transactions. It ensures global standardization and compliance.
                </p>

                <div className="space-y-4">
                  {[
                    { title: 'Bookkeeping & Accounting', desc: 'Record incomes, expenses with digital proofs (invoices/receipts).' },
                    { title: 'Financial Reporting', desc: 'Auto-generates Trial Balance, P&L, and Balance Sheets.' },
                    { title: 'Budget Management', desc: 'Tracks budgeted vs. actual spending to identify variances.' },
                    { title: 'Transparency', desc: 'Centralized data accessible by EFB and GFB for auditing.' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex items-start p-3 rounded-xl hover:bg-purple-50 transition-colors"
                    >
                      <CheckCircle className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Wave Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 card-hover"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-teal-500"></div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-teal-100 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <Cloud className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Wave</h2>
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full mt-1">
                      Alternative / Local
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  An online bookkeeping and accounting software used by some entities as an alternative or supplementary tool. It is cloud-based, user-friendly, and great for smaller LCs.
                </p>

                <div className="space-y-4">
                  {[
                    { title: 'Transaction Recording', desc: 'Simple interface to record incomes, expenses, and invoices.' },
                    { title: 'Auto-Reporting', desc: 'Produces Income Statements and Balance Sheets instantly.' },
                    { title: 'Proof Documentation', desc: 'Attach receipts directly to transactions for accountability.' },
                    { title: 'Accessibility', desc: 'Cloud-based platform accessible from anywhere for remote ops.' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex items-start p-3 rounded-xl hover:bg-teal-50 transition-colors"
                    >
                      <CheckCircle className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
