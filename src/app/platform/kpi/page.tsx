"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function KPIDashboard() {
  const [kpi, setKpi] = useState({ ltv: 280, cac: 30, roi: 4.5, retention: 92 });
  useEffect(() => {
    const interval = setInterval(() => {
      setKpi({
        ltv: 250 + Math.random() * 100,
        cac: 20 + Math.random() * 20,
        roi: 3 + Math.random() * 3,
        retention: 85 + Math.random() * 10,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl mb-8 font-semibold">📈 KPI Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(kpi).map(([key, value], i) => (
          <motion.div key={key}
            className="bg-gray-800 p-4 rounded-2xl text-center shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
            <p className="uppercase text-xs text-gray-400 mb-2">{key}</p>
            <p className="text-2xl font-bold">
              {key === "roi" ? value.toFixed(1) + "x" : key === "retention" ? value.toFixed(0) + "%" : "€" + value.toFixed(0)}
            </p>
          </motion.div>
        ))}
      </div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 11 · KPI Dashboard</footer>
    </main>
  );
}
