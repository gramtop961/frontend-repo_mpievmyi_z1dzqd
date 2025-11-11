import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, CheckCircle2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react'

export default function TracksRedesign() {
  const trackData = [
    { key: 'gsoc', tag: 'Open Source', title: 'Google Summer of Code', tone: 'from-emerald-500 to-teal-500', kpis: ['₹2,00,000+ stipend via GSoC','3–5 merged PRs in top OSS orgs','Global mentor recommendation'], projects: ['Kubernetes plugin','PyTorch tooling','Rust CLI utility'] },
    { key: 'icpc', tag: 'Competitive Programming', title: 'ICPC Excellence', tone: 'from-indigo-500 to-fuchsia-500', kpis: ['Top regional ranks','Codeforces 1900+ rating','On-site finals preparation'], projects: ['Contest notebook','Problemset analyzer','CP visualizer'] },
    { key: 'hcup', tag: 'AI + Problem Solving', title: 'Meta Hacker Cup', tone: 'from-sky-500 to-blue-600', kpis: ['Top 10% through Round 2','50+ AI/DS problems solved','Modern ML systems intuition'], projects: ['Search reranker','Vector DB playground','LLM eval harness'] },
    { key: 'hft', tag: 'Quant & Systems', title: 'HFT Quant Track', tone: 'from-amber-500 to-orange-600', kpis: ['2–4 LPA internship stipend','C++ low-latency projects','Offers 50+ LPA potential'], projects: ['Order book simulator','Tick data pipeline','Backtesting engine'] },
  ]

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-50/80 via-sky-50/40 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm mb-3">
            <Target className="h-3.5 w-3.5 text-cyan-600" /> Tracks — redesigned with clear outcomes
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">Pick a path. Know exactly what you’ll achieve.</h3>
          <p className="mt-2 text-gray-700">Each card spells out the tangible KPIs, sample projects, and what “done” looks like for the year.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trackData.map((t, idx) => (
            <motion.div key={t.key} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.04 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-lg">
              <div className={`absolute inset-x-0 -top-8 h-20 bg-gradient-to-r ${t.tone} opacity-15`} />
              <div className="p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-1 text-[11px] font-semibold shadow"><Compass className="h-3.5 w-3.5" /> {t.tag}</div>
                <h4 className="mt-3 text-lg font-bold text-gray-900">{t.title}</h4>
                <div className="mt-3">
                  <div className="text-xs font-semibold text-gray-600 tracking-wide">Year outcome</div>
                  <ul className="mt-2 space-y-1.5">
                    {t.kpis.map((k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-gray-800"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" /> {k}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <div className="text-xs font-semibold text-gray-600 tracking-wide">Sample projects</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.projects.map((p) => (
                      <span key={p} className="inline-flex items-center gap-1 rounded-full bg-gray-50 text-gray-800 px-2.5 py-1 text-xs border border-black/10"><Rocket className="h-3.5 w-3.5 text-violet-600" /> {p}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a href="#seat" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-3 py-1.5 text-sm font-semibold border border-black/10 hover:bg-gray-50">Join this track <ArrowRight className="h-4 w-4" /></a>
                  <div className="text-[11px] text-gray-500">Switch next year if goals change</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-800"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Success is measured on outcomes: KPIs completed, projects shipped, reviews passed.</div>
            <a href="#seat" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Get started <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
