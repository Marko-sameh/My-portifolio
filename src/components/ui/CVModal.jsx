"use client";

import { useRecruiterMode } from "@/contexts/RecruiterModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Download } from "lucide-react";
import { useEffect, useRef } from "react";

const CV_OPTIONS = [
  {
    key: "fullstack",
    label: "Full Stack CV",
    file: "/Marko_Sameh_Full_Stack_Developer_CV.pdf",
    download: "Marko_Sameh_Full_Stack_Developer_CV.pdf",
  },
  {
    key: "frontend",
    label: "Frontend CV",
    file: "/Marko_Sameh_Frontend_Engineer_Resume.pdf",
    download: "Marko_Sameh_Frontend_Engineer_Resume.pdf",
  },
  {
    key: "backend",
    label: "Backend CV",
    file: "/Marko_Sameh_Backend_Developer_CV.pdf",
    download: "Marko_Sameh_Backend_Developer_CV.pdf",
  },
];

const CVModal = ({ isOpen, onClose }) => {
  const { isRecruiterMode } = useRecruiterMode();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap
      if (e.key === "Tab") {
        const focusableElements =
          modalRef.current?.querySelectorAll("button, a[href]");
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={modalRef}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 max-w-sm w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close CV modal"
            >
              <X size={20} className="text-white" aria-hidden="true" />
            </button>

            <h3
              id="cv-modal-title"
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Choose CV
            </h3>

            <div className="space-y-3">
              {CV_OPTIONS.map((cv) => (
                <div key={cv.key} className="flex gap-2">
                  <motion.a
                    href={cv.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-1 items-center gap-3 px-5 py-4 ${isRecruiterMode ? "bg-blue-800" : "bg-gradient-to-r from-[var(--accent)] to-[var(--background)]"} rounded-xl font-medium text-white hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    <Eye size={20} />
                    {cv.label}
                  </motion.a>
                  <motion.a
                    href={cv.file}
                    download={cv.download}
                    aria-label={`Download ${cv.label}`}
                    className="flex items-center justify-center px-4 border-2 border-white/20 rounded-xl text-white hover:bg-white/5 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                  >
                    <Download size={20} />
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
