import React from 'react'

export default function Footer() {
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
