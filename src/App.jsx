import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mentors from './components/Mentors'
import TracksRedesign from './components/TracksRedesign'
import Outcomes from './components/Outcomes'
import TalentClubCard from './components/TalentClubCard'
import Experience from './components/Experience'
import Seat from './components/Seat'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <Mentors />
      {/* Removed legacy Tracks section */}
      <TracksRedesign />
      <Outcomes />
      <TalentClubCard />
      <Experience />
      <Seat />
      <FinalCTA />
      <Footer />

      <a href="#seat" className="fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 font-semibold shadow-xl hover:shadow-2xl"><span className="inline-block">🏆</span> Register for SEAT</a>
    </div>
  )
}
