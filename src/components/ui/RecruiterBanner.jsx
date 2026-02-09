"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, X } from "lucide-react";

export default function RecruiterBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => setShouldRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    // Expose banner visibility to window for Nav component
    useEffect(() => {
        window.bannerVisible = isVisible;
        window.dispatchEvent(new CustomEvent('bannerVisibilityChange', { detail: isVisible }));
    }, [isVisible]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[var(--background)] to-[var(--accent)] text-white py-3 px-4 transition-all duration-500 ${isVisible ? 'block' : 'hidden'}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-medium">
                        Are you a recruiter? Switch to{" "}
                        <button
                            onClick={() => router.push("/recruiter")}
                            className="underline transition-colors mx-1"
                            style={{ color: 'inherit' }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            Recruiter Mode
                        </button>
                        for a professional overview
                    </span>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}