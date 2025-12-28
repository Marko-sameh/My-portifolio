"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LearnMoreButton({ sectionName }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${sectionName}`);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--background)] rounded-full font-medium text-sm hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Learn More
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );
}