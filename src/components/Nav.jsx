import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 shadow-inner" />
          <span className="font-semibold tracking-tight text-gray-900">AlgoUniversity School of CS & AI</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#why" className="text-gray-600 hover:text-gray-900">Why ASCA</a>
          <a href="#mentors" className="text-gray-600 hover:text-gray-900">Mentors</a>
          <a href="#tracks" className="text-gray-600 hover:text-gray-900">Tracks</a>
          <a href="#outcomes" className="text-gray-600 hover:text-gray-900">Outcomes</a>
          <a href="#seat" className="text-gray-600 hover:text-gray-900">SEAT</a>
        </div>
        <a href="#seat" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
          <Sparkles className="h-4 w-4" />
          <span>Register for SEAT</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
