"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MerchantDashboard() {
  const [sales, setSales] = useState(0);
  const [cards, setCards] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSales((s) => s + Math.floor(Math.random() * 40));
      setCards((c) => (c < 45 ? c + 1 : 45));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-gray-900">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-2xl font-semibold mb-6 text-center">Merchant Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md">
          <Card label="Active Cards" value={cards} />
          <Card label="Sales (CAD)" value={sales} />
          <Card label="Timer (s)" value={new Date().getSeconds()} />
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center">Module 6 · Merchant Dashboard · TRL-5 Simulation</p>
      </motion.div>
    </main>
  );
}

function Card({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}
