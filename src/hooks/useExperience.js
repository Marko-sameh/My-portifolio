"use client";
import { useEffect, useState } from "react";

// Fetches career entries from the database via /api/experience
export function useExperience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/experience", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setExperience(data))
      .catch((e) => {
        if (e.name !== "AbortError") console.error("Failed to fetch experience:", e);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { experience, loading };
}
