'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Zap, ShieldCheck, ArrowRight } from 'lucide-react'

const tiers = [
  {
    icon: CheckCircle2,
    name: 'Essentiel',
    tagline: 'Votre outil tourne, on veille.',
    desc: "Parfait pour les equipes qui ont besoin que leur solution reste stable et a jour apres la livraison.",
    features: [
      'Corrections de bugs prioritaires',
      'Mises a jour de securite',
      'Monitoring et alertes',
      'Support par email (48h)',
    ],
    cta: 'Choisir Essentiel',
    highlight: false,
  },
  {
    icon: Zap,
    name: 'Evolution',
    tagline: 'Votre outil grandit avec vous.',
    desc: "Pour les equipes qui veulent continuer a ameliorer et etendre leur solution au fil du temps.",
    features: [
      'Tout ce qui est dans Essentiel',
      'Ajout de nouvelles fonctionnalites',
      'Optimisations performances',
      'Points mensuels de roadmap',
      'Support prioritaire (24h)',
    ],
    cta: 'Choisir Evolution',
    highlight: true,
  },
  {
    icon: ShieldCheck,
    name: 'Partenaire Tech',
    tagline: 'Votre CTO externalise.',
    desc: "Pour les dirigeants qui veulent deleguer toute la strategie technique et la roadmap digitale.",
    features: [
      'Tout ce qui est dans Evolution',
      'Strategie technique & roadmap',
      'Veille technologique',
      'Recrutement tech assiste',
      'Support dedie & astreinte',
    ],
    cta: 'Nous contacter',
    highlight: false,
  },
]

export default function Accompagnement() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="accompagnement" className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 bg-indigo-50 px-3 py-1 rounded-full">
            Accompagnement continu
          </span>
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">
            On ne livre pas et on disparait.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choisissez le niveau d&apos;implication qui correspond a l&apos;ambition de votre projet.
          </p>
        </motion.div>

        {/* Tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  t.highlight
                    ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-2xl shadow-indigo-300/40 scale-[1.02] glow-indigo'
                    : 'bg-white border border-slate-100 shadow-soft hover:shadow-card'
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      Le plus choisi
                    </span>
                  </div>
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                  t.highlight ? 'bg-white/15 backdrop-blur-sm' : 'bg-gradient-to-br from-indigo-50 to-violet-50'
                }`}>
                  <Icon className={`w-5 h-5 ${t.highlight ? 'text-white' : 'text-indigo-600'}`} strokeWidth={2} />
                </div>

                <div className="mb-2">
                  <h3 className={`font-display font-bold text-xl mb-1 ${t.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {t.name}
                  </h3>
                  <p className={`text-sm font-medium ${t.highlight ? 'text-indigo-200' : 'text-indigo-600'}`}>
                    {t.tagline}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed mb-6 mt-2 ${t.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {t.desc}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {t.features.map(f => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${t.highlight ? 'text-indigo-100' : 'text-slate-600'}`}>
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.highlight ? 'text-indigo-300' : 'text-indigo-400'}`} strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group w-full text-center font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                    t.highlight
                      ? 'bg-white text-indigo-700 hover:bg-indigo-50 shadow-md'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                  }`}
                >
                  {t.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          Tous les paliers sont definis sur-mesure lors du devis. Pas de surprise.
        </motion.p>
      </div>
    </section>
  )
}
