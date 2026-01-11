import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Globe, Users, Scale, FileText, CheckSquare, Gavel, Briefcase, FileCheck, Shield } from 'lucide-react';

const Governance = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen py-20 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

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
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-40 h-40" />
              </div>
              <div className="flex items-center space-x-4 mb-8 relative z-10">
                <div className="p-4 bg-blue-500 rounded-2xl text-white shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Entity Finance Board</h2>
                  <span className="text-blue-500 font-bold tracking-wider text-sm">EFB</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed relative z-10">
                The financial decision-making body within an AIESEC entity. It oversees health, budgeting, and compliance.
              </p>

              <div className="space-y-3 relative z-10">
                {[
                  'Budget Approval & Ratification',
                  'Financial Oversight (Spending, Cash flow)',
                  'Policy Compliance (Compendium, GAS)',
                  'Debt & Reserve Management',
                  'Strategic Decision-Making'
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                    <CheckSquare className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* GFB Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
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

export default Governance;
