'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, Users, TrendingUp } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const projets = [
  {
    icon: Truck,
    gradient: 'from-indigo-50 via-violet-50 to-indigo-50',
    borderColor: 'border-indigo-200/60',
    glowColor: 'shadow-indigo-200/40',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-600',
    accentBg: 'bg-indigo-500/[0.06]',
    tags: [
      { label: 'Automatisation', style: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      { label: 'Dashboard',      style: 'bg-violet-50 text-violet-700 border-violet-200' },
    ],
    client: 'Nexara Logistics',
    desc: 'Automatisation complete du suivi de livraisons et dashboard temps reel pour une PME logistique.',
    stack: ['Node.js', 'PostgreSQL', 'Zapier'],
    result: '-4h/jour de taches manuelles',
    resultStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    resultIcon: '⚡',
  },
  {
    icon: Users,
    gradient: 'from-pink-50 via-rose-50 to-pink-50',
    borderColor: 'border-pink-200/60',
    glowColor: 'shadow-pink-200/40',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
    accentBg: 'bg-pink-500/[0.06]',
    tags: [
      { label: 'Outil interne', style: 'bg-pink-50 text-pink-700 border-pink-200' },
      { label: 'Portail',       style: 'bg-rose-50 text-rose-700 border-rose-200' },
    ],
    client: 'Veltrix RH',
    desc: 'Outil de gestion RH interne avec espace collaborateur, suivi des conges et onboarding digitalise.',
    stack: ['React', 'Supabase', 'PDF auto'],
    result: '+60% satisfaction employes',
    resultStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    resultIcon: '📈',
  },
  {
    icon: TrendingUp,
    gradient: 'from-cyan-50 via-sky-50 to-blue-50',
    borderColor: 'border-cyan-200/60',
    glowColor: 'shadow-cyan-200/40',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    accentBg: 'bg-cyan-500/[0.06]',
    tags: [
      { label: 'Integration IA', style: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
      { label: 'Reporting',      style: 'bg-blue-50 text-blue-700 border-blue-200' },
    ],
    client: 'Datastep Finance',
    desc: 'Agent IA de traitement de factures PDF + dashboard financier consolide pour un cabinet de conseil.',
    stack: ['Python', 'Claude API', 'Notion'],
    result: '200+ docs traites/mois auto.',
    resultStyle: 'bg-amber-50 text-amber-700 border-amber-200/80',
    resultIcon: '🤖',
  },
]

export default function Realisations() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="realisations" className="relative py-28 bg-white overflow-hidden">
      {/* Background subtil */}
      <div className="absolute inset-0 dot-pattern-light opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-indigo-100/40 to-transparent rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 bg-indigo-50 px-3 py-1 rounded-full">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl text-slate-900 mb-3">
              Exemples de realisations
            </h2>
            <p className="text-slate-500 text-lg max-w-lg">
              Des projets concrets qui illustrent notre approche et nos resultats.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 glass rounded-full px-3 py-1.5 self-start md:self-auto whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Projets fictifs a titre illustratif
          </span>
        </motion.div>

        {/* 3D Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projets.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.client}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.08}
                  glareColor="#6366f1"
                  glarePosition="all"
                  glareBorderRadius="1.25rem"
                  scale={1.02}
                  transitionSpeed={400}
                  className={`rounded-[1.25rem] shadow-xl ${p.glowColor}`}
                >
                  <div className={`relative h-full bg-gradient-to-br ${p.gradient} rounded-[1.25rem] border ${p.borderColor} overflow-hidden`}>
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

                    {/* Decorative accent circles */}
                    <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${p.accentBg}`} />
                    <div className={`absolute -bottom-10 -left-10 w-36 h-36 rounded-full ${p.accentBg}`} />

                    {/* Content */}
                    <div className="relative p-7">
                      {/* Icon + Tags row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                        </div>
                        <div className="flex gap-2">
                          {p.tags.map(t => (
                            <span key={t.label} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${t.style}`}>
                              {t.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-2">{p.client}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.stack.map(s => (
                          <span key={s} className="text-[11px] font-medium text-slate-500 bg-white/80 border border-slate-200/80 rounded-lg px-2.5 py-1 shadow-sm">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-slate-200/60 mb-5" />

                      {/* Result badge */}
                      <div className={`flex items-center gap-3 rounded-xl px-4 py-3 border shadow-sm ${p.resultStyle}`}>
                        <span className="text-lg">{p.resultIcon}</span>
                        <span className="text-sm font-semibold">{p.result}</span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
