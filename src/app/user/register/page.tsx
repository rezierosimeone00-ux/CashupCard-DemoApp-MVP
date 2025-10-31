"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-4">
      <h1 className="text-2xl font-semibold mb-4">Join the Cashup Pilot</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Enter your name and postal code to locate your H3 cell in the GTA area and access the Drop.
      </p>
      <form className="flex flex-col gap-3 w-full max-w-xs">
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded-lg" />
        <input type="text" placeholder="Postal code (e.g., M5V 2T6)" value={zip} onChange={(e) => setZip(e.target.value)} className="border p-2 rounded-lg" />
        <Link
          href="/user/drop"
          className="bg-black text-white px-4 py-2 rounded-lg text-center mt-2 hover:bg-gray-800 transition"
        >
          Locate Drop →
        </Link>
      </form>
      <footer className="absolute bottom-6 text-xs text-gray-500">Mock location via H3 cell · Toronto Region</footer>
    </main>
  );
}
