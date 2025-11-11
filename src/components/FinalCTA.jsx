import React from 'react'
import { Sparkles } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="register" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-gray-900 text-white p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Build the future. Start at ASCA.</h3>
              <p className="mt-3 text-white/80 text-lg">If you’re the kind of student who wants to build, not just study — this is your place. A modern, premium university for world-class engineers.</p>
            </div>
            <a href="#seat" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl"><Sparkles className="h-5 w-5" /> Register Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
