'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

/* ──────────────────────────────────────────────
   Dashboard card contents — detailed SVG widgets
   ────────────────────────────────────────────── */

function BarChartWidget() {
  const bars = [
    { h: 35, color: '#c7d2fe' },
    { h: 55, color: '#a5b4fc' },
    { h: 45, color: '#c7d2fe' },
    { h: 75, color: '#818cf8' },
    { h: 60, color: '#a5b4fc' },
    { h: 40, color: '#c7d2fe' },
    { h: 65, color: '#818cf8' },
  ]
  return (
    <div className="flex flex-col h-full p-3 justify-between">
      <div>
        <p className="text-[8px] uppercase tracking-wider text-slate-400 mb-0.5">Revenue</p>
        <p className="text-[16px] font-bold text-slate-800 leading-tight">$34 021</p>
      </div>
      <div className="flex items-end gap-[2px] h-10 mt-1">
        {bars.map((b, i) => (
          <div key={i} className="flex-1 rounded-[2px]" style={{ height: `${b.h}%`, backgroundColor: b.color }} />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[6px] text-slate-300">Mon</span>
        <span className="text-[6px] text-slate-300">Sun</span>
      </div>
    </div>
  )
}

function DonutWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      <svg viewBox="0 0 80 80" className="w-14 h-14">
        <circle cx="40" cy="40" r="30" fill="none" stroke="#f0eef5" strokeWidth="7" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#c084fc" strokeWidth="7"
          strokeDasharray="122 189" strokeLinecap="round"
          transform="rotate(-90 40 40)" />
        <text x="40" y="43" textAnchor="middle" className="text-[13px] font-bold" fill="#7c3aed">65%</text>
      </svg>
      <span className="text-[8px] text-slate-400 mt-1">Conversion</span>
    </div>
  )
}

function LineChartWidget() {
  return (
    <div className="flex flex-col h-full p-3 justify-between">
      <div>
        <p className="text-[8px] uppercase tracking-wider text-slate-400 mb-0.5">Trends</p>
        <p className="text-[16px] font-bold text-slate-800 leading-tight">1845</p>
      </div>
      <svg viewBox="0 0 100 35" className="w-full h-7 mt-1">
        <defs>
          <linearGradient id="lgFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polyline fill="url(#lgFill)" stroke="none"
          points="0,28 12,26 24,18 38,20 52,8 68,13 82,6 100,10 100,35 0,35" />
        <polyline fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          points="0,28 12,26 24,18 38,20 52,8 68,13 82,6 100,10" />
        <circle cx="52" cy="8" r="2.5" fill="#7c3aed" />
      </svg>
    </div>
  )
}

function ProgressCirclesWidget() {
  const circles = [
    { value: 30, dash: '34 113', color: '#f59e0b' },
    { value: 83, dash: '94 113', color: '#8b7bea' },
    { value: 62, dash: '70 113', color: '#10b981' },
  ]
  return (
    <div className="flex items-center justify-center h-full gap-2 p-2">
      {circles.map(c => (
        <div key={c.value} className="flex flex-col items-center">
          <svg viewBox="0 0 44 44" className="w-9 h-9">
            <circle cx="22" cy="22" r="18" fill="none" stroke="#f0eef5" strokeWidth="3.5" />
            <circle cx="22" cy="22" r="18" fill="none" stroke={c.color} strokeWidth="3.5"
              strokeDasharray={c.dash} strokeLinecap="round" transform="rotate(-90 22 22)" />
            <text x="22" y="25" textAnchor="middle" className="text-[8px] font-bold" fill="#555">{c.value}</text>
          </svg>
        </div>
      ))}
    </div>
  )
}

function RadarWidget() {
  const size = 70, cx = 35, cy = 35, r = 26, pts = 5
  const vals = [0.9, 0.65, 0.85, 0.55, 0.8]
  const pt = (i: number, rad: number) => {
    const a = (Math.PI * 2 * i) / pts - Math.PI / 2
    return `${cx + Math.cos(a) * rad},${cy + Math.sin(a) * rad}`
  }
  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-14 h-14">
        {[0.33, 0.66, 1].map((l, i) => (
          <polygon key={i} fill="none" stroke="#e8e4f0" strokeWidth="0.4"
            points={Array.from({ length: pts }, (_, j) => pt(j, r * l)).join(' ')} />
        ))}
        {Array.from({ length: pts }, (_, i) => (
          <line key={i} x1={cx} y1={cy} x2={Number(pt(i, r).split(',')[0])} y2={Number(pt(i, r).split(',')[1])}
            stroke="#e8e4f0" strokeWidth="0.3" />
        ))}
        <polygon
          fill="rgba(192,132,252,0.2)" stroke="#c084fc" strokeWidth="1.2"
          points={vals.map((v, i) => pt(i, r * v)).join(' ')} />
        {vals.map((v, i) => {
          const [px, py] = pt(i, r * v).split(',')
          return <circle key={i} cx={Number(px)} cy={Number(py)} r="2" fill="#c084fc" />
        })}
      </svg>
      <span className="text-[7px] text-slate-400 mt-0.5">Performance</span>
    </div>
  )
}

function PieWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      <svg viewBox="0 0 56 56" className="w-11 h-11">
        <circle cx="28" cy="28" r="24" fill="#8b7bea" />
        <path d="M28,28 L28,4 A24,24 0 0,1 52,28 Z" fill="#f59e0b" />
        <path d="M28,28 L52,28 A24,24 0 0,1 40,49 Z" fill="#10b981" />
        <circle cx="28" cy="28" r="9" fill="white" />
      </svg>
      <p className="text-[9px] font-bold text-slate-700 mt-1">700,822</p>
      <span className="text-[7px] text-slate-400">Total visits</span>
    </div>
  )
}

function GaugeWidget() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      <svg viewBox="0 0 70 45" className="w-12 h-8">
        <path d="M 6 38 A 28 28 0 0 1 64 38" fill="none" stroke="#f0eef5" strokeWidth="5" strokeLinecap="round" />
        <path d="M 6 38 A 28 28 0 0 1 52 13" fill="none" stroke="#6366f1" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <p className="text-[12px] font-bold text-indigo-600 mt-0.5">78%</p>
      <span className="text-[7px] text-slate-400">Efficiency</span>
    </div>
  )
}

function MiniKpiWidget() {
  const rows = [
    { label: 'Leads', val: '2,340', pct: '+12%', c: '#10b981' },
    { label: 'Deals', val: '187', pct: '+8%', c: '#6366f1' },
    { label: 'Rev.', val: '$42k', pct: '+23%', c: '#f59e0b' },
  ]
  return (
    <div className="flex flex-col justify-center h-full px-3 py-2 gap-[5px]">
      <p className="text-[7px] font-semibold text-slate-400 uppercase tracking-widest">Overview</p>
      {rows.map(r => (
        <div key={r.label} className="flex items-center justify-between">
          <span className="text-[8px] text-slate-400">{r.label}</span>
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-bold text-slate-700">{r.val}</span>
            <span className="text-[7px] font-semibold" style={{ color: r.c }}>{r.pct}</span>
          </div>
        </div>
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
   3D Ribbon Carousel — smooth continuous rotation
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
  const radius = 180

  // Smooth continuous rotation with requestAnimationFrame
  const animate = useCallback((time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time
    const delta = time - lastTimeRef.current
    lastTimeRef.current = time

    if (!isPaused) {
      // ~15 degrees per second for smooth rotation
      setAngle(prev => prev - (delta * 0.015))
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [isPaused])

  useEffect(() => {
    if (!inView) return
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, animate])

  // Compute which dot is active
  const normalizedAngle = (((-angle % 360) + 360) % 360)
  const activeIndex = Math.round(normalizedAngle / step) % count

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full max-w-[360px] mx-auto rounded-3xl p-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #faf9ff 40%, #f5f3ff 100%)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="relative z-10 mb-1">
        <h3 className="font-display font-bold text-lg text-slate-900">Data in Motion</h3>
        <p className="text-slate-400 text-xs">Insights at a glance</p>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-1 justify-end mb-3">
        {panels.map((_, i) => (
          <div
            key={i}
            className="w-[5px] h-[5px] rounded-full transition-all duration-500"
            style={{
              backgroundColor: i === activeIndex ? '#6366f1' : '#cbc5dc',
              transform: i === activeIndex ? 'scale(1.4)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* 3D Carousel container */}
      <div
        className="relative z-10 mx-auto"
        style={{
          perspective: '600px',
          perspectiveOrigin: '50% 45%',
          height: '200px',
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateX(-50%) translateY(-55%) rotateX(8deg) rotateY(${angle}deg)`,
            width: '120px',
            height: '140px',
          }}
        >
          {panels.map((Panel, i) => {
            const a = i * step
            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  width: '120px',
                  height: '140px',
                  transform: `rotateY(${a}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Card with connected ribbon look */}
                <div
                  className="w-full h-full rounded-lg border border-white/60 shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,243,255,0.9) 100%)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 8px rgba(100,80,160,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}
                >
                  <Panel />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-2 flex items-end justify-between">
        <div>
          <p className="text-[12px] font-medium text-slate-500">Dashboards and</p>
          <p className="text-[12px] font-medium text-slate-500">
            Interfaces. <span className="text-indigo-600 font-semibold">Connected.</span>
          </p>
        </div>
        <button
          onClick={() => setAngle(prev => prev - step)}
          className="flex items-center gap-1 text-xs font-medium text-slate-500 border border-slate-200/80 bg-white rounded-full px-3 py-1 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
        >
          Next <span>→</span>
        </button>
      </div>
    </motion.div>
  )
}
