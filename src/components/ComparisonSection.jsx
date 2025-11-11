import React from "react";
import { CheckCircle2, XCircle, ArrowRight, Sparkles, Shield, Columns2 } from "lucide-react";

const data = [
  {
    aspect: "Faculty",
    traditional: "Taught by professors focused on theory and exams.",
    asca: "Mentored by FAANG & HFT engineers who build real systems every day.",
  },
  {
    aspect: "Curriculum",
    traditional: "Outdated syllabus, rarely updated with industry trends.",
    asca: "Evolving curriculum built by engineers from Google, Apple, and Quant firms.",
  },
  {
    aspect: "Learning Style",
    traditional: "Lectures, notes, and rote learning.",
    asca: "Project-first, build-driven learning — you ship, not just study.",
  },
  {
    aspect: "Exposure",
    traditional:
      "Students graduate as fresher with upto 2-6 month internship experience at best.",
    asca: "1.5 years of real-world experience via Tracks, internships, and open-source work.",
  },
  {
    aspect: "Specialization",
    traditional: "Everyone learns the same generic syllabus.",
    asca:
      "Choose your Track — GSoC, ICPC, HFT Quant, or Meta AI HackerCup — each year.",
  },
  {
    aspect: "Network",
    traditional: "Peers from the same campus, limited industry connection.",
    asca: "1300+ HRs and 1100+ companies in ASCA’s Talent Club actively hiring.",
  },
  {
    aspect: "Outcome",
    traditional: "Graduate as a fresher, hoping to learn on the job.",
    asca: "Graduate as a ready-to-hire engineer, already trained in modern stacks.",
  },
  {
    aspect: "Placement Quality",
    traditional: "Mass recruiters, ₹3–6 LPA average.",
    asca:
      "₹25 LPA average, ₹1 Cr highest, with offers from Google, JPMC London, Bytedance SG, etc.",
  },
  {
    aspect: "Prestige",
    traditional: "Another degree in the crowd.",
    asca:
      "A badge of excellence built by the same people hiring at top tech firms.",
  },
];

function ColumnBadge({ label, variant = "asca" }) {
  const isAsca = variant === "asca";
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide " +
        (isAsca
          ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-sm"
          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200")
      }
    >
      {isAsca ? <Sparkles size={14} /> : <XCircle size={14} />}
      {label}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative w-full">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl">
          <div className="h-56 w-[42rem] rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
              <Shield size={14} />
              Program Comparison
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Traditional B.Tech. vs
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent"> B.Tech with ASCA</span>
            </h2>
            <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-300">
              See how a build-first approach with real mentors changes the outcome across the things that matter.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1"><Columns2 size={16} /> Side‑by‑side</span>
            <ArrowRight size={16} />
            <span className="font-medium text-indigo-600 dark:text-indigo-400">ASCA Advantage</span>
          </div>
        </div>

        {/* Table wrapper */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white/70 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
          {/* Header row */}
          <div className="grid grid-cols-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:grid-cols-12">
            <div className="px-4 py-4 sm:col-span-4">Aspect</div>
            <div className="px-4 py-4 sm:col-span-4">
              <ColumnBadge label="Traditional" variant="traditional" />
            </div>
            <div className="px-4 py-4 sm:col-span-4">
              <ColumnBadge label="ASCA" variant="asca" />
            </div>
          </div>

          {/* Rows */}
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {data.map((row, idx) => (
              <li
                key={row.aspect}
                className={
                  "grid grid-cols-1 transition-colors sm:grid-cols-12 " +
                  (idx % 2 === 0
                    ? "bg-neutral-50/60 dark:bg-neutral-900/40"
                    : "bg-white/60 dark:bg-neutral-900/20")
                }
              >
                {/* Aspect */}
                <div className="flex items-start gap-3 px-4 py-5 sm:col-span-4">
                  <div className="mt-0.5 hidden text-indigo-500 sm:block dark:text-indigo-400">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">{row.aspect}</div>
                  </div>
                </div>

                {/* Traditional */}
                <div className="px-4 py-5 sm:col-span-4">
                  <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                    <ColumnBadge label="Traditional" variant="traditional" />
                  </div>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">{row.traditional}</p>
                </div>

                {/* ASCA */}
                <div className="px-4 py-5 sm:col-span-4">
                  <div className="flex items-start gap-2">
                    <ColumnBadge label="ASCA" variant="asca" />
                  </div>
                  <p className="mt-2 font-medium text-neutral-900 dark:text-white">{row.asca}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Built for outcomes: mentorship, projects, and hiring network compound over 4 years.
        </p>
      </div>
    </section>
  );
}
