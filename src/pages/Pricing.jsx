import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/siteData";

const PRICING = [
  /* ================= SPLIT AC ================= */
  {
    id: 1,
    title: "Split AC – Inspection",
    price: "₹249",
    note: "Basic AC check-up & diagnosis",
  },
  {
    id: 2,
    title: "Split AC – Foam Jet Servicing",
    price: "₹499",
    note: "Deep indoor cleaning, neat & hygienic",
    popular: true,
    warranty: "30-Day Service Warranty",
  },
  {
    id: 3,
    title: "Split AC – Installation",
    price: "₹1,499",
    note: "Professional split AC installation",
  },
  {
    id: 4,
    title: "Split AC – Uninstallation",
    price: "₹799+",
    note: "Safe dismantling without damage",
  },
  {
    id: 5,
    title: "Split AC – Gas Refilling",
    price: "₹2,499+",
    note: "R32 / R410A gas with pressure testing",
    warranty: "2-Month Gas Warranty",
  },

  /* ================= DUCTABLE AC ================= */
  {
    id: 6,
    title: "Ductable AC – Installation",
    note: "Commercial & industrial ductable AC installation",
    trBased: true,
  },
  {
    id: 7,
    title: "Ductable AC – Foam Jet Servicing",
    note: "Deep duct & blower cleaning",
    warranty: "30-Day Service Warranty",
    trBased: true,
  },
  {
    id: 8,
    title: "Ductable AC – Gas Refilling",
    note: "Gas charging with leak & pressure test",
    warranty: "2-Month Gas Warranty",
    trBased: true,
  },

  /* ================= CASSETTE AC ================= */
  {
    id: 9,
    title: "Cassette AC – Installation",
    note: "False ceiling cassette AC installation",
    trBased: true,
  },
  {
    id: 10,
    title: "Cassette AC – Foam Jet Servicing",
    note: "Four-way airflow deep cleaning",
    warranty: "30-Day Service Warranty",
    trBased: true,
  },
  {
    id: 11,
    title: "Cassette AC – Gas Refilling",
    note: "High-capacity gas charging",
    warranty: "2-Month Gas Warranty",
    trBased: true,
  },
];

export default function Pricing() {
  return (
    <div className="container py-20">

      {/* ================= HEADER ================= */}
      <div className="mb-14 text-center md:text-left">
        <h1 className="text-4xl font-bold text-main mb-3">
          Transparent Pricing
        </h1>
        <p className="text-muted max-w-2xl">
          Honest pricing with no hidden charges.  
          Split, Ductable & Cassette AC services handled by experts.
        </p>
      </div>

      {/* ================= PRICING GRID ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRICING.map((p) => (
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

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-main mt-6">
              {p.title}
            </h3>

            {/* NOTE */}
            <p className="mt-3 text-sm text-muted">
              {p.note}
            </p>

            {/* WARRANTY TEXT */}
            {p.warranty && (
              <p className="mt-2 text-xs text-green-500 font-medium">
                ✔ Includes {p.warranty}
              </p>
            )}

            {/* PRICE / TR TEXT */}
            {p.trBased ? (
              <p className="mt-6 text-lg font-semibold text-sky-400">
                Pricing depends on TR & site conditions
              </p>
            ) : (
              <p className="mt-6 text-4xl font-bold text-sky-400">
                {p.price}
              </p>
            )}

            <p className="text-xs text-muted mt-2">
              *Final pricing confirmed after site inspection
            </p>

            {/* ACTIONS */}
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

      {/* ================= FOOT NOTE ================= */}
      <div className="mt-14 text-center text-sm text-muted">
        ⚡ Emergency service available • 💯 Satisfaction guaranteed • 🛠️ Certified technicians
      </div>
    </div>
  );
}
