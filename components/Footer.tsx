'use client'

import { ShieldCheck, Mail, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Fonctionnalites', href: '#expertise' },
  { label: 'Processus',       href: '#processus' },
  { label: 'Realisations',    href: '#realisations' },
  { label: 'Contact',         href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/50 pointer-events-none" />

      {/* CTA strip */}
      <div className="relative border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-2xl mb-2">Pret a digitaliser votre activite ?</h3>
            <p className="text-slate-400 text-[15px]">L&apos;appel de decouverte est gratuit, sans engagement.</p>
          </div>
          <a
            href="#contact"
            className="shine group flex-shrink-0 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            Demander un devis
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Footer bas */}
      <div className="relative max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/30">
                <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-[16px]">Smart-OS</span>
            </div>
            <p className="text-slate-500 text-[13px]">Workflows & outils digitaux sur-mesure pour le B2B</p>
          </div>

          {/* Liens */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Email + copyright */}
          <div className="text-right text-slate-500 text-[13px]">
            <a href="mailto:contact@smart-os.fr" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors mb-1.5 justify-end">
              <Mail className="w-3.5 h-3.5" />
              contact@smart-os.fr
            </a>
            <p>2025 SMART-OS — Tous droits reserves</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
