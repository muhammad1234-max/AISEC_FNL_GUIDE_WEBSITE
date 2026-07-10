import React from 'react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const People = () => {
  return (
    <Layout>
      <section className="bg-white min-h-screen py-20">
        <div className="page-container">
          <PageHeader
            title="People"
            description="The leaders, teams, and stakeholders behind Finance and Legal excellence."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl border border-gray-100 shadow-sm bg-gray-50"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming soon</h2>
              <p className="text-gray-600">
                This space will showcase role descriptions, best practices, and inspirational profiles
                from Finance and Legal leaders across the network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default People;

