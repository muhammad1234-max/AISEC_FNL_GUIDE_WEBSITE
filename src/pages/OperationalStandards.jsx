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
    'Budgeting': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-800">Budgeting Standards</h4>
        <div>
          <h5 className="font-bold text-green-600 mb-2">Budgets</h5>
          <p className="text-gray-600 mb-2">
            A budget is a financial plan that estimates expected income and expenses for a specific period. Each portfolio or project in AIESEC (like iGV, Marketing, or BD) creates a budget before starting activities. It helps plan how much money will be earned (revenues) and spent (costs) — ensuring responsible use of funds and financial sustainability.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-green-600 mb-2">Budget Ratification</h5>
          <p className="text-gray-600 mb-2">
            Budget ratification means the formal approval of a budget by the Local Committee Executive Board or the MC before implementation. After the VP FnL prepares a budget for a term or project, it is shared with the EB for feedback and approval (ratification). Only after ratification can the budget be used officially — ensuring transparency and accountability.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-green-600 mb-2">Budget Variance</h5>
          <p className="text-gray-600 mb-2">
            Budget variance is the difference between the planned (budgeted) amount and the actual amount spent or earned. If a project planned Rs. 50,000 for marketing but spent Rs. 60,000, the variance is Rs. 10,000 (unfavorable). Variance analysis helps FnL and the EB understand why differences happened — for example, unexpected costs or savings — and make better decisions in the future.
          </p>
        </div>
      </div>
    ),
    'Analysis': (
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-800">Financial Analysis Framework</h4>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Ratios</h5>
          <p className="text-gray-600 mb-2">
            Ratios are numerical comparisons that show the relationship between two financial figures. They help measure the LC’s performance — like profitability, liquidity, and stability. For example, comparing income to expenses or assets to liabilities gives a quick view of how financially healthy the LC is.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Financial Ratios</h5>
          <p className="text-gray-600 mb-2">
            Financial ratios are specific calculations used to analyze an organization’s financial results, efficiency, and strength. FnL uses these ratios to evaluate how well the LC is managing its funds, budgeting, and performance — helping EBs make better financial decisions and plan improvements.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Gross Profit Margin</h5>
          <p className="text-gray-600 mb-2">
            The Gross Profit Margin shows how much profit AIESEC makes after covering direct costs of a project or exchange.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            Gross Profit Margin = (Revenue − Direct Costs) / Revenue × 100
          </div>
          <p className="text-gray-600">
            If AIESEC earned Rs. 100,000 from an exchange and spent Rs. 60,000 to run it, the margin is 40% — meaning 40% of revenue remained after basic costs.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Net Profit Margin</h5>
          <p className="text-gray-600 mb-2">
            The Net Profit Margin shows how much of the total revenue is left after all expenses (including admin, marketing, and operations).
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            Net Profit Margin = (Net Profit / Revenue) × 100
          </div>
          <p className="text-gray-600">
            It helps measure the LC’s overall financial efficiency — showing whether the entity is managing its total costs effectively.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Contribution Margin</h5>
          <p className="text-gray-600 mb-2">
            The Contribution Margin shows how much revenue is left after variable costs — money that “contributes” to covering fixed costs and profits.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            Contribution Margin = Revenue − Variable Costs
          </div>
          <p className="text-gray-600">
            It helps FnL analyze if a project or exchange is financially sustainable and how much it contributes to the LC’s fixed costs (like office rent or conference fees).
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">moCR</h5>
          <p className="text-gray-600 mb-2">
            moCR (Months of Cash Remaining) measures how long AIESEC can continue operating with the cash currently available.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            moCR = Average Available Cash / Monthly Expenses
          </div>
          <p className="text-gray-600">
            If the LC has Rs. 300,000 and spends Rs. 100,000 monthly, the moCR is 3 months — meaning AIESEC can operate for three months without new income. A healthy moCR ensures financial stability and continuity.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Liquidity Ratio</h5>
          <p className="text-gray-600 mb-2">
            The Liquidity Ratio shows how easily AIESEC can pay its short-term debts with its current assets.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            Liquidity Ratio = Current Assets / Current Liabilities
          </div>
          <p className="text-gray-600">
            If the ratio is above 1, AIESEC has enough resources to pay off its immediate obligations (like reimbursements or pending payments).
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Debt Ratio</h5>
          <p className="text-gray-600 mb-2">
            The Debt Ratio measures how much of AIESEC’s assets are financed by liabilities or borrowed funds.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg text-center font-mono text-blue-800 my-2 text-sm">
            Debt Ratio = Total Liabilities / Total Assets
          </div>
          <p className="text-gray-600">
            A higher debt ratio means more of the LC’s assets are funded through payables or debts — which can indicate financial risk if not managed properly.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Financial Analysis Framework</h5>
          <p className="text-gray-600 mb-2">
            A Financial Analysis Framework is a structured approach to evaluate an organization’s financial data and performance. FnL uses frameworks to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-2">
            <li>Review income, expenses, and budgets</li>
            <li>Analyze ratios and variances</li>
            <li>Identify risks, trends, and improvement areas</li>
          </ul>
          <p className="text-gray-600">
            This helps the EB make data-based decisions and maintain financial sustainability.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-blue-600 mb-2">Forecasting</h5>
          <p className="text-gray-600 mb-2">
            Forecasting is predicting future financial outcomes based on past trends and current data. FnL forecasts expected income (like exchange revenues or sponsorships) and expenses (like conference costs). It helps prepare realistic budgets, prevent deficits, and align the LC’s plans with achievable financial goals.
          </p>
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
    'Risk Management': (
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
                    <p className="text-gray-500 mt-2">The 8 pillars of financial operations</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Accounting', desc: 'Recording & summarizing transactions.', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
                      { title: 'Budgeting', desc: 'Planning & approving financial plans.', icon: PieChart, color: 'text-green-500', bg: 'bg-green-50' },
                      { title: 'Reporting', desc: 'Presenting financial activities.', icon: BarChart2, color: 'text-purple-500', bg: 'bg-purple-50' },
                      { title: 'Investing', desc: 'Creating future value.', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-50' },
                      { title: 'Auditing', desc: 'Verifying financial records.', icon: CheckSquare, color: 'text-teal-500', bg: 'bg-teal-50' },
                      { title: 'Risk Management', desc: 'Managing uncertainties & risks.', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
                      { title: 'Legalities', desc: 'Ensuring legal compliance.', icon: Shield, color: 'text-gray-500', bg: 'bg-gray-50' },
                      { title: 'Analysis', desc: 'Evaluating financial performance.', icon: PieChart, color: 'text-blue-500', bg: 'bg-blue-50' },
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
