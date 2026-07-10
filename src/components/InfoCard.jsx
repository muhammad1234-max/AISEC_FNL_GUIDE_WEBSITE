import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ title, children, delay, icon: Icon, colorClass, variant = 'standard' }) => {
  const variantClass = {
    standard: 'standard-panel',
    featured: 'panel-featured',
    compact: 'panel-compact'
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className={`${variantClass} card-hover flex flex-col h-full`}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-lg bg-gray-50 border border-gray-100`}>
          <Icon className={`w-5 h-5 ${colorClass}`} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{title}</h3>
      </div>

      <div className="text-gray-500 space-y-3 leading-relaxed text-sm">
        {children}
      </div>
    </motion.div>
  );
};

export default InfoCard;
