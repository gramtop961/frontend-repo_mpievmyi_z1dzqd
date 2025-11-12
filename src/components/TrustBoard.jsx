import React from 'react'
import { ShieldCheck, Quote } from 'lucide-react'

export default function TrustBoard() {
  const leaders = [
    {
      name: 'Tim Brady',
      role: 'Chief Product Officer at Yahoo!',
      img: 'https://www.ycombinator.com/blog/content/images/2022/04/2018-0313-YC-Event_104-1.jpg',
    },
    {
      name: 'Dr. Mukesh Kumar Verma',
      role: 'Vice Chancellor, CSVTU',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVTXe6WZEPB9N42Em6RxISj37pH0Q0MNV3g&s',
    },
    {
      name: 'Michael Seibel',
      role: 'CEO of Twitch',
      img: 'https://i.insider.com/5f623ff557b7da001ee11feb?width=700',
    },
    {
      name: 'Prafulla Kumar',
      role: 'IAS Officer',
      img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden" id="trust-board">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-50 via-white to-transparent" />
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/3 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 backdrop-blur px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Built with oversight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            <span className="block">A modern university</span>
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500">guided by experienced leaders</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">While everything feels fresh and modern, our academic and product decisions are reviewed by leaders who have built, governed, and scaled at the highest levels. This brings rigor, credibility, and trust.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/90 backdrop-blur shadow-xl">
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 text-emerald-700 border border-emerald-600/20 px-2.5 py-1 text-[11px] font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5" /> Advisor & Oversight
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-gray-900">{p.name}</h3>
                <p className="text-gray-700">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="relative rounded-3xl border border-black/10 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl">
            <Quote className="absolute -top-3 -left-3 h-8 w-8 text-emerald-500" />
            <p className="text-lg sm:text-xl text-gray-800">Under the supervision of these leaders, we uphold academic integrity, safety, and real-world relevance — so students and parents can trust that bold innovation is paired with seasoned judgment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
