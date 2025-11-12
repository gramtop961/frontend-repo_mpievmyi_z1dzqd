import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function TaughtBy() {
  const instructors = [
    { name: 'Aarav', tag: 'Senior SWE • Google', photo: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1200&auto=format&fit=crop', vibe: 'Search • Distributed Systems • Go' },
    { name: 'Maya', tag: 'Staff Engineer • Apple', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', vibe: 'iOS • Privacy • Performance' },
    { name: 'Kabir', tag: 'Principal Engineer • Microsoft', photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop', vibe: 'Azure • Cloud • C#' },
    { name: 'Anya', tag: 'Senior Research Eng • Meta', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop', vibe: 'ML Systems • PyTorch • Infra' },
    { name: 'Rohit', tag: 'SDE III • Amazon', photo: 'https://images.unsplash.com/photo-1531123414780-f742bf3cd256?q=80&w=1200&auto=format&fit=crop', vibe: 'Services • Scale • Java' },
    { name: 'Sara', tag: 'Platform Engineer • Netflix', photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', vibe: 'Observability • Reliability • JVM' }
  ]

  return (
    <section id="taught-by" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-50 via-teal-50 to-transparent" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> How you learn here
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Taught by <span className="relative inline-flex items-center">
              <span className="text-gray-500/80 line-through decoration-rose-500 decoration-4">Traditional</span>
              <span className="mx-2">→</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500">real software engineers</span>
            </span>
          </h2>

          <div className="mt-4 space-y-3 text-lg text-gray-800">
            <p>At ASCA, you don’t learn from slides — you learn from engineers at Google, Apple, Microsoft, and top HFT firms who write production code every day.</p>
            <p>They don’t talk about how systems work — they show you how they build them.</p>
            <p>Because here, education isn’t theory — it’s practice.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((m) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
              <div className="absolute inset-0">
                <img src={m.photo} alt={`${m.name} — instructor`} className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative p-6 sm:p-7 flex items-end h-[300px]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 text-white px-3 py-1 text-xs backdrop-blur">
                    Instructor
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white drop-shadow">{m.name}</h3>
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
