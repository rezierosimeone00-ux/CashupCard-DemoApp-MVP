"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Cashup Card</h1>
        <p className="text-gray-400 mb-6">AI-powered uplift beyond cashback & loyalty</p>
        <Link href="/user/register" className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
          Enter Demo →
        </Link>
      </motion.div>
      <footer className="absolute bottom-6 text-xs text-gray-500">TRL-5 Demo · v0.1</footer>
    </main>
  );
}
