import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, FileText, CheckSquare, AlertTriangle, TrendingUp, PieChart, Shield, Calendar } from 'lucide-react';

const Operations = () => {
  const [activeTab, setActiveTab] = useState('standards');

  const tabs = [
    { id: 'standards', label: 'FnL Standards', icon: BarChart2 },
    { id: 'reporting', label: 'Reporting', icon: FileText },
    { id: 'auditing', label: 'Auditing', icon: CheckSquare },
    { id: 'risk', label: 'Risk Mgmt', icon: AlertTriangle },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase mb-4"
            >
              Excellence in Action
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-gray-900 mb-6"
            >
              Operational <span className="text-gradient-brand">Standards</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Executing finance with precision, transparency, and strategic foresight.
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-brand text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
            >
              {/* Subtle background graphic inside card */}
              <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                {activeTab === 'standards' && <BarChart2 className="w-96 h-96" />}
                {activeTab === 'reporting' && <FileText className="w-96 h-96" />}
                {activeTab === 'auditing' && <CheckSquare className="w-96 h-96" />}
                {activeTab === 'risk' && <AlertTriangle className="w-96 h-96" />}
              </div>

              {activeTab === 'standards' && (
                <div className="space-y-8 relative z-10">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">FnL Operational Standards</h2>
                    <p className="text-gray-500 mt-2">The 7 pillars of financial operations</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Accounting', desc: 'Recording & summarizing transactions.', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
                      { title: 'Budgeting', desc: 'Planning money usage for the term.', icon: PieChart, color: 'text-green-500', bg: 'bg-green-50' },
                      { title: 'Reporting', desc: 'Presenting financial activities.', icon: BarChart2, color: 'text-purple-500', bg: 'bg-purple-50' },
                      { title: 'Analysing', desc: 'Studying data for decisions.', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-50' },
                      { title: 'Investing', desc: 'Creating future value.', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-50' },
                      { title: 'Auditing', desc: 'Verifying accuracy.', icon: CheckSquare, color: 'text-teal-500', bg: 'bg-teal-50' },
                      { title: 'Risk Mgmt', desc: 'Minimizing legal/financial risks.', icon: Shield, color: 'text-red-500', bg: 'bg-red-50' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reporting' && (
                <div className="space-y-8 relative z-10">
                  <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Reporting Standards</h2>
                    <p className="text-gray-600 text-lg">
                      Enhancing transparency and accountability through regular, structured financial reporting.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-blue-500 rounded-lg text-white"><Calendar className="w-6 h-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900">Frequency & Deadlines</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          { label: 'Monthly & YTD', val: 'P&L, Balance Sheet, Cash Flow' },
                          { label: 'Bi-weekly', val: 'Internal Budget Execution' },
                          { label: 'Quarterly', val: 'MC to LCPs, LC to Plenary' },
                          { label: 'Annual', val: 'Financial & Sustainability Reports' }
                        ].map((li, i) => (
                          <li key={i} className="flex flex-col pb-3 border-b border-blue-100 last:border-0">
                            <span className="font-bold text-blue-900 text-sm">{li.label}</span>
                            <span className="text-gray-600">{li.val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg text-white"><CheckSquare className="w-6 h-6" /></div>
                        <h3 className="text-xl font-bold text-gray-900">Key Requirements</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          'Monthly Global Finance Board (GFB) Survey submission',
                          'Regular preparation, presentation, and storage',
                          'Ensuring compliance and data availability for audits',
                          'Transparency with all stakeholders'
                        ].map((req, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'auditing' && (
                <div className="space-y-8 relative z-10">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Auditing Standards</h2>
                    <p className="text-gray-500 mt-2">Verification, Accuracy, and Trust</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        Core Standards
                      </h3>
                      <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span>External audit must result in an <strong>unqualified report</strong>.</span>
                        </li>
                        <li className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span>Each MC must appoint an <strong>internal auditor</strong>.</span>
                        </li>
                        <li className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span>Internal audits: LCs (Quarterly), MCs (Semi-annually).</span>
                        </li>
                        <li className="flex items-start p-3 bg-gray-50 rounded-lg">
                          <CheckSquare className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span>Legal internal audits conducted at least quarterly.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 hover:scale-[1.02] transition-transform">
                        <h4 className="font-bold text-purple-900 text-lg mb-2">External Audit Report</h4>
                        <p className="text-purple-700 text-sm leading-relaxed">
                          Covers all financial operations. Must be stored securely and presented to the plenary. Essential for legitimacy.
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 hover:scale-[1.02] transition-transform">
                        <h4 className="font-bold text-indigo-900 text-lg mb-2">Internal Auditor (MC)</h4>
                        <p className="text-indigo-700 text-sm leading-relaxed">
                          Oversees finance/governance audits. Can be a qualified alumni or external professional. Ensures ongoing compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="space-y-8 relative z-10">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Risk Management</h2>
                    <p className="text-gray-500 mt-2">Proactive protection of our entity</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border-l-4 border-red-500 shadow-lg rounded-r-2xl p-8">
                      <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                        Types of Risks
                      </h3>
                      <div className="space-y-4">
                        {[
                          { type: 'Financial', ex: 'Budget overuse, cash shortages, fraud' },
                          { type: 'Legal', ex: 'Non-compliance, invalid contracts' },
                          { type: 'Operational', ex: 'Data loss, staff turnover, system failure' },
                          { type: 'Reputational', ex: 'Poor transparency, missed audits, scandals' }
                        ].map((r, i) => (
                          <div key={i} className="flex justify-between items-start border-b border-gray-100 pb-3 last:border-0">
                            <strong className="text-gray-800">{r.type}</strong>
                            <span className="text-gray-500 text-sm text-right max-w-[60%]">{r.ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border-l-4 border-blue-500 shadow-lg rounded-r-2xl p-8">
                      <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center">
                        <Shield className="w-6 h-6 text-blue-500 mr-3" />
                        Management Practices
                      </h3>
                      <div className="space-y-4">
                        {[
                          { title: 'Internal Controls', desc: 'Segregation of duties, dual signatories.' },
                          { title: 'Contingency Planning', desc: 'Emergency funds, crisis protocols.' },
                          { title: 'Audit Follow-Ups', desc: 'Action plans, time-bound resolutions.' },
                          { title: 'Education', desc: 'Training members on risk awareness.' }
                        ].map((m, i) => (
                          <div key={i} className="bg-blue-50 rounded-xl p-4">
                            <strong className="text-blue-900 block mb-1">{m.title}</strong>
                            <span className="text-blue-700 text-sm">{m.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Operations;
