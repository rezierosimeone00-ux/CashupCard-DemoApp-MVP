"use client";
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="text-center"
      >
        <motion.div
          className="text-6xl font-extrabold text-amber-400 tracking-wide mb-6"
          animate={{ textShadow: ["0px 0px 20px #fbbf24", "0px 0px 40px #fbbf24", "0px 0px 20px #fbbf24"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          CASHUP CARD
        </motion.div>
        <motion.p className="text-lg text-gray-300 italic">Beyond Cashback & Loyalty</motion.p>
      </motion.div>

      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-amber-400 to-pink-500 opacity-20"
        style={{ width: 600, height: 600 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 12 · Vision Scene</footer>
    </main>
  );
}
