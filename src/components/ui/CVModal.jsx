'use client'

import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, Download } from 'lucide-react'

const CVModal = ({ isOpen, onClose }) => {
    const { isRecruiterMode } = useRecruiterMode();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
                    <motion.div
                        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 max-w-sm w-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <X size={20} className="text-white" />
                        </button>

                        <h3 className="text-xl font-bold text-white mb-6 text-center">View My CV</h3>

                        <div className="space-y-4">
                            <motion.a
                                href="/MarkoSameh.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 w-full px-6 py-4 ${isRecruiterMode ? "bg-blue-800" : "bg-gradient-to-r from-[var(--accent)] to-[var(--background)]"} rounded-xl font-medium text-white hover:shadow-lg transition-all`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                            >
                                <Eye size={20} />
                                Open CV
                            </motion.a>

                            <motion.a
                                href="/MarkoSameh.pdf"
                                download="Marko_Sameh_CV.pdf"
                                className="flex items-center gap-3 w-full px-6 py-4 border-2 border-white/20 rounded-xl font-medium text-white hover:bg-white/5 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                            >
                                <Download size={20} />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CVModal