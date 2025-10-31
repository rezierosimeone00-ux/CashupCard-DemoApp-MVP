"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DropPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-2xl font-semibold mb-2 text-center">🎉 Drop Active in Your Area</h1>
        <p className="text-gray-700 mb-4 text-center">Pay $80 → Get $100 (+25 %) · Cap 3 %</p>

        <div className="border border-yellow-400 rounded-2xl bg-white p-4 shadow-md text-center max-w-sm">
          <p className="text-sm text-gray-600 mb-2">You’re in H3 Cell GTA-001</p>
          <p className="text-3xl font-semibold mb-2">$100 Virtual Card</p>
          <p className="text-xs text-gray-500 mb-3">funded via Cashup Uplift Engine</p>
          <Link href="/user/wallet" className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Activate Card →
          </Link>
        </div>
      </motion.div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 3 · Drop Detail / Access</footer>
    </main>
  );
}
