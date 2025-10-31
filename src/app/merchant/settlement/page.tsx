"use client";
import { motion } from "framer-motion";

export default function SettlementPage() {
  const steps = [
    { label: "User pays", value: "$80", color: "bg-blue-200" },
    { label: "Cashup Uplift", value: "$100", color: "bg-amber-200" },
    { label: "Fee -8%", value: "-$8", color: "bg-red-200" },
    { label: "Merchant receives", value: "$72", color: "bg-emerald-200" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex flex-col items-center justify-center px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-2xl font-semibold mb-6 text-center">💸 Settlement Flow</h1>
        <div className="grid md:grid-cols-4 gap-3 max-w-4xl">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.3 }}
              className={`rounded-2xl p-4 text-center shadow-md border ${s.color}`}
            >
              <p className="text-sm text-gray-600">{s.label}</p>
              <p className="text-2xl font-semibold">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 8 · Settlement Dashboard</footer>
    </main>
  );
}
