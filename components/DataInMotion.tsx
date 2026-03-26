'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ──────────────────────────────────────────────
   Animated Mini dashboard card contents
   ────────────────────────────────────────────── */

function DonutCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#f1f0f4" strokeWidth="8" />
        <motion.circle
          cx="40" cy="40" r="32" fill="none" stroke="#8b7bea" strokeWidth="8"
          strokeLinecap="round" transform="rotate(-90 40 40)"
          initial={{ strokeDasharray: '0 201' }}
          animate={{ strokeDasharray: '131 201' }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
        <motion.text
          x="40" y="44" textAnchor="middle"
          className="text-[11px] font-semibold" fill="#4338ca"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >65%</motion.text>
      </svg>
      <span className="text-[10px] text-slate-400">Conversion</span>
    </div>
  )
}

function BarChartCard() {
  const bars = [
    { h: 40, color: '#c7d2fe' },
    { h: 65, color: '#a5b4fc' },
    { h: 50, color: '#c7d2fe' },
    { h: 80, color: '#6366f1' },
    { h: 60, color: '#a5b4fc' },
    { h: 45, color: '#c7d2fe' },
    { h: 70, color: '#818cf8' },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 px-3">
      <p className="text-[10px] font-semibold text-slate-500 w-full">Revenue</p>
      <div className="flex items-end gap-[3px] w-full h-12">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ backgroundColor: b.color }}
            initial={{ height: 0 }}
            animate={{ height: `${b.h}%` }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
          />
        ))}
      </div>
      <motion.p
        className="text-[15px] font-bold text-indigo-700 w-full"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >$34 021</motion.p>
    </div>
  )
}

function LineChartCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1 px-3">
      <p className="text-[10px] font-semibold text-slate-500 w-full">Trends</p>
      <motion.p
        className="text-[14px] font-bold text-violet-600 w-full"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >1845</motion.p>
      <svg viewBox="0 0 100 40" className="w-full h-8">
        <defs>
          <linearGradient id="lineGradFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          points="0,30 15,28 25,20 40,22 55,10 70,15 85,8 100,12"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.polyline
          fill="url(#lineGradFill)" stroke="none"
          points="0,30 15,28 25,20 40,22 55,10 70,15 85,8 100,12 100,40 0,40"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </svg>
    </div>
  )
}

function RadarCard() {
  const size = 70
  const cx = size / 2, cy = size / 2, r = 24
  const points = 5
  const values = [0.9, 0.7, 0.85, 0.6, 0.75]

  const getPoint = (i: number, radius: number) => {
    const angle = (Math.PI * 2 * i) / points - Math.PI / 2
    return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius]
  }

  const gridLevels = [0.4, 0.7, 1.0]
  const dataPoints = values.map((v, i) => getPoint(i, r * v).join(',')).join(' ')

  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-14 h-14">
        {gridLevels.map((level, li) => (
          <polygon key={li} fill="none" stroke="#e8e4f0" strokeWidth="0.5"
            points={Array.from({ length: points }, (_, i) => getPoint(i, r * level).join(',')).join(' ')} />
        ))}
        <motion.polygon
          fill="rgba(139,123,234,0.15)" stroke="#8b7bea" strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          points={dataPoints}
          style={{ transformOrigin: 'center' }}
        />
        {values.map((v, i) => {
          const [px, py] = getPoint(i, r * v)
          return (
            <motion.circle
              key={i} cx={px} cy={py} r="2.5" fill="#8b7bea"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
            />
          )
        })}
      </svg>
      <span className="text-[10px] text-slate-400">Performance</span>
    </div>
  )
}

function ProgressCirclesCard() {
  const circles = [
    { value: 30, dash: 34, color: '#f59e0b', label: 'Tasks' },
    { value: 83, dash: 94, color: '#8b7bea', label: 'Goals' },
    { value: 62, dash: 70, color: '#10b981', label: 'KPIs' },
  ]
  return (
    <div className="flex items-center justify-center h-full gap-3">
      {circles.map((c, idx) => (
        <div key={c.label} className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 44 44" className="w-10 h-10">
            <circle cx="22" cy="22" r="18" fill="none" stroke="#f1f0f4" strokeWidth="4" />
            <motion.circle
              cx="22" cy="22" r="18" fill="none" stroke={c.color} strokeWidth="4"
              strokeLinecap="round" transform="rotate(-90 22 22)"
              initial={{ strokeDasharray: '0 113' }}
              animate={{ strokeDasharray: `${c.dash} 113` }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 + idx * 0.2 }}
            />
            <motion.text
              x="22" y="25" textAnchor="middle"
              className="text-[9px] font-bold" fill={c.color}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + idx * 0.2, duration: 0.3 }}
            >{c.value}</motion.text>
          </svg>
          <span className="text-[8px] text-slate-400">{c.label}</span>
        </div>
      ))}
    </div>
  )
}

function GaugeCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      <svg viewBox="0 0 80 50" className="w-16 h-10">
        <path d="M 8 42 A 32 32 0 0 1 72 42" fill="none" stroke="#f1f0f4" strokeWidth="6" strokeLinecap="round" />
        <motion.path
          d="M 8 42 A 32 32 0 0 1 58 14" fill="none" stroke="#6366f1" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <motion.p
        className="text-[13px] font-bold text-indigo-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >78%</motion.p>
      <span className="text-[9px] text-slate-400">Efficiency</span>
    </div>
  )
}

function MiniTableCard() {
  const rows = [
    { label: 'Leads', val: '2,340', change: '+12%', color: '#10b981' },
    { label: 'Deals', val: '187', change: '+8%', color: '#6366f1' },
    { label: 'Revenue', val: '$42k', change: '+23%', color: '#f59e0b' },
  ]
  return (
    <div className="flex flex-col justify-center h-full px-3 gap-[6px]">
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Overview</p>
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
        >
          <span className="text-[9px] text-slate-500">{r.label}</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-slate-700">{r.val}</span>
            <span className="text-[8px] font-medium" style={{ color: r.color }}>{r.change}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function PieCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <motion.circle
          cx="30" cy="30" r="25" fill="#8b7bea"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />
        <motion.path
          d="M30,30 L30,5 A25,25 0 0,1 55,30 Z" fill="#f59e0b"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        />
        <motion.path
          d="M30,30 L55,30 A25,25 0 0,1 43,51 Z" fill="#10b981"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.circle
          cx="30" cy="30" r="10" fill="white"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
      <motion.p
        className="text-[10px] font-semibold text-indigo-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >700,822</motion.p>
      <span className="text-[8px] text-slate-400">Total visits</span>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Card components array
   ────────────────────────────────────────────── */

const cards = [
  BarChartCard,
  DonutCard,
  LineChartCard,
  ProgressCirclesCard,
  RadarCard,
  GaugeCard,
  MiniTableCard,
  PieCard,
]

/* ──────────────────────────────────────────────
   3D Carousel Component
   ────────────────────────────────────────────── */

export default function DataInMotion() {
  const [currentAngle, setCurrentAngle] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const cardCount = cards.length
  const angleStep = 360 / cardCount
  const radius = 160

  // Auto-rotate
  useEffect(() => {
    if (!inView || !isAutoPlaying) return
    intervalRef.current = setInterval(() => {
      setCurrentAngle(prev => prev - angleStep)
      setActiveIndex(prev => (prev + 1) % cardCount)
    }, 2500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [inView, isAutoPlaying, angleStep, cardCount])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentAngle(prev => prev - angleStep)
    setActiveIndex(prev => (prev + 1) % cardCount)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full max-w-[340px] mx-auto bg-white rounded-3xl p-6 shadow-soft border border-slate-100 overflow-hidden"
    >
      {/* Subtle decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-violet-100/30 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-2">
        <h3 className="font-display font-bold text-xl text-slate-900">Data in Motion</h3>
        <p className="text-slate-400 text-sm">Insights at a glance</p>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-1.5 justify-end mb-4">
        {cards.map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              backgroundColor: i === activeIndex ? '#6366f1' : '#e2e0e7',
              scale: i === activeIndex ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* 3D Carousel */}
      <div className="relative z-10" style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}>
        <div className="relative h-[180px] flex items-center justify-center">
          <div
            className="absolute w-[130px] h-[150px]"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `rotateY(${currentAngle}deg)`,
            }}
          >
            {cards.map((CardComponent, i) => {
              const angle = i * angleStep
              return (
                <div
                  key={i}
                  className="absolute inset-0 w-[130px] h-[150px] rounded-xl bg-white border border-slate-100 shadow-md"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <CardComponent />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-4 flex items-end justify-between">
        <div>
          <p className="text-[13px] font-medium text-slate-500">Dashboards and</p>
          <p className="text-[13px] font-medium text-slate-500">Interfaces. <span className="text-indigo-600 font-semibold">Connected.</span></p>
        </div>
        <button
          onClick={handleNext}
          className="flex items-center gap-1 text-sm font-medium text-slate-500 border border-slate-200 rounded-full px-4 py-1.5 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-300"
        >
          Next <span className="text-xs">→</span>
        </button>
      </div>
    </motion.div>
  )
}
