import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, FileText, CheckSquare, AlertTriangle, TrendingUp, PieChart, Shield, Calendar, X } from 'lucide-react';

const OperationalStandards = () => {
  const [activeTab, setActiveTab] = useState('standards');
  const [selectedStandard, setSelectedStandard] = useState(null);

  const tabs = [
    { id: 'standards', label: 'FnL Standards', icon: BarChart2 },
    { id: 'reporting', label: 'Reporting', icon: FileText },
    { id: 'auditing', label: 'Auditing', icon: CheckSquare },
    { id: 'risk', label: 'Risk Mgmt', icon: AlertTriangle },
  ];

  const standardsContent = {
    'Accounting': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Accounting Practices in AIESEC</h4>

        <div>
          <h5 className="font-bold text-blue-600 mb-2">Core Practices</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>Double Entry Bookkeeping:</strong> Every transaction recorded twice (debit/credit)</li>
            <li><strong>Accrual Accounting:</strong> Revenue/expenses recognized when earned/incurred</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-blue-600 mb-2">Global Standards</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Align with local laws & AIESEC's global reporting</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-blue-600 mb-2">Monthly & Annual Tasks</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Reconcile accounts & generate trial balances monthly</li>
            <li>Generate monthly general ledgers</li>
            <li>Annual review of the chart of accounts</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-blue-600 mb-2">Reporting Structure</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Follow Global Chart of Accounts for global consistency</li>
            <li>LCs align with MC-provided charts for easy consolidation</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-blue-600 mb-2">Receivables Management</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Defined credit policy</li>
            <li>Structured receivables follow-up</li>
            <li>Regular routine with accountants (if applicable)</li>
          </ul>
        </div>
      </div>
    ),
    'Money Management': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-800">Money Management in AIESEC</h4>
        <p className="text-gray-600 italic">To better understand financial literacy, we can look at five key concepts.</p>

        <div>
          <h5 className="font-bold text-green-600 mb-2">5 Key Concepts</h5>
          <ul className="list-none space-y-2 text-gray-600">
            <li className="flex items-center"><span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded mr-3 text-sm">01</span> <strong>Budgeting</strong></li>
            <li className="flex items-center"><span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded mr-3 text-sm">02</span> <strong>Saving</strong></li>
            <li className="flex items-center"><span className="bg-yellow-100 text-yellow-700 font-bold px-2 py-1 rounded mr-3 text-sm">03</span> <strong>Investing</strong></li>
            <li className="flex items-center"><span className="bg-red-100 text-red-700 font-bold px-2 py-1 rounded mr-3 text-sm">04</span> <strong>Borrowing</strong></li>
            <li className="flex items-center"><span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded mr-3 text-sm">05</span> <strong>Planning for the Future</strong></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-green-600 mb-2">Setting Financial Goals (SMART)</h5>
          <p className="text-gray-600 mb-3 text-sm">Goals create accountability and motivation. Once you assess your current financial situation, you can write a SMART goal to achieve your ambitions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
              <strong className="block text-green-700 mb-1">Specific</strong>
              <span className="text-gray-600">What exactly are you trying to achieve?</span>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
              <strong className="block text-yellow-700 mb-1">Measurable</strong>
              <span className="text-gray-600">How will you know when you’ve achieved your goal?</span>
            </div>
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
              <strong className="block text-red-700 mb-1">Attainable</strong>
              <span className="text-gray-600">Is this goal realistically achievable?</span>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
              <strong className="block text-yellow-700 mb-1">Relevant</strong>
              <span className="text-gray-600">How is this goal helpful to you?</span>
            </div>
            <div className="p-3 bg-green-50 border border-green-100 rounded-lg sm:col-span-2">
              <strong className="block text-green-700 mb-1">Timely</strong>
              <span className="text-gray-600">When will you achieve this goal?</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-green-600 mb-2">Benefits of Financial Literacy</h5>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded mt-1 min-w-[140px] text-center mr-3">Financial Empowerment</div>
              <p className="text-sm text-gray-600">Financial knowledge and tools allow you to be in charge of your financial situation and make informed decisions. These skills help create disciplined spending habits.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-red-500 text-white font-bold text-xs px-2 py-1 rounded mt-1 min-w-[140px] text-center mr-3">Security</div>
              <p className="text-sm text-gray-600">Responsible budgeting and saving can give you the confidence to face unexpected financial expenses.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-500 text-white font-bold text-xs px-2 py-1 rounded mt-1 min-w-[140px] text-center mr-3">Goal Achievement</div>
              <p className="text-sm text-gray-600">Short-term and long-term goals are great ways to take steps towards achieving your financial ambitions.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-red-500 text-white font-bold text-xs px-2 py-1 rounded mt-1 min-w-[140px] text-center mr-3">Stress Reduction</div>
              <p className="text-sm text-gray-600">Money can be a cause of anxiety and stress. Having financial skills helps ease that stress and gives you confidence in your decisions.</p>
            </div>
            <div className="flex items-start">
              <div className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded mt-1 min-w-[140px] text-center mr-3">Wealth Accumulation</div>
              <p className="text-sm text-gray-600">Saving and investing allows you to have a more financially secure future and can lead to early retirement.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    'Reporting': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Key Financial Reporting Requirements</h4>

        <div>
          <h5 className="font-bold text-purple-600 mb-2">Reporting Frequency & Responsibilities</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>Monthly & Year-to-Date Reports:</strong> MC & LC financial statements (P&L, balance sheet, cash flow).</li>
            <li><strong>Bi-weekly:</strong> MC & LC budget execution reports shared within respective executive bodies.</li>
            <li><strong>Quarterly:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>MC reports to LCPs</li>
                <li>LC reports to Local Plenary</li>
              </ul>
            </li>
            <li><strong>Annual Reports:</strong> Financial & sustainability reports stored physically/virtually.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-purple-600 mb-2">Other Requirements</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>Monthly GFB Survey:</strong> Must be duly submitted.</li>
            <li>Reports must be prepared, presented, and stored regularly to ensure compliance and data availability.</li>
          </ul>
        </div>
      </div>
    ),
    'Auditing': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Auditing Standards</h4>

        <div>
          <h5 className="font-bold text-teal-600 mb-2">External Audit Report</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Covers all financial operations under legal registration.</li>
            <li>Must be stored securely, physically or digitally.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-teal-600 mb-2">Internal Auditor (MC)</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Oversees finance and governance audits on behalf of the national plenary.</li>
            <li>Can be a qualified alumni.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-teal-600 mb-2">Internal Financial Audits</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>LCs:</strong> Quarterly, managed by MC or independent body.</li>
            <li><strong>MCs:</strong> Every semester by an independent internal auditor.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-teal-600 mb-2">Internal Control Testing</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Procedures must align with the AIESEC Financial Manual.</li>
            <li>Effectiveness evaluated via test of controls.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-teal-600 mb-2">Legal Audit (MCs & LCs)</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Ensures legal documents/contracts are in place.</li>
            <li>Conducted using structured internal audit procedures.</li>
          </ul>
        </div>
      </div>
    ),
    'Investing': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Investing in AIESEC</h4>
        <p className="text-gray-600 italic">Investing in AIESEC is about responsible financial foresight. While we are not a profit-driven organization, managing surplus funds through ethical, low-risk investment vehicles enhances our sustainability and resilience.</p>

        <div>
          <h5 className="font-bold text-indigo-600 mb-2">Guiding Principles</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>Ethical Alignment:</strong> Investments must reflect AIESEC’s values — avoiding partnerships with tobacco, gambling, or politically misaligned entities.</li>
            <li><strong>Risk Management:</strong> Investments should prioritize security over high return. Approved instruments include government bonds, fixed deposits, or interest-bearing savings accounts.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-indigo-600 mb-2">Approval Process</h5>
          <p className="text-gray-600 mb-1">All investment decisions must be:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Proposed by LCVP F&L or MCVP F&L</li>
            <li>Reviewed by relevant oversight bodies (e.g., Local Plenary or National Board)</li>
            <li>Documented with rationale and expected ROI</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-indigo-600 mb-2">Tracking & Reporting</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Maintain a monthly investment tracker.</li>
            <li>Include investment updates in quarterly and annual reports.</li>
            <li>Assess ROI vs. inflation to gauge effectiveness.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-indigo-600 mb-2">Capacity Building</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Encourage LC F&L teams to conduct basic investment literacy sessions for EB and members to promote long-term financial thinking within the entity.</li>
          </ul>
        </div>
      </div>
    ),
    'Risk Mgmt': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Risk Management</h4>
        <p className="text-gray-600 italic">Risk management within AIESEC ensures that all financial and legal decisions are backed by proactive thinking, contingency planning, and compliance awareness. It’s not just about avoiding problems — it’s about being prepared for them.</p>

        <div>
          <h5 className="font-bold text-red-600 mb-2">Types of Risks in AIESEC Operations</h5>

          <div className="mb-2">
            <strong className="block text-gray-800">Financial Risk</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Budget overuse or misallocation</li>
              <li>Cash flow shortages</li>
              <li>Fund mismanagement or fraud</li>
            </ul>
          </div>

          <div className="mb-2">
            <strong className="block text-gray-800">Legal Risk</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Non-compliance with local laws</li>
              <li>Invalid contracts or unauthorized signatories</li>
              <li>Intellectual property misuse</li>
            </ul>
          </div>

          <div className="mb-2">
            <strong className="block text-gray-800">Operational Risk</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Loss of financial data</li>
              <li>Staff turnover in F&L roles</li>
              <li>Miscommunication during transitions</li>
            </ul>
          </div>

          <div>
            <strong className="block text-gray-800">Reputational Risk</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Poor financial transparency</li>
              <li>Missed or misreported audits</li>
              <li>Breaches in partner agreements</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-red-600 mb-2">AIESEC's Risk Management Practices</h5>

          <div className="mb-2">
            <strong className="block text-gray-800">Internal Controls</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Segregation of duties between approver, spender, and recorder</li>
              <li>Dual signatory policy for bank transactions</li>
              <li>Budget caps for each functional department</li>
            </ul>
          </div>

          <div className="mb-2">
            <strong className="block text-gray-800">Contingency Planning</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Emergency fund allocations in every annual budget</li>
              <li>Crisis protocols for events (e.g., refund procedures, insurance coverage)</li>
            </ul>
          </div>

          <div>
            <strong className="block text-gray-800">Audit Follow-Ups</strong>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Action plans for every audit finding</li>
              <li>Time-bound resolutions and accountability tracking</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    'Legalities': (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-800">Legalities in AIESEC</h4>
        <p className="text-gray-600 italic">The legal framework within AIESEC ensures that all entities operate within the boundaries of national and international law, as well as the organization's internal policies.</p>

        <div>
          <h5 className="font-bold text-gray-700 mb-2">Key Legal Requirements</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>Registration & Licensing:</strong> Every LC and MC must operate under a valid legal entity and ensure annual revalidation as required by local laws.</li>
            <li><strong>Contracts & Agreements:</strong> All external engagements — MoUs, partnership contracts, venue bookings, etc. — must be legally vetted and signed only by authorized signatories.</li>
            <li><strong>Data Protection & Privacy:</strong> Personal data collected through EPs, partners, and members must comply with data privacy laws (e.g., GDPR, if applicable).</li>
            <li><strong>Labor & Volunteer Law:</strong> Roles and working conditions must follow regulations related to volunteer work and internships.</li>
            <li><strong>Legal Documentation Storage:</strong> All official contracts, licenses, and legal audits must be stored both physically and digitally for transparency and accessibility.</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-gray-700 mb-2">AIESEC Practices</h5>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Use of standardized legal templates shared by MC Legal/Finance.</li>
            <li>Mandatory quarterly legal audits (internal or external).</li>
            <li>Legal approval protocols before launching new projects or entering collaborations.</li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Modal for Standards Content */}
        <AnimatePresence>
          {selectedStandard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedStandard(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedStandard(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{selectedStandard}</h3>
                <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                  {standardsContent[selectedStandard] || 'Content coming soon...'}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                      { title: 'Money Management', desc: 'Planning money usage for the term.', icon: PieChart, color: 'text-green-500', bg: 'bg-green-50' },
                      { title: 'Reporting', desc: 'Presenting financial activities.', icon: BarChart2, color: 'text-purple-500', bg: 'bg-purple-50' },
                      { title: 'Investing', desc: 'Creating future value.', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-50' },
                      { title: 'Auditing', desc: 'Verifying financial records.', icon: CheckSquare, color: 'text-teal-500', bg: 'bg-teal-50' },
                      { title: 'Risk Mgmt', desc: 'Managing uncertainties & risks.', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
                      { title: 'Legalities', desc: 'Ensuring legal compliance.', icon: Shield, color: 'text-gray-500', bg: 'bg-gray-50' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedStandard(item.title)}
                        className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
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

export default OperationalStandards;
