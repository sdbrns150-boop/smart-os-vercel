'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Lock, Clock, Phone } from 'lucide-react'

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
        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 ${
          errors[key] ? 'border-red-400' : 'border-slate-200'
        }`}
      />
      {errors[key] && <p className="text-red-500 text-xs">{errors[key]}</p>}
    </div>
  )

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Colonne gauche ── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 block">
              Contact
            </span>
            <h2 className="font-display font-bold text-4xl text-slate-900 mb-5 leading-tight">
              Décrivez-nous<br />votre projet
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              On répond à chaque demande sous 48h ouvrées. L&apos;appel de découverte est gratuit, sans engagement.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Clock,     text: 'Réponse sous 48h ouvrées' },
                { icon: Phone,     text: 'Appel découverte gratuit · 30 min' },
                { icon: Lock,      text: 'Vos données restent confidentielles. NDA dispo sur demande.' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-indigo-600" strokeWidth={2} />
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Formulaire ── */}
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
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
                    <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Message envoyé !</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Merci pour votre demande. On revient vers vous sous 48h pour organiser un premier appel.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {field('Prénom *',     'prenom',     'text', 'Jean')}
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
                      placeholder="Décrivez votre besoin, vos outils actuels, et ce que vous aimeriez améliorer..."
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 outline-none resize-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 ${
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
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 appearance-none"
                    >
                      <option value="" disabled>Sélectionner une fourchette</option>
                      <option value="lt2k">Moins de 2 000 €</option>
                      <option value="2k5k">2 000 – 5 000 €</option>
                      <option value="5k15k">5 000 – 15 000 €</option>
                      <option value="gt15k">Plus de 15 000 €</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold text-[15px] py-3.5 rounded-xl shadow-md shadow-indigo-200/60 transition-all hover:-translate-y-0.5"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Envoi en cours…
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
