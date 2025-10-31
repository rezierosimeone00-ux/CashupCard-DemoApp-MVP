"use client";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DataInsightsPage() {
  const [data, setData] = useState<{ name: string; ROI: number; ARR: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [
          ...prev,
          { name: `T${prev.length + 1}`, ROI: Math.random() * 3, ARR: 150 + Math.random() * 60 }
        ];
        return next.slice(-10);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4">
      <h1 className="text-2xl font-semibold mb-2">📊 Data & Insights</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Live mock of Cashup DaaS metrics: ROI and ARR evolution over time.
      </p>

      <div className="w-full max-w-2xl h-64 bg-gray-50 border border-gray-200 rounded-xl p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="ROI" stroke="#eab308" strokeWidth={2} />
            <Line type="monotone" dataKey="ARR" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-gray-500 mt-6">Module 9 · Data & Insights (DaaS / SaaS)</p>
    </main>
  );
}
