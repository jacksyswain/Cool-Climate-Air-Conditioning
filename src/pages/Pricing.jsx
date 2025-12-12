import React from 'react'

const PRICING = [
  { id: 1, title: 'AC Servicing (Split)', price: '₹499' },
  { id: 2, title: 'AC Installation', price: '₹999' },
  { id: 3, title: 'Gas Refilling', price: '₹1,999+' },
]

export default function Pricing() {
  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
      <div className="container">

        <h1 className="text-3xl font-semibold mb-10 text-[#D4AF37]">
          Pricing
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {PRICING.map((p) => (
            <div
              key={p.id}
              className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="font-semibold text-lg text-[#F2E8C9]">
                {p.title}
              </div>

              <div className="mt-4 text-3xl font-bold text-[#E8C558]">
                {p.price}
              </div>

              <div className="mt-8">
                <button className="px-5 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E3C15A] transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
