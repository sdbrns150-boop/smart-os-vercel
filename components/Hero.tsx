'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp, CheckCircle, Zap, ArrowRight,
  Search, Bell, BarChart2, PieChart,
} from 'lucide-react'

const floatA = {
  animate: { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }
}
const floatB = {
  animate: { y: [0, -7, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 } }
}
const floatC = {
  animate: { y: [0, -8, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }
}

const bars = [
  { h: 52, hLight: 36, label: 'Jan' },
  { h: 72, hLight: 50, label: 'Fév' },
  { h: 40, hLight: 28, label: 'Mar' },
  { h: 88, hLight: 60, label: 'Avr' },
  { h: 64, hLight: 44, label: 'Mai' },
  { h: 96, hLight: 68, label: 'Jun' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Fond mesh animé */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Blobs décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* ── Colonne gauche ── */}
        <div>
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
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
            Le système<br />
            d&apos;exploitation<br />
            de votre{' '}
            <span className="text-indigo-600">réussite</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-slate-500 leading-relaxed max-w-md mb-10"
          >
            SMART-OS conçoit des outils, pages web et automatisations
            sur-mesure pour les entreprises B2B. Pas de template.
            Uniquement des solutions pensées pour vos vrais besoins.
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
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[15px] px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-200/60 transition-all hover:-translate-y-0.5 hover:shadow-indigo-300/80"
            >
              Commencer maintenant
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#processus"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-200 font-semibold text-[15px] px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Voir le processus
            </a>
          </motion.div>

          {/* Bouton secondaire */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-[15px] px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Demander une démo
            </a>
          </motion.div>
        </div>

        {/* ── Colonne droite : Dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >

          {/* Floating card — projet livré */}
          <motion.div
            variants={floatA}
            animate="animate"
            className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Projet livré</p>
              <p className="text-[11px] text-slate-400">Nexara · il y a 2h</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Floating card — gain de temps */}
          <motion.div
            variants={floatB}
            animate="animate"
            className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">-4h/jour automatisées</p>
              <p className="text-[11px] text-slate-400">Gain constaté ce mois</p>
            </div>
          </motion.div>

          {/* Floating card — satisfaction */}
          <motion.div
            variants={floatC}
            animate="animate"
            className="absolute -right-6 top-1/3 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 z-20"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">+60% satisfaction</p>
              <p className="text-[11px] text-slate-400">Veltrix RH</p>
            </div>
          </motion.div>

          {/* Dashboard card */}
          <div className="w-full max-w-[520px] bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-display font-bold text-sm text-slate-800">Smart-OS</span>
              </div>
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-slate-400" />
                <Bell className="w-4 h-4 text-slate-400" />
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[11px] font-bold">
                  JD
                </div>
              </div>
            </div>

            {/* Body — 2 colonnes */}
            <div className="grid grid-cols-2 divide-x divide-slate-100">

              {/* Left — Bar chart */}
              <div className="p-5">
                <p className="font-display font-semibold text-sm text-slate-800">Smart-OS</p>
                <p className="text-[11px] text-slate-400 mb-4">Aperçu activité</p>

                {/* Tabs */}
                <div className="flex gap-2 mb-5">
                  {['Mois', 'Trim.', 'Année'].map((t, i) => (
                    <button
                      key={t}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                        i === 0
                          ? 'bg-indigo-600 text-white'
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
                        <div
                          className="flex-1 bg-indigo-600 rounded-t-sm"
                          style={{ height: `${b.h}%` }}
                        />
                        <div
                          className="flex-1 bg-indigo-200 rounded-t-sm"
                          style={{ height: `${b.hLight}%` }}
                        />
                      </div>
                      <span className="text-[9px] text-slate-400">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Donut + légende */}
              <div className="p-5">
                <p className="font-display font-semibold text-sm text-slate-800">Répartition</p>
                <p className="text-[11px] text-slate-400 mb-4">Par service</p>

                {/* Donut CSS */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e0e7ff" strokeWidth="4" />
                      <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#4f46e5" strokeWidth="4"
                        strokeDasharray="65 35" strokeLinecap="round"
                      />
                      <circle
                        cx="18" cy="18" r="14" fill="none"
                        stroke="#a5b4fc" strokeWidth="4"
                        strokeDasharray="22 78" strokeLinecap="round"
                        strokeDashoffset="-65"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-bold text-slate-800">74%</span>
                      <span className="text-[9px] text-slate-400">objectif</span>
                    </div>
                  </div>
                </div>

                {/* Légende */}
                {[
                  { dot: 'bg-indigo-600', label: 'Outils internes', val: '2 000K' },
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
            <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100">
              {[
                { val: '39',   delta: '+12%', green: true,  label: 'Projets actifs' },
                { val: '785K', delta: '',     green: null,  label: 'CA généré (€)' },
                { val: '321',  delta: '-3%',  green: false, label: 'Tâches auto.' },
              ].map(s => (
                <div key={s.label} className="px-4 py-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-base font-bold text-slate-800">{s.val}</span>
                    {s.delta && (
                      <span className={`text-[10px] font-semibold ${s.green ? 'text-green-500' : 'text-red-400'}`}>
                        {s.delta}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Recent projects */}
            <div className="px-5 py-4 border-t border-slate-100">
              <p className="text-[11px] font-semibold text-slate-600 mb-3">Automatisations récentes</p>
              {[
                { name: 'Nexara Logistics', val: '2 000K €', dot: 'bg-indigo-600' },
                { name: 'Veltrix RH',       val: '330K €',   dot: 'bg-indigo-300' },
                { name: 'Datastep Finance', val: '509K €',   dot: 'bg-slate-300' },
              ].map(r => (
                <div key={r.name} className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${r.dot}`} />
                    <span className="text-[11px] text-slate-600">{r.name}</span>
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
