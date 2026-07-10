import React from 'react';

export const standardsContent = {
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
