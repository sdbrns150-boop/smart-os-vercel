'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, Users, TrendingUp } from 'lucide-react'

const projets = [
  {
    icon: Truck,
    gradient: 'from-indigo-500/20 to-violet-500/20',
    iconBg: 'bg-indigo-100 text-indigo-600',
    tags: [
      { label: 'Automatisation', style: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
      { label: 'Dashboard',      style: 'bg-violet-50 text-violet-700 border-violet-100' },
    ],
    client: 'Nexara Logistics',
    desc: 'Automatisation complète du suivi de livraisons et dashboard temps réel pour une PME logistique. Saisie manuelle éliminée à 80%.',
    stack: ['Node.js', 'PostgreSQL', 'Zapier'],
    result: '-4h/jour de tâches manuelles',
    resultStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    icon: Users,
    gradient: 'from-pink-500/20 to-rose-500/20',
    iconBg: 'bg-pink-100 text-pink-600',
    tags: [
      { label: 'Outil interne', style: 'bg-pink-50 text-pink-700 border-pink-100' },
      { label: 'Portail',       style: 'bg-rose-50 text-rose-700 border-rose-100' },
    ],
    client: 'Veltrix RH',
    desc: 'Outil de gestion RH interne avec espace collaborateur, suivi des congés, onboarding digitalisé et reportings automatisés.',
    stack: ['React', 'Supabase', 'PDF auto'],
    result: '+60% satisfaction employés',
    resultStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: TrendingUp,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconBg: 'bg-cyan-100 text-cyan-600',
    tags: [
      { label: 'Intégration IA', style: 'bg-cyan-50 text-cyan-700 border-cyan-100' },
      { label: 'Reporting',      style: 'bg-blue-50 text-blue-700 border-blue-100' },
    ],
    client: 'Datastep Finance',
    desc: 'Agent IA de traitement de factures PDF + dashboard financier consolidé pour un cabinet de conseil. 200+ documents traités/mois.',
    stack: ['Python', 'Claude API', 'Notion'],
    result: '200+ docs traités/mois auto.',
    resultStyle: 'bg-amber-50 text-amber-700 border-amber-200',
  },
]

export default function Realisations() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="realisations" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 block">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl text-slate-900 mb-3">
              Exemples de réalisations
            </h2>
            <p className="text-slate-500 text-lg max-w-lg">
              Des projets concrets qui illustrent notre approche et nos résultats.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 border border-slate-200 rounded-full px-3 py-1.5 self-start md:self-auto whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Projets fictifs à titre illustratif
          </span>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projets.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.client}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.10)' }}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-shadow"
              >
                {/* Thumbnail */}
                <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t.label} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${t.style}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{p.client}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map(s => (
                      <span key={s} className="text-[11px] font-medium text-slate-400 bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Result badge */}
                  <div className={`flex items-center gap-2 text-sm font-semibold rounded-xl px-3.5 py-2.5 border ${p.resultStyle}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 flex-shrink-0" />
                    {p.result}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
