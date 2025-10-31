"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MerchantNotifyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex flex-col items-center justify-center px-4 text-gray-900">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-2xl font-semibold mb-3 text-center">📣 Drop Active in Your Area</h1>
        <p className="text-gray-700 mb-4 text-center">
          A Cashup Drop has been automatically activated for your merchant location (Cell GTA-001).
        </p>
        <div className="border border-amber-400 rounded-2xl bg-white p-4 shadow-md text-center max-w-sm">
          <p className="text-sm text-gray-600 mb-2">Your store is now visible to users within this cell.</p>
          <p className="text-xs text-gray-500 mb-3">Expect increased traffic and card usage within 24h.</p>
          <Link href="/merchant/dashboard" className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Open Merchant Dashboard →
          </Link>
        </div>
      </motion.div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 5 · Merchant Notification</footer>
    </main>
  );
}
