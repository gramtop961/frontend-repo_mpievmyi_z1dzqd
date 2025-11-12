import React from 'react'
import { motion } from 'framer-motion'
import { Crown, ShieldCheck, Star, Globe2, Building2, Target, ArrowRight, Trophy } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-100 via-fuchsia-50 to-white" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[560px] sm:minh-[640px] lg:min-h-[720px] grid lg:grid-cols-2 items-center gap-10 py-16 lg:py-24">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-5">
                <Crown className="h-3.5 w-3.5 text-violet-600" /> Built by FAANG engineers • Apple-grade experience
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                ASCA — AlgoUniversity School of CS & AI
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="mt-5 text-lg sm:text-xl text-gray-800 leading-relaxed">
                Replace lectures with real-world creation. Learn from engineers who ship at Google, Meta, and top AI labs. Build a portfolio that gets you hired globally.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="#seat" className="inline-flex justify-center items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Trophy className="h-5 w-5" /> Register for SEAT <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#tracks" className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-base font-semibold border border-black/10 hover:bg-gray-50 transition-all">
                  <Target className="h-5 w-5 text-violet-600" /> Explore Tracks
                </a>
              </motion.div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> 1.5 years industry experience</div>
                <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> ₹25L average package</div>
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-blue-600" /> 15+ international offers</div>
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-violet-600" /> Talent Club with 1100+ companies</div>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
