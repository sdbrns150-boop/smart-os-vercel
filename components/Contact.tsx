'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Lock, Clock, Phone, Sparkles } from 'lucide-react'

type FormData = {
  prenom:    string
  nom:       string
  email:     string
  entreprise:string
  projet:    string
  budget:    string
}

const initForm: FormData = {
  prenom: '', nom: '', email: '', entreprise: '', projet: '', budget: '',
}

export default function Contact() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, amount: 0.15 })
  const [form,    setForm]    = useState<FormData>(initForm)
  const [errors,  setErrors]  = useState<Partial<FormData>>({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.prenom.trim())     e.prenom     = 'Requis'
    if (!form.nom.trim())        e.nom        = 'Requis'
    if (!form.email.trim())      e.email      = 'Requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.entreprise.trim()) e.entreprise = 'Requis'
    if (!form.projet.trim())     e.projet     = 'Requis'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSuccess(true)
    setForm(initForm)
  }

  const field = (label: string, key: keyof FormData, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={ev => { setForm(f => ({ ...f, [key]: ev.target.value })); setErrors(er => ({ ...er, [key]: undefined })) }}
        placeholder={placeholder}
        className={`w-full bg-white/80 backdrop-blur-sm border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 focus:bg-white ${
          errors[key] ? 'border-red-400' : 'border-slate-200'
        }`}
      />
      {errors[key] && <p className="text-red-500 text-xs">{errors[key]}</p>}
    </div>
  )

  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Colonne gauche */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 bg-indigo-50 px-3 py-1 rounded-full">
              Contact
            </span>
            <h2 className="font-display font-bold text-4xl text-slate-900 mb-5 leading-tight">
              Decrivez-nous<br />votre projet
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              On repond a chaque demande sous 48h ouvrees. L&apos;appel de decouverte est gratuit, sans engagement.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Clock,     text: 'Reponse sous 48h ouvrees', color: 'from-indigo-50 to-blue-50' },
                { icon: Phone,     text: 'Appel decouverte gratuit - 30 min', color: 'from-emerald-50 to-green-50' },
                { icon: Lock,      text: 'Vos donnees restent confidentielles. NDA dispo sur demande.', color: 'from-amber-50 to-orange-50' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-start gap-3 group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:shadow-md transition-shadow`}>
                    <Icon className="w-4 h-4 text-indigo-600" strokeWidth={2} />
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['bg-indigo-500', 'bg-violet-500', 'bg-pink-500', 'bg-emerald-500'].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} ring-2 ring-white flex items-center justify-center text-white text-[10px] font-bold`}>
                    {['JD', 'ML', 'AS', 'PB'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <Sparkles key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">50+ projets livres avec succes</p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-10 flex flex-col items-center text-center gap-4 shadow-card"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                    <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Message envoye !</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Merci pour votre demande. On revient vers vous sous 48h pour organiser un premier appel.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 shadow-card flex flex-col gap-5 border border-white/40"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {field('Prenom *',     'prenom',     'text', 'Jean')}
                    {field('Nom *',        'nom',        'text', 'Dupont')}
                  </div>
                  {field('Email professionnel *', 'email', 'email', 'jean@entreprise.com')}
                  {field('Entreprise *',   'entreprise', 'text', 'Nexara SAS')}

                  {/* Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Description du projet *</label>
                    <textarea
                      value={form.projet}
                      onChange={e => { setForm(f => ({ ...f, projet: e.target.value })); setErrors(er => ({ ...er, projet: undefined })) }}
                      rows={4}
                      placeholder="Decrivez votre besoin, vos outils actuels, et ce que vous aimeriez ameliorer..."
                      className={`w-full bg-white/80 backdrop-blur-sm border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none resize-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 focus:bg-white ${
                        errors.projet ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.projet && <p className="text-red-500 text-xs">{errors.projet}</p>}
                  </div>

                  {/* Select budget */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">Budget indicatif</label>
                    <select
                      value={form.budget}
                      onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                      className="w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 appearance-none"
                    >
                      <option value="" disabled>Selectionner une fourchette</option>
                      <option value="lt2k">Moins de 2 000 EUR</option>
                      <option value="2k5k">2 000 - 5 000 EUR</option>
                      <option value="5k15k">5 000 - 15 000 EUR</option>
                      <option value="gt15k">Plus de 15 000 EUR</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="shine w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:opacity-60 text-white font-semibold text-[15px] py-3.5 rounded-xl shadow-lg shadow-indigo-200/60 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" /> Vos informations restent confidentielles. NDA disponible sur demande.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
