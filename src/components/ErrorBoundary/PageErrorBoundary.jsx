"use client";
import { Component } from "react";

class PageErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">Page Error</h1>
            <p className="text-gray-400 mb-6">
              This page encountered an error. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PageErrorBoundary;
