import React from 'react'
import { motion } from 'framer-motion'
import { Target, Compass, CheckCircle2, Rocket, ArrowRight, ShieldCheck, Trophy, Award, BadgeCheck, Medal } from 'lucide-react'

export default function TracksRedesign() {
  const trackData = [
    { key: 'gsoc', tag: 'Open Source', title: 'Google Summer of Code', tone: 'from-emerald-500 to-teal-500', kpis: ['₹2,00,000+ stipend via GSoC','3–5 merged PRs in top OSS orgs','Global mentor recommendation'], projects: ['Kubernetes plugin','PyTorch tooling','Rust CLI utility'] },
    { key: 'icpc', tag: 'Competitive Programming', title: 'ICPC Excellence', tone: 'from-indigo-500 to-fuchsia-500', kpis: ['Top regional ranks','Codeforces 1900+ rating','On-site finals preparation'], projects: ['Contest notebook','Problemset analyzer','CP visualizer'] },
    { key: 'hcup', tag: 'AI + Problem Solving', title: 'Meta Hacker Cup', tone: 'from-sky-500 to-blue-600', kpis: ['Top 10% through Round 2','50+ AI/DS problems solved','Modern ML systems intuition'], projects: ['Search reranker','Vector DB playground','LLM eval harness'] },
    { key: 'hft', tag: 'Quant & Systems', title: 'HFT Quant Track', tone: 'from-amber-500 to-orange-600', kpis: ['2–4 LPA internship stipend','C++ low-latency projects','Offers 50+ LPA potential'], projects: ['Order book simulator','Tick data pipeline','Backtesting engine'] },
  ]

  // Second set: renamed with two-line titles and year labels + detailed content
  const flowTracks = [
    { key: 't1', primary: 'Open Source', year: 'Year I', tone: 'from-emerald-500 to-teal-500', secondLineClass: 'font-serif italic', outcome: { title: 'Google Summer of Code', desc: '₹2,00,000+ internship stipend from Google; contributions to top OSS orgs' },
      kpis: ['3–5 meaningful PRs merged', 'Active participation in one OSS org', 'Mentor feedback cycle completed'],
      projects: ['Issue triage bot', 'Docs + tooling improvements', 'Plugin for a CNCF project'], outcomeIcon: 'trophy' },
    { key: 't2', primary: 'Competitive Programming', year: 'Year II', tone: 'from-indigo-500 to-fuchsia-500', secondLineClass: 'font-mono italic', outcome: { title: 'ACM ICPC Regionals/World Finals', desc: 'Top-tier algorithmic skills valued by Google, Microsoft, etc.' },
      kpis: ['Codeforces 1700–1900 rating', 'Team practice 2x weekly', 'Mastery of DP/Graphs/Number Theory'],
      projects: ['Contest notebook (CP handbook)', 'Problemset analyzer', 'Visualizer for flows/DSU'], outcomeIcon: 'award' },
    { key: 't3', primary: 'AI & ML', year: 'Year III', tone: 'from-sky-500 to-blue-600', secondLineClass: 'italic tracking-wide', outcome: { title: 'Meta AI HackerCup', desc: 'Aim for top world ranks. Ready for AI startups hiring AI Engineers.' },
      kpis: ['Train/evaluate 3 classic models', 'Implement vector search pipeline', 'Ship an inference API'],
      projects: ['Reranker for search', 'Vector DB playground', 'LLM eval harness'], outcomeIcon: 'badge' },
    { key: 't4', primary: 'Quant Trading', year: 'Year IV', tone: 'from-amber-500 to-orange-600', secondLineClass: 'italic font-semibold', outcome: { title: 'Top-tier HFT Quant Roles', desc: 'Compensation potential 50+ LPA with strong systems + math skills.' },
      kpis: ['End-to-end backtest on a strategy', 'Latency profiling report', 'Risk-managed PnL simulation'],
      projects: ['Order book simulator', 'Tick data pipeline', 'Backtesting engine'], outcomeIcon: 'medal' },
  ]

  const OutcomeIcon = ({ type }) => {
    const common = 'h-4.5 w-4.5';
    switch (type) {
      case 'trophy': return <Trophy className={common + ' text-amber-500'} />
      case 'award': return <Award className={common + ' text-indigo-500'} />
      case 'badge': return <BadgeCheck className={common + ' text-sky-500'} />
      case 'medal': return <Medal className={common + ' text-orange-500'} />
      default: return <Trophy className={common + ' text-gray-400'} />
    }
  }

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-50/80 via-sky-50/40 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Original redesigned tracks with outcomes/KPIs */}
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

        {/* New duplicated block below with relabeled tracks and flow lines */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm mb-3">
              <Target className="h-3.5 w-3.5 text-cyan-600" /> Track flow — from choice to outcome
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Choose your focus <span className="text-cyan-600">now</span>
            </h3>
            <p className="mt-2 text-gray-700">The path branches from here. Each choice leads to a tangible milestone.</p>
          </div>

          {/* Hub with dotted branches to each card */}
          <div className="relative mt-8">
            <div className="mx-auto w-full max-w-5xl">
              {/* Horizontal dotted line (thicker and more prominent) */}
              <div className="hidden lg:block relative h-10">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-gray-400" />
                {/* Center hub node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-cyan-400 shadow ring-4 ring-cyan-100" />
                {/* Vertical connectors to each column (thicker) */}
                <div className="absolute grid grid-cols-4 gap-5 left-0 right-0 top-0 h-full px-2">
                  {[0,1,2,3].map((i) => (
                    <div key={i} className="relative">
                      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 h-6 border-l-2 border-dashed border-gray-400" />
                      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+24px)] h-2 w-2 rounded-full bg-cyan-400/90 ring-2 ring-cyan-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Track cards with detailed content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {flowTracks.map((t, idx) => (
                <motion.div key={t.key} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.04 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-lg">
                  <div className={`absolute inset-x-0 -top-8 h-20 bg-gradient-to-r ${t.tone} opacity-15`} />
                  <div className="p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-1 text-[11px] font-semibold shadow"><Compass className="h-3.5 w-3.5" /> Track</div>
                    <h4 className="mt-3 text-lg font-bold text-gray-900 leading-tight">
                      <span className="block">{t.primary}</span>
                      <span className={`block text-base ${t.secondLineClass}`}>Track</span>
                    </h4>
                    <div className="mt-4">
                      <div className="h-px w-full bg-gray-200" />
                      <div className="mt-2 text-xs font-semibold text-gray-600 tracking-wide">{t.year}</div>
                    </div>

                    {/* Detailed content like section 2 */}
                    <div className="mt-4">
                      <div className="text-xs font-semibold text-gray-600 tracking-wide">Year outcome / goals</div>
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
                  </div>
                  {/* Bottom anchor for dotted line connector */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 h-6 w-px border-l-2 border-dashed border-gray-400 hidden lg:block" />
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-cyan-100" />
                </motion.div>
              ))}
            </div>

            {/* Dotted verticals from each card to outcome cards (thicker + nodes) */}
            <div className="hidden lg:grid grid-cols-4 gap-5 mt-2">
              {[0,1,2,3].map((i) => (
                <div key={i} className="relative">
                  <div className="mx-auto h-10 w-px border-l-2 border-dashed border-gray-400" />
                  <div className="mx-auto -mt-1 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-cyan-100" />
                </div>
              ))}
            </div>

            {/* Outcome cards with neutral titles + icons/badges */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {flowTracks.map((t, idx) => (
                <motion.div key={`${t.key}-out`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  {/* Remove strong gradient header; keep a subtle tint */}
                  <div className="absolute inset-x-0 -top-8 h-20 bg-gradient-to-r from-gray-100 to-gray-50 opacity-80" />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-600 tracking-wide mb-1">
                      <OutcomeIcon type={t.outcomeIcon} />
                      <span>Outcome</span>
                    </div>
                    <h5 className="text-base sm:text-lg font-bold text-gray-900">{t.outcome.title}</h5>
                    <p className="mt-1.5 text-sm text-gray-700">{t.outcome.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
