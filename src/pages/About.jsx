import React from "react";
import { SITE } from "../data/siteData";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-20">
      {/* ================= HEADING ================= */}
      <h1 className="text-4xl font-bold text-white mb-6">
        About {SITE.companyName}
      </h1>

      {/* ================= MAIN ABOUT ================= */}
      <div className="glass p-8 max-w-3xl leading-relaxed text-gray-300 space-y-4 mb-12">
        <p>
          <strong className="text-white">{SITE.companyName}</strong> is a
          Hyderabad-based air conditioning service provider committed to
          delivering reliable, affordable, and professional AC solutions for
          homes, offices, and commercial spaces.
        </p>

        <p>
          We specialize in split and window AC installation, regular servicing,
          foam jet deep cleaning, gas refilling, troubleshooting, and preventive
          maintenance. Every service is carried out by trained technicians using
          proper tools, safety standards, and transparent pricing.
        </p>

        <p>
          Our goal is not just to repair ACs, but to improve cooling efficiency,
          extend equipment lifespan, and ensure clean, hygienic air for your
          space through systematic service procedures.
        </p>
      </div>

      {/* ================= SERVICE AREAS ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          📍 Service Areas
        </h2>

        <p className="text-gray-300 max-w-3xl mb-4">
          We provide fast and reliable AC services across major areas of
          Hyderabad, ensuring quick response times and on-site support.
        </p>

        <div className="flex flex-wrap gap-3">
          {SITE.serviceAreas.map((area, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          🛠️ Our Experience
        </h2>

        <p className="text-gray-300 max-w-3xl">
          With years of hands-on experience in the AC service industry, our team
          has handled hundreds of installations, repairs, and maintenance jobs.
          We understand different AC brands, models, and common issues, allowing
          us to diagnose problems quickly and provide effective solutions.
        </p>
      </section>

      {/* ================= TRUST ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          ⭐ Why Customers Trust Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
          {[
            "Certified & Skilled Technicians",
            "Transparent & Honest Pricing",
            "Same-Day Service Availability",
            "Customer Satisfaction First",
          ].map((item, i) => (
            <div
              key={i}
              className="glass p-6 text-center hover:scale-105 transition-transform"
            >
              <p className="text-white font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="glass p-8 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Need reliable AC service today?
          </h3>
          <p className="text-gray-300 text-sm">
            Call us now or book a service online for quick assistance.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={`tel:${SITE.phone}`}
            className="btn-outline"
          >
            Call Now
          </a>

          <Link to="/booking" className="btn-primary">
            Book Service
          </Link>
        </div>
      </section>
    </div>
  );
}
