import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/siteData";

const PRICING = [
  {
    category: "Split AC",
    items: [
      {
        id: 1,
        title: "Split AC Inspection",
        price: "₹249",
        note: "Basic check-up & diagnosis",
      },
      {
        id: 2,
        title: "Split AC Foam Jet Servicing",
        price: "₹499",
        note: "Deep indoor cleaning, neat & hygienic",
        popular: true,
        warranty: "30-Day Service Warranty",
      },
      {
        id: 3,
        title: "Split AC Installation",
        price: "₹1,499",
        note: "Professional wall-mounted installation",
      },
      {
        id: 4,
        title: "Split AC Gas Refilling",
        price: "₹2,499+",
        note: "R32 / R410A with pressure testing",
        warranty: "2-Month Gas Warranty",
      },
    ],
  },

  {
    category: "Ductable AC",
    items: [
      {
        id: 5,
        title: "Ductable AC Inspection",
        price: "₹499",
        note: "System-wide inspection",
      },
      {
        id: 6,
        title: "Ductable Foam Jet Servicing",
        price: "₹1,499",
        note: "Deep duct & indoor unit cleaning",
        warranty: "30-Day Service Warranty",
      },
      {
        id: 7,
        title: "Ductable AC Installation",
        price: "₹8,999+",
        note: "Professional ducted installation",
      },
      {
        id: 8,
        title: "Ductable AC Gas Refilling",
        price: "₹3,999+",
        note: "Gas charging with leak test",
        warranty: "2-Month Gas Warranty",
      },
    ],
  },

  {
    category: "Cassette AC",
    items: [
      {
        id: 9,
        title: "Cassette AC Inspection",
        price: "₹399",
        note: "Cooling & airflow check",
      },
      {
        id: 10,
        title: "Cassette Foam Jet Servicing",
        price: "₹1,299",
        note: "360° deep foam cleaning",
        warranty: "30-Day Service Warranty",
      },
      {
        id: 11,
        title: "Cassette AC Installation",
        price: "₹5,999+",
        note: "False ceiling installation",
      },
      {
        id: 12,
        title: "Cassette AC Gas Refilling",
        price: "₹3,499+",
        note: "High-pressure gas refill",
        warranty: "2-Month Gas Warranty",
      },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container py-20">

      {/* HEADER */}
      <div className="mb-14 text-center md:text-left">
        <h1 className="text-4xl font-bold text-main mb-3">
          Transparent Pricing
        </h1>
        <p className="text-muted max-w-2xl">
          Split, Ductable & Cassette AC services with clear pricing and service warranties.
        </p>
      </div>

      {/* CATEGORY SECTIONS */}
      {PRICING.map((section, idx) => (
        <div key={idx} className="mb-20">

          {/* CATEGORY TITLE */}
          <h2 className="text-2xl font-semibold text-main mb-8">
            {section.category}
          </h2>

          {/* PRICING GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((p) => (
              <div
                key={p.id}
                className="card p-8 text-center relative hover:scale-[1.03] transition-transform"
              >
                {/* BADGES */}
                <div className="absolute -top-3 left-4 flex gap-2">
                  {p.popular && (
                    <span className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  {p.warranty && (
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                      {p.warranty}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-main mt-6">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm text-muted">
                  {p.note}
                </p>

                {p.warranty && (
                  <p className="mt-2 text-xs text-green-500 font-medium">
                    ✔ Includes {p.warranty}
                  </p>
                )}

                <p className="mt-6 text-4xl font-bold text-sky-400">
                  {p.price}
                </p>

                <p className="text-xs text-muted mt-2">
                  *Prices may vary based on site conditions
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link to="/booking" className="btn-primary">
                    Book Now
                  </Link>

                  <a
                    href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-green-400 hover:underline"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* FOOT NOTE */}
      <div className="mt-10 text-center text-sm text-muted">
        ⚡ Emergency service available • 🛡 Warranty-backed services • 🛠 Certified technicians
      </div>
    </div>
  );
}
