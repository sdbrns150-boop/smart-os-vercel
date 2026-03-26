'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Award, Clock, Users } from 'lucide-react'

const stats = [
  { icon: Building2, value: '50+',  label: 'Projets livres',    color: 'from-indigo-50 to-violet-50 text-indigo-600' },
  { icon: Award,     value: '98%',  label: 'Taux de satisfaction', color: 'from-emerald-50 to-green-50 text-emerald-600' },
  { icon: Clock,     value: '<24h', label: 'Temps de reponse',  color: 'from-amber-50 to-orange-50 text-amber-600' },
  { icon: Users,     value: '35+',  label: 'Clients actifs',    color: 'from-pink-50 to-rose-50 text-pink-600' },
]

export default function TrustBanner() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Approuve par des entreprises exigeantes
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow`}>
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <p className="font-display font-bold text-3xl text-slate-900 mb-1">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
