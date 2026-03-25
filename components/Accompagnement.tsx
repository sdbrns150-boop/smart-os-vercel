'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react'

const tiers = [
  {
    icon: CheckCircle2,
    name: 'Essentiel',
    tagline: 'Votre outil tourne, on veille.',
    desc: "Parfait pour les équipes qui ont besoin que leur solution reste stable et à jour après la livraison.",
    features: [
      'Corrections de bugs prioritaires',
      'Mises à jour de sécurité',
      'Monitoring et alertes',
      'Support par email (48h)',
    ],
    cta: 'Choisir Essentiel',
    highlight: false,
    ctaStyle: 'bg-slate-900 hover:bg-slate-800 text-white',
  },
  {
    icon: Zap,
    name: 'Évolution',
    tagline: 'Votre outil grandit avec vous.',
    desc: "Pour les équipes qui veulent continuer à améliorer et étendre leur solution au fil du temps.",
    features: [
      'Tout ce qui est dans Essentiel',
      'Ajout de nouvelles fonctionnalités',
      'Optimisations performances',
      'Points mensuels de roadmap',
      'Support prioritaire (24h)',
    ],
    cta: 'Choisir Évolution',
    highlight: true,
    ctaStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/70',
  },
  {
    icon: ShieldCheck,
    name: 'Partenaire Tech',
    tagline: 'Votre CTO externalisé.',
    desc: "Pour les dirigeants qui veulent déléguer toute la stratégie technique et la roadmap digitale.",
    features: [
      'Tout ce qui est dans Évolution',
      'Stratégie technique & roadmap',
      'Veille technologique',
      'Recrutement tech assisté',
      'Support dédié & astreinte',
    ],
    cta: 'Nous contacter',
    highlight: false,
    ctaStyle: 'bg-slate-900 hover:bg-slate-800 text-white',
  },
]

export default function Accompagnement() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="accompagnement" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 block">
            Accompagnement continu
          </span>
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">
            On ne livre pas et on disparaît.
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Choisissez le niveau d&apos;implication qui correspond à l&apos;ambition de votre projet.
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
                className={`relative rounded-2xl p-8 flex flex-col ${
                  t.highlight
                    ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200/60 scale-[1.02]'
                    : 'bg-white border border-slate-100 shadow-sm'
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-[11px] font-bold px-3 py-1 rounded-full">
                      Le plus choisi
                    </span>
                  </div>
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                  t.highlight ? 'bg-white/20' : 'bg-indigo-50'
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
                  className={`w-full text-center font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5 ${
                    t.highlight
                      ? 'bg-white text-indigo-700 hover:bg-indigo-50'
                      : t.ctaStyle
                  }`}
                >
                  {t.cta}
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
          Tous les paliers sont définis sur-mesure lors du devis. Pas de surprise.
        </motion.p>
      </div>
    </section>
  )
}
