"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TxFeedPage() {
  const [feed, setFeed] = useState<{ id: number; amount: number; merchant: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeed((f) => [
        { id: Date.now(), amount: Math.floor(Math.random() * 50) + 10, merchant: "Cashup POS" },
        ...f.slice(0, 9)
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-semibold mb-4">🧾 Transaction Feed</h1>
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-4 border border-gray-700">
        {feed.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between py-1 border-b border-gray-700 text-sm"
          >
            <span>Txn #{t.id.toString().slice(-5)}</span>
            <span>${t.amount}</span>
          </motion.div>
        ))}
        {feed.length === 0 && <p className="text-gray-500 text-center py-8">Waiting for transactions...</p>}
      </div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 7 · Transaction Feed</footer>
    </main>
  );
}
