import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, IndianRupee, TrendingUp, Trophy, Globe2 } from 'lucide-react'

export default function Outcomes() {
  const companies = ['Google','Amazon','Microsoft','Meta','Apple','Uber','Stripe','Netflix','Bytedance','NVIDIA','Dropbox','Adobe','Airbnb','Salesforce','Atlassian','Spotify','Intel','Oracle']
  const statCards = [
    { label: 'Average Package', value: '₹25 LPA', icon: IndianRupee, tone: 'from-emerald-500 to-teal-500' },
    { label: 'Highest Stipend', value: '₹4.5 Lakh/mo', icon: TrendingUp, tone: 'from-amber-500 to-orange-500' },
    { label: 'Highest Package', value: '₹1 Crore', icon: Trophy, tone: 'from-violet-600 to-fuchsia-600' },
    { label: 'International Offers', value: '15+', icon: Globe2, tone: 'from-sky-500 to-blue-600' }
  ]

  return (
    <section id="outcomes" className="relative py-20 sm:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-violet-50/80 via-fuchsia-50/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Proven record. Placement-first.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">Outcomes that speak for themselves</h2>
          <p className="mt-3 text-lg text-gray-700">A global footprint built on real skills and real hiring pipelines.</p>
        </div>

        <div className="mt-8 relative overflow-hidden rounded-3xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-6 whitespace-nowrap will-change-transform" style={{ animation: 'marquee 30s linear infinite' }}>
            {[...companies, ...companies].map((c, i) => (
              <div key={i} className="px-4 py-2 rounded-xl bg-gray-50 border border-black/10 text-sm font-medium text-gray-800 shadow-sm">{c}</div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((s) => (
            <div key={s.label} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
              <div className={`absolute inset-x-0 -top-8 h-24 bg-gradient-to-r ${s.tone} opacity-10`} />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-600">{s.label}</div>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  )
}
