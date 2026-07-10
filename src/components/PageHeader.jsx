import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, highlight, description, badge }) => {
  return (
    <div className="text-center mb-20 relative">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
        <div className="w-full max-w-lg h-32 bg-blue-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="py-8 bg-grid-pattern bg-[size:24px_24px]">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block py-1 px-3 rounded-full text-sm font-bold tracking-wide uppercase mb-4 ${badge.colorClass}`}
          >
            {badge.text}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4"
        >
          {title} {highlight && <span className="text-aiesec-blue">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {description}
          </motion.p>
        )}

        <div className="max-w-xs mx-auto border-b border-gray-200/60" />
      </div>
    </div>
  );
};

export default PageHeader;
