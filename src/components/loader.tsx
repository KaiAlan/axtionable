'use client'

import { motion } from 'motion/react'

export default function InitialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className='text-black text-lg font-semibold'>axtionable.in</span>
      </motion.div>
    </motion.div>
  )
}