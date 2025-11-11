import React from "react";
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";

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

function Pill({ children, variant = "asca" }) {
  const isAsca = variant === "asca";
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium " +
        (isAsca
          ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white"
          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200")
      }
    >
      {isAsca ? <Sparkles size={16} /> : <XCircle size={16} />}
      {children}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Difference between Traditional B.Tech. vs B.Tech with ASCA
          </h2>
          <p className="mt-2 max-w-3xl text-neutral-600 dark:text-neutral-300">
            A clear, side-by-side view of what changes when you learn by building with
            top engineers versus memorizing for exams.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>Traditional</span>
            <ArrowRight size={16} />
            <span className="font-medium text-indigo-600 dark:text-indigo-400">ASCA</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm dark:border-neutral-800">
        <div className="grid grid-cols-1 bg-neutral-50 text-sm font-medium text-neutral-600 dark:bg-neutral-900/60 dark:text-neutral-300 sm:grid-cols-12">
          <div className="px-4 py-3 sm:col-span-4">Aspect</div>
          <div className="px-4 py-3 sm:col-span-4">Traditional</div>
          <div className="px-4 py-3 sm:col-span-4">ASCA</div>
        </div>
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {data.map((row) => (
            <li key={row.aspect} className="grid grid-cols-1 sm:grid-cols-12">
              <div className="flex items-start gap-3 px-4 py-4 sm:col-span-4">
                <div className="mt-0.5 hidden text-neutral-400 sm:block">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="font-semibold">{row.aspect}</div>
                </div>
              </div>
              <div className="px-4 py-4 sm:col-span-4">
                <div className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                  <Pill variant="traditional">Traditional</Pill>
                </div>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">{row.traditional}</p>
              </div>
              <div className="px-4 py-4 sm:col-span-4">
                <div className="flex items-start gap-2">
                  <Pill>ASCA</Pill>
                </div>
                <p className="mt-2 font-medium text-neutral-900 dark:text-white">{row.asca}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
