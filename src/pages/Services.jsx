import React from 'react'
import { SERVICES } from '../data/siteData'

export default function Services() {
  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
      <div className="container">

        <h1 className="text-3xl font-semibold mb-10 text-[#D4AF37]">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="text-xl font-semibold mb-2 text-[#F2E8C9]">
                {s.title}
              </div>

              <div className="text-sm opacity-90 leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
