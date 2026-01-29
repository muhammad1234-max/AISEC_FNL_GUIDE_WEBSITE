import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, Scale, FileText, CheckSquare, Gavel, Briefcase, FileCheck, Shield, X, AlertCircle, Calendar, FolderOpen } from 'lucide-react';

const GovernanceAndLegal = () => {
  const [selectedStandard, setSelectedStandard] = useState(null);

  const efbContent = (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-3xl font-bold text-gray-900">EFB Audit Standards</h3>
        <p className="text-gray-600 mt-2">Comprehensive guide for Entity Finance Board audits and requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Required Documents */}
        <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
          <h4 className="flex items-center text-lg font-bold text-blue-800 mb-4">
            <FileText className="w-5 h-5 mr-2" /> Required Documents
          </h4>
          <ul className="space-y-2 text-blue-900/80 font-medium">
            <li className="flex items-start"><span className="mr-2">•</span> General Ledger</li>
            <li className="flex items-start"><span className="mr-2">•</span> Profit & Loss (Income Statement)</li>
            <li className="flex items-start"><span className="mr-2">•</span> Bank Statement</li>
            <li className="flex items-start"><span className="mr-2">•</span> Proofs of Transactions</li>
            <li className="flex items-start"><span className="mr-2">•</span> Extra Financial Notes (if needed)</li>
          </ul>
        </section>

        {/* Audit Deadlines */}
        <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h4 className="flex items-center text-lg font-bold text-red-800 mb-4">
            <Calendar className="w-5 h-5 mr-2" /> Audit Deadlines
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Early Bird</span>
              <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">27th of month</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600">Final Deadline</span>
              <span className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">29th of month</span>
            </div>
          </div>
        </section>
      </div>

      <div className="space-y-6">
        {/* Balance Sheet */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-purple-500 pl-3">Balance Sheet</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700 mb-2">Shows:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Assets</li>
                <li>Liabilities</li>
                <li>Equity (till date)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl flex flex-col justify-center">
              <span className="text-sm text-purple-600 font-semibold mb-1">Formula</span>
              <code className="text-lg font-mono text-purple-900">Equity = Assets − Liabilities</code>
            </div>
          </div>
        </section>

        {/* Bank Statement */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-500 pl-3">Bank Statement</h4>
          <p className="text-gray-600 mb-3">Includes all LC bank transactions.</p>
          <div className="bg-green-50 p-4 rounded-xl">
            <strong className="text-green-800 block mb-2">Highlight:</strong>
            <ul className="list-disc pl-5 text-green-700 space-y-1">
              <li>LC-related transactions</li>
              <li>Transactions within audit period</li>
            </ul>
          </div>
        </section>

        {/* General Ledger */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">General Ledger</h4>
          <p className="text-gray-600 mb-3">Lists totals per category (royalties, bank, etc.)</p>
          <div className="bg-blue-50 p-4 rounded-xl">
            <strong className="text-blue-800 block mb-2">Ensure:</strong>
            <ul className="list-disc pl-5 text-blue-700 space-y-1">
              <li>Ledger amount = Proof amount</li>
              <li>Ledger date = Proof date</li>
              <li>Highlight audit-period entries (recommended)</li>
            </ul>
          </div>
        </section>

        {/* Income Statement */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-yellow-500 pl-3">Income Statement (P/L)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700 mb-2">Records:</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Income</li>
                <li>Expenses</li>
                <li>Net profit/loss</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <span className="block text-sm font-bold text-gray-700">If blank:</span>
                <span className="text-sm text-gray-600">No external transactions</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <span className="block text-sm font-bold text-gray-700">Internal transactions:</span>
                <span className="text-sm text-gray-600">Mention in financial notes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proofs & Folders */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-3">Proofs</h4>
            <p className="text-gray-600 mb-3">Evidence of transactions (Receipts, Payment screenshots).</p>
            <div className="bg-indigo-50 p-3 rounded-lg text-indigo-800 text-sm font-medium">
              Amount and date must be clearly visible
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-pink-500 pl-3">Proof Folders</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><FolderOpen className="w-4 h-4 mr-2 text-pink-500" /> Folder name = GL head name</li>
              <li className="flex items-center"><FolderOpen className="w-4 h-4 mr-2 text-pink-500" /> Details match ledger entries</li>
              <li className="flex items-center"><FolderOpen className="w-4 h-4 mr-2 text-pink-500" /> Use same color coding</li>
            </ul>
          </section>
        </div>

        {/* Quick Checklist */}
        <section className="bg-green-900 text-white p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-4 flex items-center"><CheckSquare className="w-6 h-6 mr-2" /> Quick Audit Checklist</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['All documents attached', 'Amounts & dates match', 'Proofs clearly visible', 'Notes added where needed', 'Deadlines met'].map((item, i) => (
              <div key={i} className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2 shrink-0 text-xs">✓</div>
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const gfbContent = (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-3xl font-bold text-gray-900">Global Finance Board (GFB)</h3>
        <p className="text-gray-600 mt-2">
          The Global Finance Board (GFB) is AIESEC International’s highest financial governing body.
          It ensures that all entities (MCs and LCs worldwide) operate under the same global financial standards, ethics, and compliance framework.
        </p>
      </div>

      <div className="space-y-6">
        {/* Global Financial Governance */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-500 pl-3">Global Financial Governance</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Sets and updates Global Accounting Standards (GAS) and Financial Policies for all AIESEC entities.</li>
            <li>Ensures uniformity and compliance across all countries.</li>
          </ul>
        </section>

        {/* Oversight of Entity Performance */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">Oversight of Entity Performance</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Monitors the financial health of Member Committees (MCs) globally.</li>
            <li>Reviews financial reports and assesses risks within each national entity.</li>
          </ul>
        </section>

        {/* Approval of National Financial Policies */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-purple-500 pl-3">Approval of National Financial Policies</h4>
          <p className="text-gray-600">
            Reviews and ratifies national-level documents like National Compendiums, Financial Procedures, and Reserve Plans to ensure alignment with AIESEC International’s requirements.
          </p>
        </section>

        {/* Support and Education */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-yellow-500 pl-3">Support and Education</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Provides guidance, training, and frameworks to help MCs and LCs implement sound financial management practices.</li>
            <li>Shares best practices and tools for budgeting, accounting, and auditing.</li>
          </ul>
        </section>

        {/* Global Risk Management */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-red-500 pl-3">Global Risk Management</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Identifies and manages international financial risks, such as debts between entities or compliance issues.</li>
            <li>Ensures that global financial operations remain sustainable and transparent.</li>
          </ul>
        </section>

        {/* Strategic Decision-Making */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-3">Strategic Decision-Making</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Advises AIESEC International on financial sustainability strategies, global reserves, and long-term investment decisions.</li>
            <li>Supports the creation of policies that help AIESEC remain stable and compliant across all countries.</li>
          </ul>
        </section>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="bg-white min-h-screen py-20 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

        {/* Modal for EFB/GFB Details */}
        <AnimatePresence>
          {selectedStandard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
              onClick={() => setSelectedStandard(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-end z-10">
                  <button
                    onClick={() => setSelectedStandard(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                  {selectedStandard === 'efb' ? efbContent : gfbContent}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-aiesec-blue rotate-3"
            >
              <Gavel className="w-10 h-10" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
            >
              Governance & <span className="text-gradient-brand">Legal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The structural backbone ensuring oversight, compliance, and sustainability.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* EFB Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedStandard('efb')}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-40 h-40 text-white" />
              </div>
              <div className="flex items-center space-x-4 mb-8 relative z-10">
                <div className="p-4 bg-blue-500 rounded-2xl text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Entity Finance Board</h2>
                  <span className="text-blue-300 font-bold tracking-wider text-sm">EFB</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                The financial decision-making body within an AIESEC entity. Click to view comprehensive audit standards, requirements, and deadlines.
              </p>

              <div className="space-y-3 relative z-10">
                {[
                  'Required Documents',
                  'Financial Statements (P&L, Balance Sheet)',
                  'Proof Guidelines & Folders',
                  'Audit Deadlines & Checklist'
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative z-10 flex justify-center">
                <span className="inline-flex items-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-lg shadow-blue-900/20">
                  <FileText className="w-5 h-5 mr-2" />
                  View Audit Standards
                </span>
              </div>
            </motion.div>

            {/* GFB Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedStandard('gfb')}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-40 h-40 text-white" />
              </div>
              <div className="flex items-center space-x-4 mb-8 relative z-10">
                <div className="p-4 bg-green-500 rounded-2xl text-white shadow-lg">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Global Finance Board</h2>
                  <span className="text-green-400 font-bold tracking-wider text-sm">GFB</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10">
                AIESEC International’s highest financial governing body. Ensures global uniformity and compliance.
              </p>

              <div className="space-y-3 relative z-10">
                {[
                  'Global Financial Governance (GAS)',
                  'Oversight of Entity Performance',
                  'Approval of National Policies',
                  'Support and Education',
                  'Global Risk Management'
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 shrink-0"></div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative z-10 flex justify-center">
                <span className="inline-flex items-center px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-colors shadow-lg shadow-green-900/20">
                  <Globe className="w-5 h-5 mr-2" />
                  View GFB Details
                </span>
              </div>
            </motion.div>
          </div>

          {/* Legal Framework */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px]" />
              <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-12">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Scale className="w-10 h-10 text-blue-300" />
                </div>
                <h2 className="text-4xl font-bold">Legal Framework</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl font-bold text-blue-200 mb-8 border-b border-blue-700/50 pb-4 inline-block">Key Requirements</h3>
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="p-2 bg-blue-500/20 rounded-lg mr-4 h-fit">
                        <FileText className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <strong className="block text-lg text-white mb-1">Registration & Licensing</strong>
                        <span className="text-blue-100/80">Valid legal entity status with annual revalidation.</span>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="p-2 bg-blue-500/20 rounded-lg mr-4 h-fit">
                        <Briefcase className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <strong className="block text-lg text-white mb-1">Contracts</strong>
                        <span className="text-blue-100/80">Legally vetted and signed by authorized signatories only.</span>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="p-2 bg-blue-500/20 rounded-lg mr-4 h-fit">
                        <Shield className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <strong className="block text-lg text-white mb-1">Data Protection</strong>
                        <span className="text-blue-100/80">Full GDPR compliance for all personal data.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-200 mb-8 border-b border-blue-700/50 pb-4 inline-block">AIESEC Practices</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      'Use of standardized legal templates for all partnerships',
                      'Mandatory quarterly legal audits to ensure compliance',
                      'Strict legal approval protocols before new projects'
                    ].map((practice, i) => (
                      <div key={i} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <FileCheck className="w-6 h-6 text-green-400 mr-4 shrink-0" />
                        <span className="text-lg text-blue-50">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default GovernanceAndLegal;
