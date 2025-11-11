import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Camera } from 'lucide-react'

export default function Mentors() {
  const mentors = [
    { name: 'Swapnil', tag: 'Ex-Google London • Ex-Apple', photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop', vibe: 'Systems • Distributed • Scale' },
    { name: 'Nikita', tag: 'Ex-Microsoft • Indeed', photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop', vibe: 'Product • Growth • DX' },
    { name: 'Manas', tag: 'Ex-Directi • Quant @ Alphagrep Singapore', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop', vibe: 'C++ • Markets • Low-latency' },
    { name: 'Nalin', tag: 'Ex-Plivo • CTO @ AlgoUniversity', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', vibe: 'AI • Infra • Startups' }
  ]

  return (
    <section id="mentors" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-50/70 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <Crown className="h-3.5 w-3.5 text-amber-600" /> Mentors of ASCA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">Learn from builders treated like celebrities</h2>
          <p className="mt-3 text-lg text-gray-700">At ASCA, every instructor is a world‑class engineer who’s been there and built that.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {mentors.map((m) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
              <div className="absolute inset-0">
                <img src={m.photo} alt={`${m.name} — mentor`} className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative p-6 sm:p-8 flex items-end h-[320px]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 text-white px-3 py-1 text-xs backdrop-blur">
                    <Camera className="h-3.5 w-3.5" /> Featured Mentor
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow">{m.name}</h3>
                  <div className="text-white/90 font-medium">{m.tag}</div>
                  <div className="mt-2 text-sm text-white/80">{m.vibe}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
