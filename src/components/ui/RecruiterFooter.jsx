'use client';

import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import Link from 'next/link';

export default function RecruiterFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to work together?</h3>
            <p className="text-slate-300">{"Let's"} discuss how I can contribute to your team.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="mailto:markosameh75@gmail.com" target='_blank' className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>markosameh75@gmail.com</span>
            </Link>
            <Link href="https://www.linkedin.com/in/marko-sameh-9971b6244" target='_blank' className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </Link>
            <Link href="https://github.com/Marko-sameh" target='_blank' className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub Portfolio</span>
            </Link>
          </div>
        </div>
        <p className='mt-4 text-center text-slate-400 '>Available for frontend opportunities</p>
        <div className="border-t border-slate-700 mt-3 pt-6 text-center text-slate-400">
          <p>&copy; 2025 Marko Sameh</p>
        </div>
      </div>
    </footer>
  );
}