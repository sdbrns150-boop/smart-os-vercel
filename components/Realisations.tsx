'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Truck, Users, TrendingUp } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const projets = [
  {
    icon: Truck,
    gradient: 'from-indigo-600 via-violet-600 to-purple-600',
    glowColor: 'shadow-indigo-500/20',
    iconBg: 'bg-white/20',
    tags: [
      { label: 'Automatisation', style: 'bg-white/15 text-white border-white/20' },
      { label: 'Dashboard',      style: 'bg-white/15 text-white border-white/20' },
    ],
    client: 'Nexara Logistics',
    desc: 'Automatisation complete du suivi de livraisons et dashboard temps reel pour une PME logistique.',
    stack: ['Node.js', 'PostgreSQL', 'Zapier'],
    result: '-4h/jour de taches manuelles',
    resultIcon: '⚡',
  },
  {
    icon: Users,
    gradient: 'from-pink-600 via-rose-600 to-fuchsia-600',
    glowColor: 'shadow-pink-500/20',
    iconBg: 'bg-white/20',
    tags: [
      { label: 'Outil interne', style: 'bg-white/15 text-white border-white/20' },
      { label: 'Portail',       style: 'bg-white/15 text-white border-white/20' },
    ],
    client: 'Veltrix RH',
    desc: 'Outil de gestion RH interne avec espace collaborateur, suivi des conges et onboarding digitalise.',
    stack: ['React', 'Supabase', 'PDF auto'],
    result: '+60% satisfaction employes',
    resultIcon: '📈',
  },
  {
    icon: TrendingUp,
    gradient: 'from-cyan-600 via-blue-600 to-sky-600',
    glowColor: 'shadow-cyan-500/20',
    iconBg: 'bg-white/20',
    tags: [
      { label: 'Integration IA', style: 'bg-white/15 text-white border-white/20' },
      { label: 'Reporting',      style: 'bg-white/15 text-white border-white/20' },
    ],
    client: 'Datastep Finance',
    desc: 'Agent IA de traitement de factures PDF + dashboard financier consolide pour un cabinet de conseil.',
    stack: ['Python', 'Claude API', 'Notion'],
    result: '200+ docs traites/mois auto.',
    resultIcon: '🤖',
  },
]

export default function Realisations() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="realisations" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-3 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl text-white mb-3">
              Exemples de realisations
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Des projets concrets qui illustrent notre approche et nos resultats.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 self-start md:self-auto whitespace-nowrap backdrop-blur-sm">
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
                  tiltMaxAngleX={12}
                  tiltMaxAngleY={12}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  glareBorderRadius="1.25rem"
                  scale={1.02}
                  transitionSpeed={400}
                  className={`rounded-[1.25rem] shadow-2xl ${p.glowColor}`}
                >
                  <div className={`relative h-full bg-gradient-to-br ${p.gradient} rounded-[1.25rem] overflow-hidden`}>
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-[1px]" />

                    {/* Noise texture */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
                    }} />

                    {/* Decorative circles */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.06]" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/[0.04]" />

                    {/* Content */}
                    <div className="relative p-7">
                      {/* Icon + Tags row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${p.iconBg} backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                        </div>
                        <div className="flex gap-2">
                          {p.tags.map(t => (
                            <span key={t.label} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${t.style}`}>
                              {t.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-xl text-white mb-2">{p.client}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-6">{p.desc}</p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.stack.map(s => (
                          <span key={s} className="text-[11px] font-medium text-white/50 bg-white/10 border border-white/10 rounded-lg px-2.5 py-1 backdrop-blur-sm">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/10 mb-5" />

                      {/* Result badge */}
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                        <span className="text-lg">{p.resultIcon}</span>
                        <span className="text-sm font-semibold text-white">{p.result}</span>
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
