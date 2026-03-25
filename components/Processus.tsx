'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Search, FileText, Code2, Rocket } from 'lucide-react'

const steps = [
  { n: '01', icon: Phone,    title: 'Découverte',  desc: 'Appel gratuit de 30 min pour comprendre votre besoin, votre contexte et vos contraintes.' },
  { n: '02', icon: Search,   title: 'Analyse',     desc: 'Audit de vos process existants, définition du périmètre et des livrables attendus.' },
  { n: '03', icon: FileText, title: 'Devis',       desc: 'Proposition détaillée avec planning, jalons et prix fixe — sans surprise.' },
  { n: '04', icon: Code2,    title: 'Build',       desc: 'Développement itératif avec points hebdomadaires et accès aux avancées en temps réel.' },
  { n: '05', icon: Rocket,   title: 'Livraison',   desc: 'Déploiement, formation, documentation complète et support post-lancement inclus.' },
]

export default function Processus() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="processus" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 block">
            Notre méthode
          </span>
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">
            Un engagement simple, de A à Z
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Chaque projet suit un cadre clair, conçu pour vous donner visibilité et confiance à chaque étape.
          </p>
        </motion.div>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          {/* Ligne connectrice */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Cercle numéroté */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white border-2 border-indigo-100 shadow-lg shadow-indigo-100/50 flex flex-col items-center justify-center mb-6 group-hover:border-indigo-400 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-600 mb-0.5" strokeWidth={1.8} />
                    <span className="text-[10px] font-bold text-indigo-400 tracking-widest">{s.n}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[15px] text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline mobile (verticale) */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-100 shadow-md flex flex-col items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-600" strokeWidth={1.8} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-indigo-100 my-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8 pt-1">
                  <span className="text-[10px] font-bold text-indigo-400 tracking-widest">{s.n}</span>
                  <h3 className="font-display font-semibold text-[16px] text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-200/60 transition-all hover:-translate-y-0.5"
          >
            Démarrer par l&apos;appel découverte gratuit
          </a>
          <p className="text-slate-400 text-sm mt-3">Sans engagement · 30 min · 100% utile</p>
        </motion.div>
      </div>
    </section>
  )
}
