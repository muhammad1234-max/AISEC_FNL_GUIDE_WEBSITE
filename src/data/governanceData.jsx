import React from 'react';
import { FileText, Calendar, FolderOpen, CheckSquare } from 'lucide-react';

export const efbContent = (
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
      <section className="standard-panel">
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
      <section className="standard-panel">
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
      <section className="standard-panel">
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
      <section className="standard-panel">
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
        <section className="standard-panel">
          <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-3">Proofs</h4>
          <p className="text-gray-600 mb-3">Evidence of transactions (Receipts, Payment screenshots).</p>
          <div className="bg-indigo-50 p-3 rounded-lg text-indigo-800 text-sm font-medium">
            Amount and date must be clearly visible
          </div>
        </section>

        <section className="standard-panel">
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
              <div className="w-5 h-5 rounded-full bg-green-500 flex-center mr-2 shrink-0 text-xs">✓</div>
              <span className="font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export const gfbContent = (
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
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-green-500 pl-3">Global Financial Governance</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Sets and updates Global Accounting Standards (GAS) and Financial Policies for all AIESEC entities.</li>
          <li>Ensures uniformity and compliance across all countries.</li>
        </ul>
      </section>

      {/* Oversight of Entity Performance */}
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-blue-500 pl-3">Oversight of Entity Performance</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Monitors the financial health of Member Committees (MCs) globally.</li>
          <li>Reviews financial reports and assesses risks within each national entity.</li>
        </ul>
      </section>

      {/* Approval of National Financial Policies */}
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-purple-500 pl-3">Approval of National Financial Policies</h4>
        <p className="text-gray-600">
          Reviews and ratifies national-level documents like National Compendiums, Financial Procedures, and Reserve Plans to ensure alignment with AIESEC International’s requirements.
        </p>
      </section>

      {/* Support and Education */}
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-yellow-500 pl-3">Support and Education</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Provides guidance, training, and frameworks to help MCs and LCs implement sound financial management practices.</li>
          <li>Shares best practices and tools for budgeting, accounting, and auditing.</li>
        </ul>
      </section>

      {/* Global Risk Management */}
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-red-500 pl-3">Global Risk Management</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Identifies and manages international financial risks, such as debts between entities or compliance issues.</li>
          <li>Ensures that global financial operations remain sustainable and transparent.</li>
        </ul>
      </section>

      {/* Strategic Decision-Making */}
      <section className="standard-panel">
        <h4 className="text-xl font-bold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-3">Strategic Decision-Making</h4>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Advises AIESEC International on financial sustainability strategies, global reserves, and long-term investment decisions.</li>
          <li>Supports the creation of policies that help AIESEC remain stable and compliant across all countries.</li>
        </ul>
      </section>
    </div>
  </div>
);
