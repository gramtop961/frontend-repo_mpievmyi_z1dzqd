import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, CalendarDays, ShieldCheck, GraduationCap, Briefcase, Building2, Sparkles, Clock } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Updated background gradient to differentiate from the hero */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-emerald-50 via-teal-50 to-transparent" />
        <div className="pointer-events-none absolute -top-20 -right-32 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <Rocket className="h-3.5 w-3.5 text-emerald-600" /> Industry-first learning
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Graduate your B.Tech. as <span className="relative inline-flex items-center">
              <span className="text-gray-500/80 line-through decoration-rose-500 decoration-4">Fresher</span>
              <span className="mx-2">→</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500">1.5 years of experience</span>
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-700">Three real stints. One degree. You graduate with a resume that reads like experience, not potential.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr,0.9fr] gap-6">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-md">
              <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-10" />
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow">
                  <Clock className="h-4 w-4" /> Total: 18 months
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs border border-emerald-100">
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

            <div className="grid gap-4">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-emerald-600">01</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-emerald-600" /> After Year 1</div>
                  <div className="mt-1 text-lg font-bold">3‑month internship</div>
                  <p className="mt-1 text-sm text-gray-700">Break into industry with support: ship features, get code reviews, demo impact.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 text-xs px-3 py-1 border border-emerald-100"><Briefcase className="h-3.5 w-3.5" /> Product / Backend / Frontend</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-500 to-cyan-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-teal-600">02</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-teal-600" /> After Year 2</div>
                  <div className="mt-1 text-lg font-bold">Another 3‑month internship</div>
                  <p className="mt-1 text-sm text-gray-700">Own a module, write a short design doc, present to stakeholders, and earn strong letters.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 text-xs px-3 py-1 border border-teal-100"><ShieldCheck className="h-3.5 w-3.5" /> Portfolio growth</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-sky-500" />
                <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-xs font-bold text-cyan-600">03</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900"><CalendarDays className="h-4 w-4 text-cyan-600" /> Final Year</div>
                  <div className="mt-1 text-lg font-bold">Full‑time industry work experience (9–12 months)</div>
                  <p className="mt-1 text-sm text-gray-700">Embed with a partner team. Real sprints, real on‑call, real impact — before you graduate.</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-50 text-sky-700 text-xs px-3 py-1 border border-sky-100"><Building2 className="h-3.5 w-3.5" /> Residency with stipend</div>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="relative h-full">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-gray-900 text-white p-6 sm:p-8 shadow-2xl">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #10b981 0, transparent 40%), radial-gradient(circle at 80% 0%, #14b8a6 0, transparent 40%), radial-gradient(circle at 80% 80%, #06b6d4 0, transparent 40%)' }} />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs"><Sparkles className="h-3.5 w-3.5" /> Mockup</div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Internship Offer</h3>
                  <p className="mt-1 text-sm text-white/80">Congratulations! You are selected for a 3‑month Software Engineering Internship.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><div className="text-xs text-white/70">Role</div><div className="text-sm font-semibold">Backend Engineer</div></div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><div className="text-xs text-white/70">Duration</div><div className="text-sm font-semibold">3 months</div></div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><div className="text-xs text-white/70">Mentor</div><div className="text-sm font-semibold">Senior SWE @ Partner Co.</div></div>
                    <div className="rounded-xl bg-white/10 border border-white/10 p-3"><div className="text-xs text-white/70">Stipend</div><div className="text-sm font-semibold">₹60,000 / mo</div></div>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow"><ShieldCheck className="h-4 w-4" /> Accepted</div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold"><Briefcase className="h-4 w-4" /> Start onboarding</div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className="absolute -bottom-6 -right-4 w-48 sm:w-56 rotate-6 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                <div className="text-xs text-gray-600">Residency Tracker</div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm font-semibold text-gray-900"><span>Sprint 5</span><span>82%</span></div>
                  <div className="mt-2 h-2.5 rounded-full bg-gray-100"><div className="h-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500" style={{ width: '82%' }} /></div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-700"><Building2 className="h-3.5 w-3.5 text-emerald-600" /> Partner: StealthAI Labs</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
