"use client";
import { motion } from "framer-motion";

export default function BusinessFocusedSection() {
    return (
        <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 max-w-4xl mx-auto border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
        >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                I solve the website problem that's costing you customers
            </h3>
            <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                Your website should bring in business, not drive it away. I build websites that get found on Google, convert visitors into customers, and grow with your business.
            </p>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-center" style={{ color: 'var(--accent)' }}>Why This Matters for Your Business</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300">• Stop losing customers to competitors with better websites</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300">• Get found by people searching for your services online</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-300">• Turn website visitors into paying customers automatically</p>
                    </div>
                </div>
            </div>

            <p className="text-center text-gray-400">
                Ready to see how a professional website can grow your business?
                <span className="text-white font-medium">Explore my work below or get in touch.</span>
            </p>
        </motion.div>
    );
}