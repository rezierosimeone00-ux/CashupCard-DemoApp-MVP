"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WalletPage() {
  const [spent, setSpent] = useState(0);
  const total = 100;
  const progress = (spent / total) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setSpent((prev) => (prev < 80 ? prev + 5 : 80)); // mock user spending up to $80
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-2xl font-semibold mb-3 text-center">💳 Your Virtual Card</h1>
        <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-black p-6 w-80 shadow-lg border border-gray-700">
          <p className="text-sm text-gray-400 mb-1">Balance</p>
          <p className="text-3xl font-semibold mb-4">${total - spent}</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
            <div
              className="bg-amber-400 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mb-4">{progress.toFixed(0)}% spent</p>
          <Link href="/merchant/notify" className="bg-amber-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-amber-300 transition">
            Use Card →
          </Link>
        </div>
      </motion.div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 4 · Wallet / Virtual Card</footer>
    </main>
  );
}
