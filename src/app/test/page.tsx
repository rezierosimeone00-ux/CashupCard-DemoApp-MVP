"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Test() {
  const [out, setOut] = useState("loading...");
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("users").select("*").limit(3);
      if (error) setOut("ERROR: " + error.message);
      else setOut(JSON.stringify(data, null, 2));
    })();
  }, []);
  return <pre style={{padding:16,whiteSpace:"pre-wrap"}}>{out}</pre>;
}
