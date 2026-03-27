'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

/* ──────────────────────────────────────────────
   Animated dashboard widgets — continuous motion
   ────────────────────────────────────────────── */

function BarChartWidget() {
  const bars = [
    { base: 35, color: '#c7d2fe' },
    { base: 55, color: '#a5b4fc' },
    { base: 45, color: '#c7d2fe' },
    { base: 75, color: '#818cf8' },
    { base: 60, color: '#a5b4fc' },
    { base: 40, color: '#c7d2fe' },
    { base: 65, color: '#818cf8' },
  ]
  return (
    <div className="flex flex-col h-full px-3 py-2 justify-between">
      <div className="flex justify-between items-baseline">
        <p className="text-[7px] uppercase tracking-wider text-slate-400">Revenue</p>
        <motion.p
          className="text-[14px] font-bold text-slate-800"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >$34 021</motion.p>
      </div>
      <div className="flex items-end gap-[2px] h-10">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px]"
            style={{ backgroundColor: b.color }}
            animate={{ height: [`${b.base}%`, `${b.base + 15}%`, `${b.base - 10}%`, `${b.base}%`] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-[5px] text-slate-300">Mon</span>
        <span className="text-[5px] text-slate-300">Sun</span>
      </div>
    </div>
  )
}

function DonutWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      <motion.svg
        viewBox="0 0 80 80" className="w-12 h-12"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="40" cy="40" r="30" fill="none" stroke="#f0eef5" strokeWidth="6" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#c084fc" strokeWidth="6"
          strokeDasharray="70 50 30 39" strokeLinecap="round" />
      </motion.svg>
      <motion.span
        className="text-[10px] font-bold text-violet-600"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >65%</motion.span>
      <span className="text-[6px] text-slate-400">Conversion</span>
    </div>
  )
}

function LineChartWidget() {
  return (
    <div className="flex flex-col h-full px-3 py-2 justify-between">
      <div>
        <p className="text-[7px] uppercase tracking-wider text-slate-400">Trends</p>
        <p className="text-[14px] font-bold text-slate-800">1845</p>
      </div>
      <svg viewBox="0 0 120 30" className="w-full h-6">
        <defs>
          <linearGradient id="lgF" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline fill="url(#lgF)" stroke="none"
          points="0,22 15,20 28,14 42,16 58,6 72,10 88,4 105,8 120,6 120,30 0,30" />
        <polyline fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          points="0,22 15,20 28,14 42,16 58,6 72,10 88,4 105,8 120,6" />
        <motion.circle
          r="2.5" fill="#7c3aed"
          animate={{ cx: [0, 15, 28, 42, 58, 72, 88, 105, 120], cy: [22, 20, 14, 16, 6, 10, 4, 8, 6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function ProgressCirclesWidget() {
  const circles = [
    { value: 30, target: 34, color: '#f59e0b' },
    { value: 83, target: 94, color: '#8b7bea' },
    { value: 62, target: 70, color: '#10b981' },
  ]
  return (
    <div className="flex items-center justify-center h-full gap-2 px-1">
      {circles.map((c, idx) => (
        <div key={c.value} className="flex flex-col items-center">
          <svg viewBox="0 0 44 44" className="w-8 h-8">
            <circle cx="22" cy="22" r="17" fill="none" stroke="#f0eef5" strokeWidth="3" />
            <motion.circle
              cx="22" cy="22" r="17" fill="none" stroke={c.color} strokeWidth="3"
              strokeLinecap="round" transform="rotate(-90 22 22)"
              animate={{ strokeDasharray: [`${c.target - 10} 107`, `${c.target + 5} 107`, `${c.target} 107`] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 }}
            />
            <text x="22" y="25" textAnchor="middle" className="text-[8px] font-bold" fill={c.color}>{c.value}</text>
          </svg>
        </div>
      ))}
    </div>
  )
}

function RadarWidget() {
  const size = 60, cx = 30, cy = 30, r = 22, pts = 5
  const vals1 = [0.9, 0.65, 0.85, 0.55, 0.8]
  const vals2 = [0.7, 0.85, 0.6, 0.8, 0.65]
  const pt = (i: number, rad: number) => {
    const a = (Math.PI * 2 * i) / pts - Math.PI / 2
    return `${cx + Math.cos(a) * rad},${cy + Math.sin(a) * rad}`
  }
  const points1 = vals1.map((v, i) => pt(i, r * v)).join(' ')
  const points2 = vals2.map((v, i) => pt(i, r * v)).join(' ')
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-12 h-12">
        {[0.33, 0.66, 1].map((l, i) => (
          <polygon key={i} fill="none" stroke="#e8e4f0" strokeWidth="0.4"
            points={Array.from({ length: pts }, (_, j) => pt(j, r * l)).join(' ')} />
        ))}
        <motion.polygon
          fill="rgba(192,132,252,0.2)" stroke="#c084fc" strokeWidth="1"
          animate={{ points: [points1, points2, points1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      <span className="text-[6px] text-slate-400 mt-0.5">Performance</span>
    </div>
  )
}

function PieWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-0.5">
      <motion.svg
        viewBox="0 0 50 50" className="w-10 h-10"
        animate={{ rotate: [0, -10, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="25" cy="25" r="22" fill="#8b7bea" />
        <path d="M25,25 L25,3 A22,22 0 0,1 47,25 Z" fill="#f59e0b" />
        <path d="M25,25 L47,25 A22,22 0 0,1 36,44 Z" fill="#10b981" />
        <circle cx="25" cy="25" r="8" fill="white" />
      </motion.svg>
      <motion.p
        className="text-[8px] font-bold text-indigo-600"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >700 822</motion.p>
      <span className="text-[6px] text-slate-400">Total visits</span>
    </div>
  )
}

function GaugeWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-0.5">
      <svg viewBox="0 0 60 38" className="w-10 h-7">
        <path d="M 5 33 A 25 25 0 0 1 55 33" fill="none" stroke="#f0eef5" strokeWidth="4.5" strokeLinecap="round" />
        <motion.path
          d="M 5 33 A 25 25 0 0 1 45 11" fill="none" stroke="#6366f1" strokeWidth="4.5" strokeLinecap="round"
          animate={{ strokeDashoffset: [0, -5, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      <motion.p
        className="text-[11px] font-bold text-indigo-600"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >78%</motion.p>
      <span className="text-[6px] text-slate-400">Efficiency</span>
    </div>
  )
}

function MiniKpiWidget() {
  const rows = [
    { label: 'Leads', val: '2,340', pct: '+12%', c: '#10b981' },
    { label: 'Deals', val: '187', pct: '+8%', c: '#6366f1' },
    { label: 'Revenue', val: '$42k', pct: '+23%', c: '#f59e0b' },
  ]
  return (
    <div className="flex flex-col justify-center h-full px-3 py-1.5 gap-[4px]">
      <p className="text-[6px] font-semibold text-slate-400 uppercase tracking-widest">Overview</p>
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          className="flex items-center justify-between"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        >
          <span className="text-[7px] text-slate-400">{r.label}</span>
          <div className="flex items-center gap-1">
            <span className="text-[8px] font-bold text-slate-700">{r.val}</span>
            <motion.span
              className="text-[6px] font-semibold"
              style={{ color: r.c }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >{r.pct}</motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ──────────────────────────────────────────────
   Carousel panels
   ────────────────────────────────────────────── */

const panels = [
  BarChartWidget,
  DonutWidget,
  LineChartWidget,
  ProgressCirclesWidget,
  RadarWidget,
  PieWidget,
  GaugeWidget,
  MiniKpiWidget,
]

/* ──────────────────────────────────────────────
   3D Tilted Ribbon — blends into page
   ────────────────────────────────────────────── */

export default function DataInMotion() {
  const [angle, setAngle] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const count = panels.length
  const step = 360 / count
  const radius = 200

  // Card dimensions matching reference (wider, shorter — landscape)
  const cardW = 155
  const cardH = 110

  const animate = useCallback((time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time
    const delta = time - lastTimeRef.current
    lastTimeRef.current = time
    if (!isPaused) {
      setAngle(prev => prev - (delta * 0.012))
    }
    rafRef.current = requestAnimationFrame(animate)
  }, [isPaused])

  useEffect(() => {
    if (!inView) return
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, animate])

  const normalizedAngle = (((-angle % 360) + 360) % 360)
  const activeIndex = Math.round(normalizedAngle / step) % count

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full max-w-[400px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header — no card, blends with page */}
      <div className="mb-1">
        <h3 className="font-display font-bold text-lg text-slate-900">Data in Motion</h3>
        <p className="text-slate-400 text-xs">Insights at a glance</p>
      </div>

      {/* Dots */}
      <div className="flex gap-1 justify-end mb-2">
        {panels.map((_, i) => (
          <div
            key={i}
            className="w-[5px] h-[5px] rounded-full transition-all duration-500"
            style={{
              backgroundColor: i === activeIndex ? '#6366f1' : '#d4d0e0',
              transform: i === activeIndex ? 'scale(1.4)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* 3D Tilted Carousel — ribbon effect */}
      <div
        className="relative mx-auto"
        style={{
          perspective: '700px',
          perspectiveOrigin: '50% 35%',
          height: '210px',
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateX(-50%) translateY(-60%) rotateX(16deg) rotateZ(-2deg) rotateY(${angle}deg)`,
            width: `${cardW}px`,
            height: `${cardH}px`,
          }}
        >
          {panels.map((Panel, i) => {
            const a = i * step
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  transform: `rotateY(${a}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div
                  className="w-full h-full rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(230, 225, 245, 0.6)',
                    boxShadow: '0 4px 16px rgba(100, 80, 160, 0.06), 0 1px 3px rgba(100, 80, 160, 0.04)',
                  }}
                >
                  <Panel />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer — blends with page */}
      <div className="mt-1 flex items-end justify-between">
        <div>
          <p className="text-[12px] font-medium text-slate-400">Dashboards and</p>
          <p className="text-[12px] font-medium text-slate-400">
            Interfaces. <span className="text-indigo-600 font-semibold">Connected.</span>
          </p>
        </div>
        <button
          onClick={() => setAngle(prev => prev - step)}
          className="flex items-center gap-1 text-xs font-medium text-slate-400 border border-slate-200 bg-white/80 rounded-full px-3 py-1 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
        >
          Next <span>→</span>
        </button>
      </div>
    </motion.div>
  )
}
