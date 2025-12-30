"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection({ headline, description, buttonText, href }) {
  return (
    <div className="mt-16 sm:mt-20 text-center">
      <div className="bg-gradient-to-r from-[var(--background)]/20 to-[var(--accent)]/20 rounded-2xl p-8 sm:p-12 border border-white/10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">{headline}</h3>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link href={href}>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        </Link>
      </div>
    </div>
  );
}