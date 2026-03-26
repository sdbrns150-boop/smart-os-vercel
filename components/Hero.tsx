'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp, CheckCircle, Zap, ArrowRight,
  Search, Bell, BarChart2,
} from 'lucide-react'

const floatA = {
  animate: { y: [0, -12, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }
}
const floatB = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }
}
const floatC = {
  animate: { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }
}

const bars = [
  { h: 52, hLight: 36, label: 'Jan' },
  { h: 72, hLight: 50, label: 'Fev' },
  { h: 40, hLight: 28, label: 'Mar' },
  { h: 88, hLight: 60, label: 'Avr' },
  { h: 64, hLight: 44, label: 'Mai' },
  { h: 96, hLight: 68, label: 'Jun' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Fond mesh anime */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-pattern-light opacity-60" />

      {/* Blobs decoratifs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-100/30 to-transparent rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* Colonne gauche */}
        <div>
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 shadow-soft"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
            </span>
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              Service B2B 100% sur-mesure
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[52px] leading-[1.08] tracking-tight text-slate-900 mb-6"
          >
            Le systeme<br />
            d&apos;exploitation<br />
            de votre{' '}
            <span className="gradient-text">reussite</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-slate-500 leading-relaxed max-w-md mb-10"
          >
            SMART-OS concoit des outils, pages web et automatisations
            sur-mesure pour les entreprises B2B. Pas de template.
            Uniquement des solutions pensees pour vos vrais besoins.
          </motion.p>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="shine group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-200/60 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-300/80"
            >
              Commencer maintenant
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#processus"
              className="inline-flex items-center gap-2 glass hover:bg-white text-indigo-600 border border-indigo-200/50 font-semibold text-[15px] px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-soft"
            >
              Voir le processus
            </a>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex gap-8"
          >
            {[
              { value: '50+', label: 'Projets livres' },
              { value: '98%', label: 'Satisfaction' },
              { value: '24h', label: 'Temps de reponse' },
            ].map(m => (
              <div key={m.label}>
                <p className="font-display font-bold text-2xl text-slate-900">{m.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Colonne droite : Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >

          {/* Floating card : projet livre */}
          <motion.div
            variants={floatA}
            animate="animate"
            className="absolute -top-4 -left-8 glass rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Projet livre</p>
              <p className="text-[11px] text-slate-400">Nexara - il y a 2h</p>
            </div>
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </div>
          </motion.div>

          {/* Floating card : gain de temps */}
          <motion.div
            variants={floatB}
            animate="animate"
            className="absolute -bottom-6 -left-4 glass rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">-4h/jour automatisees</p>
              <p className="text-[11px] text-slate-400">Gain constate ce mois</p>
            </div>
          </motion.div>

          {/* Floating card : satisfaction */}
          <motion.div
            variants={floatC}
            animate="animate"
            className="absolute -right-6 top-1/3 glass rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">+60% satisfaction</p>
              <p className="text-[11px] text-slate-400">Veltrix RH</p>
            </div>
          </motion.div>

          {/* Dashboard card */}
          <div className="w-full max-w-[520px] bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-slate-200/80 border border-white/60 overflow-hidden glow-indigo">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-md flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-display font-bold text-sm text-slate-800">Smart-OS</span>
              </div>
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-slate-400" />
                <Bell className="w-4 h-4 text-slate-400" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[11px] font-bold ring-2 ring-white">
                  JD
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-2 divide-x divide-slate-100/80">

              {/* Left : Bar chart */}
              <div className="p-5">
                <p className="font-display font-semibold text-sm text-slate-800">Smart-OS</p>
                <p className="text-[11px] text-slate-400 mb-4">Apercu activite</p>

                {/* Tabs */}
                <div className="flex gap-2 mb-5">
                  {['Mois', 'Trim.', 'Annee'].map((t, i) => (
                    <button
                      key={t}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                        i === 0
                          ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Bars */}
                <div className="flex items-end gap-2.5 h-24">
                  {bars.map(b => (
                    <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-end gap-0.5" style={{ height: '80px' }}>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${b.h}%` }}
                          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                          className="flex-1 bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-sm"
                        />
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${b.hLight}%` }}
                          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                          className="flex-1 bg-indigo-200 rounded-t-sm"
                        />
                      </div>
                      <span className="text-[9px] text-slate-400">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right : Donut + legende */}
              <div className="p-5">
                <p className="font-display font-semibold text-sm text-slate-800">Repartition</p>
                <p className="text-[11px] text-slate-400 mb-4">Par service</p>

                {/* Donut CSS */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e0e7ff" strokeWidth="4" />
                      <motion.circle
                        initial={{ strokeDasharray: '0 100' }}
                        animate={{ strokeDasharray: '65 35' }}
                        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                        cx="18" cy="18" r="14" fill="none"
                        stroke="url(#gradient1)" strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <motion.circle
                        initial={{ strokeDasharray: '0 100' }}
                        animate={{ strokeDasharray: '22 78' }}
                        transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#a5b4fc" strokeWidth="4"
                        strokeLinecap="round"
                        strokeDashoffset="-65"
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-bold text-slate-800">74%</span>
                      <span className="text-[9px] text-slate-400">objectif</span>
                    </div>
                  </div>
                </div>

                {/* Legende */}
                {[
                  { dot: 'bg-gradient-to-r from-indigo-600 to-violet-600', label: 'Outils internes', val: '2 000K' },
                  { dot: 'bg-indigo-300', label: 'Automation',      val: '330K' },
                  { dot: 'bg-slate-200',  label: 'Portails',        val: '509K' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${row.dot}`} />
                      <span className="text-[10px] text-slate-500">{row.label}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-slate-100/80 border-t border-slate-100/80">
              {[
                { val: '39',   delta: '+12%', green: true,  label: 'Projets actifs' },
                { val: '785K', delta: '',     green: null,  label: 'CA genere' },
                { val: '321',  delta: '-3%',  green: false, label: 'Taches auto.' },
              ].map(s => (
                <div key={s.label} className="px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-base font-bold text-slate-800">{s.val}</span>
                    {s.delta && (
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                        s.green ? 'text-green-600 bg-green-50' : 'text-red-500 bg-red-50'
                      }`}>
                        {s.delta}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Recent projects */}
            <div className="px-5 py-4 border-t border-slate-100/80">
              <p className="text-[11px] font-semibold text-slate-600 mb-3">Automatisations recentes</p>
              {[
                { name: 'Nexara Logistics', val: '2 000K', dot: 'bg-indigo-600' },
                { name: 'Veltrix RH',       val: '330K',   dot: 'bg-indigo-300' },
                { name: 'Datastep Finance', val: '509K',   dot: 'bg-slate-300' },
              ].map(r => (
                <div key={r.name} className="flex items-center justify-between py-1.5 group cursor-default">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${r.dot}`} />
                    <span className="text-[11px] text-slate-600 group-hover:text-indigo-600 transition-colors">{r.name}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
