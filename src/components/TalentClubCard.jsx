import React from 'react'
import { ExternalLink, ArrowRight, Crown } from 'lucide-react'

export default function TalentClubCard() {
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
        style={{ animation: `marqueeRow ${speed}s linear infinite`, animationDirection: reverse ? 'reverse' : 'normal', paddingLeft: offset }}
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
                <a href="https://algouniversity.com/hiring-tournament" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl">
                  Learn more
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a href="#seat" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold border border-black/10 hover:bg-gray-50">
                  Join the tournament
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-600">1100+ companies, warm intros, and direct hiring pipelines.</div>
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
