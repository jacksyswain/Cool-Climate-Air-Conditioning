import React from "react";
import { Link } from "react-router-dom";
import { SITE, SERVICES } from "../data/siteData";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  return (
    <div className="relative">

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Reliable AC Services <br />
              <span className="text-sky-400">Made Simple</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl">
              {SITE.tagline}. Trusted professionals for installation,
              servicing, repair & maintenance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary">
                Book Service
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="btn-outline"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right visual placeholder */}
          <div className="glass h-64 md:h-80 flex items-center justify-center text-gray-400">
            Hero Image / Animation
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-20">
        <h2 className="text-3xl font-semibold text-white mb-10">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-black/30 border-y border-white/10 py-20">
        <div className="container">
          <h3 className="text-3xl font-semibold text-white mb-10">
            Why Choose Us
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Same Day Service",
              "Certified Technicians",
              "Transparent Pricing",
              "Satisfaction Guaranteed",
            ].map((item, i) => (
              <div key={i} className="glass p-6 text-center">
                <span className="text-sky-400 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20">
        <h3 className="text-3xl font-semibold text-white mb-10">
          What Customers Say
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Ravi"
            text="Great service, very professional and quick response."
          />
          <TestimonialCard
            name="Anita"
            text="Affordable pricing and technician arrived on time."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black/40 border-t border-white/10 py-14">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-white">
              Need urgent AC service?
            </h4>
            <p className="text-gray-400 text-sm">
              Call us now or book instantly online.
            </p>
          </div>

          <Link to="/booking" className="btn-primary">
            Book Technician
          </Link>
        </div>
      </section>
    </div>
  );
}
