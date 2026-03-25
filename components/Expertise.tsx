'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, Globe, Zap, BarChart3, Bot } from 'lucide-react'

const services = [
  {
    icon: Wrench, color: 'bg-indigo-50 text-indigo-600',
    title: 'Outils internes sur-mesure',
    desc: 'CRM maison, back-office, outils RH ou opérationnels — conçus exactement pour votre process, pas pour 1000 clients génériques.',
    span: 'lg:col-span-2',
  },
  {
    icon: Globe, color: 'bg-violet-50 text-violet-600',
    title: 'Portails clients & extranets',
    desc: 'Offrez à vos clients un espace sécurisé : suivi, documents, échanges centralisés.',
    span: '',
  },
  {
    icon: Zap, color: 'bg-amber-50 text-amber-600',
    title: 'Automatisation de workflows',
    desc: 'Réduisez les tâches répétitives. On connecte vos outils et automatise les flux.',
    span: '',
  },
  {
    icon: BarChart3, color: 'bg-emerald-50 text-emerald-600',
    title: 'Dashboards & reporting',
    desc: 'Visualisez vos données métier en temps réel. Exports automatisés, alertes intelligentes.',
    span: '',
  },
  {
    icon: Bot, color: 'bg-pink-50 text-pink-600',
    title: 'Intégration IA & agents',
    desc: 'Agents intelligents, traitement de documents, assistants internes — l\'IA appliquée à vos vrais cas d\'usage.',
    span: '',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Expertise() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="expertise" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 block">
            Nos expertises
          </span>
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">
            Fonctionnalités clés
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Tout ce dont vous avez besoin pour digitaliser votre activité, sans compromis.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ scale: 1.02, y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group bg-white border border-slate-100 rounded-2xl p-7 cursor-default shadow-sm ${s.span}`}
              >
                <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 ${s.color}`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-[17px] text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
