import React from 'react'
import { SITE, SERVICES } from '../data/siteData'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

export default function Home() {
  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9]">

      {/* HERO SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#52575D] to-[#3A3F44] border-b border-[#6A7077]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E8C558] mb-5">
              {SITE.companyName}
            </h1>

            <p className="text-lg opacity-90 mb-8 max-w-md leading-relaxed">
              {SITE.tagline} — premium AC servicing by certified technicians.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E3C15A] transition"
              >
                Book Now
              </Link>

              <a
                href={`tel:${SITE.phone}`}
                className="px-6 py-3 border border-[#D4AF37] text-[#F2E8C9] rounded-lg hover:bg-[#D4AF3720] transition"
              >
                Call Us
              </a>
            </div>

            <div className="mt-6 text-sm text-[#E8C558] opacity-80">
              Service Areas: {SITE.serviceAreas.join(', ')}
            </div>
          </div>

          {/* IMAGE BOX */}
          <div className="w-full h-64 rounded-lg bg-[#5A6066] border border-[#737A82] flex items-center justify-center text-[#D0D0D0]">
            Add Your Image Here
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-16">
        <h2 className="text-3xl font-semibold mb-8 text-[#D4AF37]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* UPDATED TITLE COLOR */}
              <div className="text-xl font-semibold mb-2 text-[#C89F2A]">
                {s.title}
              </div>

              <div className="text-sm opacity-90">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-[#3A3F44] border-t border-[#6A7077]">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
            Why Choose Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Same Day Service',
              'Certified Technicians',
              'Transparent Pricing',
              'Satisfaction Guarantee',
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-[#4A4F55] rounded-lg border border-[#737A82] text-center shadow-md hover:shadow-lg transition"
              >
                {/* UPDATED CARD TEXT COLOR */}
                <span className="text-[#C89F2A] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-16">
  <h3 className="text-2xl font-semibold mb-8 text-[#D4AF37]">
    What Customers Say
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    <div className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-[#F5EFD5] text-sm leading-relaxed mb-3">
        “Great service, very professional!”
      </div>
      <div className="mt-3 font-semibold text-[#C89F2A]">
        — Ravi
      </div>
    </div>

    <div className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-[#F5EFD5] text-sm leading-relaxed mb-3">
        “Affordable pricing and on-time work.”
      </div>
      <div className="mt-3 font-semibold text-[#C89F2A]">
        — Anita
      </div>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="py-12 bg-[#52575D] border-t border-[#6A7077]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <div className="text-xl font-semibold text-[#E8C558]">
              Need urgent AC repair?
            </div>
            <div className="text-sm opacity-80">
              Call us now: {SITE.phone}
            </div>
          </div>

          <Link
            to="/booking"
            className="px-5 py-3 bg-[#D4AF37] text-black rounded-lg font-semibold hover:bg-[#E3C15A] transition"
          >
            Book a Technician
          </Link>
        </div>
      </section>

    </div>
  )
}
