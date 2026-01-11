import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Book, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

const Section = ({ title, children, delay, icon: Icon, colorClass }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8 card-hover relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
      <Icon className={`w-32 h-32 ${colorClass}`} />
    </div>

    <div className="flex items-center space-x-4 mb-6 relative z-10">
      <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-300`}>
        <Icon className={`w-8 h-8 ${colorClass}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>

    <div className="text-gray-600 space-y-4 relative z-10 leading-relaxed text-lg">{children}</div>
  </motion.div>
);

const Fundamentals = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-gray-900 mb-4"
            >
              Core <span className="text-gradient-brand">Fundamentals</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The building blocks of Finance & Legal in AIESEC
            </motion.p>
          </div>

          <Section title="What is Accounting?" delay={0.1} icon={Book} colorClass="text-blue-500">
            <p>
              Accounting is like keeping a record of all the money a person or a business earns and spends — just like keeping track of your personal expenses in a diary.
            </p>
            <p>
              It helps you understand where your money is going, how your business is doing, and what decisions to make next.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-6">
              <span className="font-bold text-blue-900 block mb-1">Key Concept</span>
              <span className="text-blue-800">Accounting = Recording what happens.</span>
            </div>
          </Section>

          <Section title="What is Finance?" delay={0.2} icon={TrendingUp} colorClass="text-green-500">
            <p>
              Finance is about managing the money — not just recording it. Finance focuses on planning, investing, and using money wisely so the business can grow.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl mt-6">
              <span className="font-bold text-green-900 block mb-1">Key Concept</span>
              <span className="text-green-800">Finance = Managing the money.</span>
            </div>
          </Section>

          <Section title="What are Legalities?" delay={0.3} icon={ShieldCheck} colorClass="text-red-500">
            <p>
              Legalities are the rules and laws that businesses and people must follow when it comes to money and operations.
            </p>
            <p>
              They protect everyone — the business, customers, and the government — and ensure fairness and transparency.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6">
              <span className="font-bold text-red-900 block mb-1">Key Concept</span>
              <span className="text-red-800">Legalities = Following the laws.</span>
            </div>
          </Section>

          <Section title="What are Accounting Standards?" delay={0.4} icon={PieChart} colorClass="text-purple-500">
            <p>
              Accounting standards are rules for how to do accounting properly so that everyone records and reports their finances in the same way.
            </p>
            <p>
              They help in making financial reports clear and reliable, allowing investors, banks, and governments to trust the information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Transparency', desc: 'Clear, open financial practices' },
                { title: 'Reliability', desc: 'Trustworthy information' },
                { title: 'Consistency', desc: 'Uniform methods over time' },
                { title: 'Comparability', desc: 'Across LCs and MCs' },
                { title: 'Accountability', desc: 'Financial responsibility' }
              ].map((item, i) => (
                <div key={i} className="flex items-center p-3 bg-purple-50 rounded-xl">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <div>
                    <strong className="text-purple-900 block">{item.title}</strong>
                    <span className="text-purple-700 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default Fundamentals;
