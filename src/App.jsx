import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Trophy, GraduationCap, ShieldCheck, Star, Rocket, Target, Building2, Globe2, Cpu, Crown, CalendarDays, Gift, Camera, CheckCircle2, Compass, LayoutGrid, IndianRupee, TrendingUp, ChevronLeft, ChevronRight, Play, ExternalLink, Briefcase, Clock } from 'lucide-react'

function Nav() {
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-100 via-fuchsia-50 to-white" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] grid lg:grid-cols-2 items-center gap-10 py-16 lg:py-24">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-5"
              >
                <Crown className="h-3.5 w-3.5 text-violet-600" />
                Built by FAANG engineers • Apple-grade experience
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
              >
                ASCA — The Advanced School of Computer & AI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-5 text-lg sm:text-xl text-gray-800 leading-relaxed"
              >
                Replace lectures with real-world creation. Learn from engineers who ship at Google, Meta, and top AI labs. Build a portfolio that gets you hired globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <a href="#seat" className="inline-flex justify-center items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Trophy className="h-5 w-5" />
                  Register for SEAT
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#tracks" className="inline-flex justify-center items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-base font-semibold border border-black/10 hover:bg-gray-50 transition-all">
                  <Target className="h-5 w-5 text-violet-600" />
                  Explore Tracks
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

function Section({ id, emoji, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">{emoji}</span>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">{subtitle}</p>
          )}
        </div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function Mentors() {
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
              <div className="relative p-6 sm:p-8 flex items=end h-[320px]">
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

function Tracks() {
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
                <div className="relative h-28 md:h/full">
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

function Outcomes() {
  const companies = ['Google','Amazon','Microsoft','Meta','Apple','Uber','Stripe','Netflix','Bytedance','NVIDIA','Dropbox','Adobe','Airbnb','Salesforce','Atlassian','Spotify','Intel','Oracle']
  const statCards = [
    { label: 'Average Package', value: '₹25 LPA', icon: IndianRupee, tone: 'from-emerald-500 to-teal-500' },
    { label: 'Highest Stipend', value: '₹4.5 Lakh/mo', icon: TrendingUp, tone: 'from-amber-500 to-orange-500' },
    { label: 'Highest Package', value: '₹1 Crore', icon: Trophy, tone: 'from-violet-600 to-fuchsia-600' },
    { label: 'International Offers', value: '15+', icon: Globe2, tone: 'from-sky-500 to-blue-600' }
  ]

  const baseTestimonials = [
    { id: 't1', name: 'Ishita • Frontend @ Airbnb', role: 'Design Systems', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', quote: 'Weekly critiques sharpened my taste. I built reusable systems that shipped to production.' },
    { id: 't2', name: 'Arjun • Systems @ Uber', role: 'Distributed Systems', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80', quote: 'I learned to reason about trade-offs and write design docs that actually get approved.' },
    { id: 't3', name: 'Nidhi • ML @ NVIDIA', role: 'Applied AI', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80', quote: 'Hands-on mentorship made research engineering feel approachable and fun.' },
    { id: 't4', name: 'Ravi • Backend @ Stripe', role: 'Platforms', avatar: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=200&q=80', quote: 'Code reviews were brutal in the best way. My bar for quality jumped massively.' },
    { id: 't5', name: 'Neha • SRE @ Microsoft', role: 'Reliability', avatar: 'https://images.unsplash.com/photo-1546456073-6712f79251bb?auto=format&fit=crop&w=200&q=80', quote: 'Learned incident runbooks, on-call discipline, and practical automation.' },
    { id: 't6', name: 'Yash • GSoC @ CNCF', role: 'Open Source', avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80', quote: 'Got my first major PR merged and learned how to collaborate asynchronously.' },
  ]

  const textTestimonials = React.useMemo(() => {
    const copies = 3
    const out = []
    for (let i = 0; i < copies; i++) {
      baseTestimonials.forEach((t, idx) => {
        out.push({ ...t, id: `${t.id}_${i}`, name: i === 0 ? t.name : t.name.replace('•', `• ${i+1}×`) })
      })
    }
    return out
  }, [])

  const spanPattern = [7, 5, 5, 7, 8, 4, 4, 8, 6, 6]

  const spanClass = (n) => {
    switch (n) {
      case 4: return 'md:col-span-4';
      case 5: return 'md:col-span-5';
      case 6: return 'md:col-span-6';
      case 7: return 'md:col-span-7';
      case 8: return 'md:col-span-8';
      case 9: return 'md:col-span-9';
      case 10: return 'md:col-span-10';
      case 11: return 'md:col-span-11';
      case 12: return 'md:col-span-12';
      default: return 'md:col-span-6';
    }
  }

  const visibleCountForRows = React.useMemo(() => {
    let rows = 1
    let width = 0
    let count = 0
    for (let i = 0; i < textTestimonials.length; i++) {
      const span = spanPattern[i % spanPattern.length]
      if (width + span > 12) {
        rows += 1
        width = 0
      }
      if (rows > 3) break
      width += span
      count += 1
    }
    return count
  }, [textTestimonials])

  const [expanded, setExpanded] = React.useState(false)
  const itemsToRender = expanded ? textTestimonials : textTestimonials.slice(0, visibleCountForRows)

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

        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What our students say</h3>

          <div className="relative">
            <div className="w-full grid grid-cols-12 gap-4">
              {itemsToRender.map((t, idx) => {
                const span = spanPattern[idx % spanPattern.length]
                return (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: (idx % 6) * 0.03 }}
                    className={`col-span-12 ${spanClass(span)} relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 opacity-20" />
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <img src={t.avatar} alt={t.name} className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-white shadow-sm flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</div>
                          <div className="text-xs text-gray-600 leading-tight">{t.role}</div>
                          <p className="mt-3 text-sm text-gray-700 leading-relaxed">“{t.quote}”</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent opacity-95 transition-opacity duration-700" />
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
            >
              {expanded ? 'Show less' : 'Show more...'}
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  )
}

function TalentClubCard() {
  const companies = [
    { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'Meta', logo: 'https://logo.clearbit.com/meta.com' },
    { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
    { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
    { name: 'Uber', logo: 'https://logo.clearbit.com/uber.com' },
    { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
    { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
    { name: 'Airbnb', logo: 'https://logo.clearbit.com/airbnb.com' },
    { name: 'NVIDIA', logo: 'https://logo.clearbit.com/nvidia.com' },
    { name: 'Adobe', logo: 'https://logo.clearbit.com/adobe.com' },
    { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
    { name: 'Atlassian', logo: 'https://logo.clearbit.com/atlassian.com' },
    { name: 'Spotify', logo: 'https://logo.clearbit.com/spotify.com' },
    { name: 'Intel', logo: 'https://logo.clearbit.com/intel.com' },
  ]

  const Row = ({ reverse = false, speed = 30, offset = 0 }) => (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        style={{
          animation: `marqueeRow ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          paddingLeft: offset,
        }}
      >
        {[...companies, ...companies].map((c, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2 bg-white/60 border border-black/5 rounded-xl shadow-sm">
            <img src={c.logo} alt={c.name} className="h-6 w-6 object-contain" />
            <span className="text-sm font-medium text-gray-700">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="relative py-16 sm:py-20" aria-label="Talent Club">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-72 w-72 bg-gradient-to-br from-violet-300/30 via-fuchsia-300/30 to-orange-300/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-gradient-to-tr from-cyan-300/30 via-sky-300/30 to-blue-300/30 rounded-full blur-3xl" />
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="p-6 sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
                <Crown className="h-3.5 w-3.5 text-violet-600" /> Introducing
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Talent Club{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">by AlgoUniversity</span>
                  <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-600" />
                </span>
              </h3>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                A curated network of HRs and Talent Acquisition leaders who actively support internships and placements via the AlgoUniversity Hiring Tournament.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://algouniversity.com/hiring-tournament"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Learn more
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#seat"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold border border-black/10 hover:bg-gray-50"
                >
                  Join the tournament
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                1100+ companies, warm intros, and direct hiring pipelines.
              </div>
            </div>

            <div className="p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-black/5 bg-gray-50/60">
              <div className="space-y-4">
                <Row reverse={false} speed={28} />
                <Row reverse={true} speed={26} offset={24} />
                <Row reverse={false} speed={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeRow { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-50 via-violet-50 to-transparent" />
        <div className="pointer-events-none absolute -top-20 -right-32 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <Rocket className="h-3.5 w-3.5 text-violet-600" /> Industry-first learning
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Graduate your B.Tech. as <span className="relative inline-flex items-center">
              <span className="text-gray-500/80 line-through decoration-rose-500 decoration-4">Fresher</span>
              <span className="mx-2">→</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500">1.5 years of experience</span>
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-700">Three real stints. One degree. You graduate with a resume that reads like experience, not potential.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-6">
          {/* Left: impact + timeline */}
          <div className="space-y-6">
            {/* Impact strip */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-md">
              <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 opacity-10" />
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow">
                  <Clock className="h-4 w-4" /> Total: 18 months
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-700 px-3 py-1 text-xs border border-violet-100">
                  <ShieldCheck className="h-3.5 w-3.5" /> Paid, mentored work
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs border border-amber-100">
                  <GraduationCap className="h-3.5 w-3.5" /> Mapped to curriculum
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl border border-black/10 bg-gray-50 p-3">
                  <div className="text-xs text-gray-600">After Year 1</div>
                  <div className="mt-1 font-semibold text-gray-900">3‑month internship</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-gray-50 p-3">
                  <div className="text-xs text-gray-600">After Year 2</div>
                  <div className="mt-1 font-semibold text-gray-900">3‑month internship</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-gray-50 p-3">
                  <div className="text-xs text-gray-600">Final Year</div>
                  <div className="mt-1 font-semibold text-gray-900">9–12 months residency</div>
                </div>
              </div>
            </div>

            {/* Timeline cards with numbered markers */}
            <div className="grid gap-4">
              {/* Step 1 */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h/full w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-violet-600">01</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-violet-600" /> After Year 1</div>
                  <div className="mt-1 text-lg font-bold">3‑month internship</div>
                  <p className="mt-1 text-sm text-gray-700">Break into industry with support: ship features, get code reviews, demo impact.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-700 text-xs px-3 py-1 border border-violet-100">
                    <Briefcase className="h-3.5 w-3.5" /> Product / Backend / Frontend
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h/full w-1 bg-gradient-to-b from-fuchsia-500 to-orange-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-fuchsia-600">02</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-fuchsia-600" /> After Year 2</div>
                  <div className="mt-1 text-lg font-bold">Another 3‑month internship</div>
                  <p className="mt-1 text-sm text-gray-700">Own a module, write a short design doc, present to stakeholders, and earn strong letters.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-fuchsia-50 text-fuchsia-700 text-xs px-3 py-1 border border-fuchsia-100">
                    <ShieldCheck className="h-3.5 w-3.5" /> Portfolio growth
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h/full w-1 bg-gradient-to-b from-orange-500 to-rose-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-orange-600">03</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-orange-600" /> Final Year</div>
                  <div className="mt-1 text-lg font-bold">Full‑time industry work experience (9–12 months)</div>
                  <p className="mt-1 text-sm text-gray-700">Embed with a partner team. Real sprints, real on‑call, real impact — before you graduate.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 text-xs px-3 py-1 border border-amber-100">
                    <Building2 className="h-3.5 w-3.5" /> Residency with stipend
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: offer + tracker mockups */}
          <div>
            <div className="relative h-full">
              {/* Offer letter */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-gray-900 text-white p-6 sm:p-8 shadow-2xl">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #7c3aed 0, transparent 40%), radial-gradient(circle at 80% 0%, #db2777 0, transparent 40%), radial-gradient(circle at 80% 80%, #f59e0b 0, transparent 40%)' }} />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs">
                    <Sparkles className="h-3.5 w-3.5" /> Mockup
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Internship Offer</h3>
                  <p className="mt-1 text-sm text-white/80">Congratulations! You are selected for a 3‑month Software Engineering Internship.</p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                      <div className="text-xs text-white/70">Role</div>
                      <div className="text-sm font-semibold">Backend Engineer</div>
                    </div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                      <div className="text-xs text-white/70">Duration</div>
                      <div className="text-sm font-semibold">3 months</div>
                    </div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                      <div className="text-xs text-white/70">Mentor</div>
                      <div className="text-sm font-semibold">Senior SWE @ Partner Co.</div>
                    </div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                      <div className="text-xs text-white/70">Stipend</div>
                      <div className="text-sm font-semibold">₹60,000 / mo</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow">
                      <ShieldCheck className="h-4 w-4" /> Accepted
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold">
                      <Briefcase className="h-4 w-4" /> Start onboarding
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Residency tracker card */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className="absolute -bottom-6 -right-4 w-48 sm:w-56 rotate-6 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                <div className="text-xs text-gray-600">Residency Tracker</div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm font-semibold text-gray-900">
                    <span>Sprint 5</span>
                    <span>82%</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-gray-100">
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500" style={{ width: '82%' }} />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-700">
                  <Building2 className="h-3.5 w-3.5 text-violet-600" /> Partner: StealthAI Labs
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Seat() {
  // Countdown to 15th December
  const [timeLeft, setTimeLeft] = React.useState(() => {
    const now = new Date()
    const year = now.getMonth() > 11 || (now.getMonth() === 11 && now.getDate() > 15) ? now.getFullYear() + 1 : now.getFullYear()
    const target = new Date(year, 11, 15, 0, 0, 0)
    return target.getTime() - now.getTime()
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const year = now.getMonth() > 11 || (now.getMonth() === 11 && now.getDate() > 15) ? now.getFullYear() + 1 : now.getFullYear()
      const target = new Date(year, 11, 15, 0, 0, 0)
      setTimeLeft(target.getTime() - now.getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const blocks = [
    { label: 'Who', value: 'B.Tech / BSc CS & AI aspirants (2025–26)' },
    { label: 'What', value: 'DSA, logic, debugging, systems sense' },
    { label: 'Why', value: 'Scholarships, fast‑track mentorship, prizes' },
  ]

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60))
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))

  return (
    <section id="seat" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8">
            <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 opacity-20" />

            <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" /> Admissions Test
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  Software Engineering Aptitude Test (SEAT)
                </h2>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow">
                  <CalendarDays className="h-4 w-4" /> 15 December
                </div>
                <p className="mt-4 text-white/80 text-lg">A selective assessment for entry into ASCA. Show your problem‑solving, coding fundamentals, and engineering mindset.</p>
              </div>

              <div className="sm:w-[320px] w-full">
                <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                  <div className="text-xs uppercase tracking-wider text-white/70">Countdown to 15 December</div>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {[{label:'Days', value: days}, {label:'Hours', value: hours}, {label:'Minutes', value: minutes}, {label:'Seconds', value: seconds}].map((b) => (
                      <div key={b.label} className="rounded-xl bg-white/5 border border-white/10 px-2 py-2 text-center">
                        <div className="text-xl font-extrabold text-white tabular-nums">{String(b.value).padStart(2,'0')}</div>
                        <div className="text-[10px] uppercase tracking-wide text-white/60">{b.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {blocks.map((b) => (
                <div key={b.label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-white/60">{b.label}</div>
                  <div className="mt-1 text-white font-semibold">{b.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl">
                <Trophy className="h-5 w-5" /> Register for SEAT
              </a>
              <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 font-semibold border border-white/10 hover:bg-white/15">
                <Target className="h-5 w-5 text-fuchsia-300" /> View sample paper
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
              <Gift className="h-4 w-4 text-amber-300" /> Prizes: Singapore trip • MacBook Air • iPad • Exclusive merch • Scholarships up to 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
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

function Footer() {
  return (
    <footer className="py-10 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} AlgoUniversity School of CS & AI (ASCA). All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#seat" className="hover:text-gray-900">SEAT</a>
          <a href="#tracks" className="hover:text-gray-900">Tracks</a>
          <a href="#outcomes" className="hover:text-gray-900">Outcomes</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <Mentors />
      <Tracks />
      <Outcomes />
      <TalentClubCard />
      <Experience />
      <Seat />
      <FinalCTA />
      <Footer />

      <a href="#seat" className="fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 font-semibold shadow-xl hover:shadow-2xl"><Trophy className="h-5 w-5" /> Register for SEAT</a>
    </div>
  )
}
