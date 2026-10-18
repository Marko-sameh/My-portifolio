"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function AdminLoginForm({ onLoginSuccess, handleLogin }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [lockSeconds, setLockSeconds] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  // Active countdown timer when locked out
  useEffect(() => {
    if (!isLocked || lockSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockSeconds((prev) => {
        if (prev <= 1) {
          setIsLocked(false);
          setError("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isLocked, lockSeconds]);

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (isSubmitting || isLocked || !password.trim()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const result = await handleLogin(password);

      if (result?.success) {
        if (onLoginSuccess) onLoginSuccess();
        return;
      }

      triggerShake();

      if (result?.isLocked) {
        setIsLocked(true);
        setLockSeconds(result.retryAfterSeconds || 900);
        setError(
          result.error ||
            "Too many failed attempts. Access temporarily locked.",
        );
      } else {
        if (typeof result?.remainingAttempts === "number") {
          setAttemptsLeft(result.remainingAttempts);
        }
        setError(result?.error || "Invalid administrator password.");
      }
    } catch (err) {
      triggerShake();
      setError(
        "Authentication failed. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCountdown = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? "0" : ""}${remainder}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#070b14] text-white p-4 relative overflow-hidden">
      {/* Ambient gradient glow backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back to portfolio */}
      <div className="w-full max-w-md mb-4 flex justify-between items-center text-sm z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        {/* <span className="text-xs text-slate-500 font-mono tracking-wider">v2.5 · SECURED</span> */}
      </div>

      <div
        className={`w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 transition-transform ${
          isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
        }`}
        style={{
          boxShadow:
            "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Security Badge Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-indigo-600/20 border border-blue-500/30 text-blue-400 mb-4 shadow-inner">
            <Shield size={32} className="drop-shadow" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Admin Console
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Enter authorized master credential to manage portfolio content
          </p>
        </div>

        {/* Lockout Notice Banner */}
        {isLocked && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-200">
                Security Cooldown Active
              </p>
              <p className="text-xs text-red-300/80 mt-1">
                Multiple incorrect credentials detected. Unlocking in{" "}
                <span className="font-mono font-bold text-red-100">
                  {formatCountdown(lockSeconds)}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Generic Error Banner */}
        {!isLocked && error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-sm flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-xs sm:text-sm">{error}</p>
              {attemptsLeft !== null &&
                attemptsLeft > 0 &&
                attemptsLeft < 5 && (
                  <div className="mt-2 flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < attemptsLeft ? "bg-amber-500" : "bg-red-500/30"
                        }`}
                      />
                    ))}
                  </div>
                )}
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Master Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                disabled={isSubmitting || isLocked}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                autoFocus
                autoComplete="current-password"
                className="w-full pl-10 pr-12 py-3.5 bg-slate-950/60 border border-slate-700/80 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                disabled={isSubmitting || isLocked}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isLocked || !password.trim()}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:translate-y-[-1px] active:translate-y-[0px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Verifying Credentials...
              </>
            ) : isLocked ? (
              `Locked (${formatCountdown(lockSeconds)})`
            ) : (
              "Unlock Management"
            )}
          </button>
        </form>

        {/* Security Features Footnote */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Rate-limit active
          </span>
          <span>Constant-time verify</span>
        </div>
      </div>
    </div>
  );
}
