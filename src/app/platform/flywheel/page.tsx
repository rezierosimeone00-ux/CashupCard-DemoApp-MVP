"use client";
import { motion } from "framer-motion";

const nodes = [
  { name: "User", color: "bg-amber-400", radius: 120 },
  { name: "Drop", color: "bg-emerald-400", radius: 160 },
  { name: "Merchant", color: "bg-blue-400", radius: 200 },
  { name: "Data", color: "bg-purple-400", radius: 240 },
  { name: "ROI", color: "bg-pink-400", radius: 280 },
];

export default function Flywheel() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      <h1 className="text-xl mb-8 font-semibold">⚙️ Viral Flywheel</h1>
      <div className="relative w-[600px] h-[600px]">
        {nodes.map((n, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${n.color} text-black font-semibold flex items-center justify-center`}
            style={{
              width: 80, height: 80,
              top: "50%", left: "50%",
              marginTop: -40, marginLeft: -40,
            }}
            animate={{
              rotate: 360,
              transformOrigin: `0 ${n.radius}px`,
            }}
            transition={{ repeat: Infinity, duration: 20 - i * 2, ease: "linear" }}
          >
            {n.name}
          </motion.div>
        ))}
      </div>
      <footer className="absolute bottom-6 text-xs text-gray-500">Module 10 · Viral Flywheel</footer>
    </main>
  );
}
