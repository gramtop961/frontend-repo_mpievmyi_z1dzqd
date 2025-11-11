import React from 'react'
import { Sparkles, CalendarDays, Trophy, Target } from 'lucide-react'

export default function Seat() {
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

  const prizes = ['Singapore trip','MacBook Air','iPad','Exclusive merch','Scholarships up to 100%']

  return (
    <section id="seat" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8">
          <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 opacity-20" />

          <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"><Sparkles className="h-3.5 w-3.5 text-fuchsia-300" /> Admissions Test</div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">Software Engineering Aptitude Test (SEAT)</h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow"><CalendarDays className="h-4 w-4" /> 15 December</div>
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
            <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl"><Trophy className="h-5 w-5" /> Register for SEAT</a>
            <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 font-semibold border border-white/10 hover:bg-white/15"><Target className="h-5 w-5 text-fuchsia-300" /> View sample paper</a>
          </div>

          <div className="mt-8 h-px w-full bg-white/10" aria-hidden="true" />

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="flex divide-x divide-white/10">
              {prizes.map((p, idx) => (
                <div key={idx} className="flex-1 py-3 px-3 text-center text-sm font-medium text-white/90">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
