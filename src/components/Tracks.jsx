import React from 'react'
import { motion } from 'framer-motion'
import { Compass, LayoutGrid, CheckCircle2 } from 'lucide-react'

export default function Tracks() {
  const intro = { title: 'Tracks — choose your focus each year', blurb: 'Each year, you pick ONE track to go deep in. This keeps your learning personalized and outcome‑driven, while giving you flexibility to switch next year.' }
  const tracks = [
    { key: 'gsoc', name: 'Google Summer of Code (GSoC) Track', desc: 'Contribute to world‑class open‑source projects and build a global engineering footprint.', outcome: 'Outcome: ₹2,00,000 internship stipend via GSoC', image: 'https://images.unsplash.com/photo-1564931768730-7e4d8e240044?auto=format&fit=crop&q=80&w=1600', alt: 'GSoC Logo', mentor: { name: 'Mentor Name', tag: 'Ex-Google • Open Source', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' } },
    { key: 'icpc', name: 'Competitive Programming Track', desc: 'Train for the olympics of programming with intense problem‑solving drills.', outcome: 'Outcome: ACM ICPC top ranks', image: 'https://images.unsplash.com/photo-1578825045767-90e7146143c7?auto=format&fit=crop&q=80&w=1600', alt: 'ACM ICPC Logo', mentor: { name: 'Mentor Name', tag: 'ICPC World Finalist', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80' } },
    { key: 'hcup', name: 'Facebook AI HackerCup Track', desc: 'Master modern AI thinking and competitive problem solving in Meta’s premier challenge.', outcome: 'Outcome: Learn the latest AI • 40 of top 100 world ranks by AlgoUniversity students', image: 'https://images.unsplash.com/photo-1655199798186-23a85b12c4e4?auto=format&fit=crop&q=80&w=1600', alt: 'Meta / Facebook Hacker Cup', mentor: { name: 'Mentor Name', tag: 'Ex-Meta • AI', avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80' } },
    { key: 'hft', name: 'HFT Quant Track', desc: 'C++ speed, market microstructure, and systems for top quant/HFT roles.', outcome: 'Outcome: Top jobs with 50+ LPA • 2–4 LPA monthly internship stipend', image: 'https://images.unsplash.com/photo-1567886414030-3bb02517b03b?auto=format&fit=crop&q=80&w=1600', alt: 'Quant finance', mentor: { name: 'Mentor Name', tag: 'Ex-Optiver • C++', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80' } }
  ]

  return (
    <section id="tracks" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-50/80 via-sky-50/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <Compass className="h-3.5 w-3.5 text-cyan-600" /> Choose your speciality each year
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">{intro.title}</h2>
          <p className="mt-3 text-lg text-gray-700">{intro.blurb}</p>
        </div>

        <div className="mt-8 rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
            <LayoutGrid className="h-3.5 w-3.5 text-cyan-600" /> Pick one per year for a personalized journey
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {tracks.map((t, idx) => (
            <motion.div key={t.key} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500" />
              <div className="grid md:grid-cols-[120px,1fr,220px] gap-0">
                <div className="relative h-28 md:h-full">
                  <img src={t.image} alt={t.alt} className="h-full w-full object-contain bg-gray-50 p-4" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-lg sm:text-xl font-semibold text-gray-900">{t.name}</div>
                  <p className="mt-1 text-sm text-gray-700">{t.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan-50 text-cyan-700 text-xs px-3 py-1 border border-cyan-100">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {t.outcome}
                  </div>
                </div>
                <div className="p-5 sm:p-6 border-t md:border-t-0 md:border-l border-black/5 bg-gray-50/60">
                  <div className="text-xs font-medium text-gray-600">Track Mentor</div>
                  <div className="mt-2 flex items-center gap-3">
                    <img src={t.mentor.avatar} alt="Mentor" className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 leading-tight">{t.mentor.name}</div>
                      <div className="text-xs text-gray-600 leading-tight">{t.mentor.tag}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-gray-500">Mentor will lead sprints, reviews and project selection for this track.</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-700">Choose a new track next year or deepen the same one. Your path stays aligned to your goals and outcomes.</div>
      </div>
    </section>
  )
}
