import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, SERVICES } from "../data/siteData";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import pricing from "../assets/pricing.jpeg";

/* =======================
   HERO IMAGE SLIDER
======================= */

const heroImages = [
  "/src/assets/hero/ac1.jpg",
  "/src/assets/hero/ac2.jpg",
  "/src/assets/hero/ac3.jpg",
  "/src/assets/hero/ac4.jpg",
  "/src/assets/hero/ac5.jpg",
  "/src/assets/hero/ac6.jpg",
  "/src/assets/hero/ac7.jpg",
  "/src/assets/hero/ac8.jpg",
  "/src/assets/hero/ac9.jpg",
  "/src/assets/hero/ac10.jpg",
];

function HeroImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-xl">
      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="AC Service"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
    </div>
  );
}

/* =======================
   MAIN HOME
======================= */

export default function Home() {
  return (
    <div className="relative">

      {/* ================= HERO ================= */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-main leading-tight">
              Reliable AC Services <br />
              <span className="text-accent">Made Simple</span>
            </h1>

            <p className="mt-6 text-muted max-w-xl">
              {SITE.tagline}. Trusted professionals for installation,
              servicing, repair & maintenance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-primary">
                Book Service
              </Link>

              <a href={`tel:${SITE.phone}`} className="btn-outline">
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {/* PRICING CARD */}
            <div className="relative h-80 md:h-[22rem] rounded-xl overflow-hidden shadow-lg">

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${pricing})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

              {/* Content */}
              <div className="relative z-10 p-6 text-white h-full flex flex-col justify-center">
                <h3 className="text-4xl text-center font-semibold mb-6">
                  AC Service Pricing
                </h3>

                <ul className="space-y-3 text-center text-2xl">
                  {[
                    "Split AC Service – ₹499",
                    " AC uninstall – ₹799",

                    "Installation – ₹1,499",
                    "Gas Refill – ₹2,499+",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="price-item"
                      style={{ animationDelay: `${index * 0.25}s` }}
                    >
                      ✔ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>




          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container py-20">
        <h2 className="text-3xl font-semibold text-main mb-10">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              id={s.id}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="border-y border-[var(--border-soft)] py-20">
        <div className="container">
          <h3 className="text-3xl font-semibold text-main mb-10">
            Why Choose Us
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Same Day Service",
              "Certified Technicians",
              "Transparent Pricing",
              "Satisfaction Guaranteed",
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <span className="text-accent font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="container py-20 overflow-hidden">
        <h3 className="text-3xl font-semibold text-main mb-10">
          What Customers Say
        </h3>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">

            {[
              "Great service, very professional and quick response.",
              "Affordable pricing and technician arrived on time.",
              "Very polite staff and excellent AC servicing.",
              "Cooling improved a lot after servicing.",
              "Highly recommended for home AC service.",
              "Quick installation and neat work.",
              "Professional technicians with good knowledge.",
              "On-time service and reasonable price.",
              "Very satisfied with the deep cleaning.",
              "Best AC service in our area."
            ].map((text, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[340px] card p-6"
              >
                <p className="text-muted text-sm mb-3">“{text}”</p>
                <p className="text-accent font-semibold">— Customer</p>
              </div>
            ))}

            {/* duplicate for seamless loop */}
            {[
              "Great service, very professional and quick response.",
              "Affordable pricing and technician arrived on time.",
              "Very polite staff and excellent AC servicing.",
              "Cooling improved a lot after servicing.",
              "Highly recommended for home AC service.",
              "Quick installation and neat work.",
              "Professional technicians with good knowledge.",
              "On-time service and reasonable price.",
              "Very satisfied with the deep cleaning.",
              "Best AC service in our area."
            ].map((text, index) => (
              <div
                key={`dup-${index}`}
                className="min-w-[280px] md:min-w-[340px] card p-6"
              >
                <p className="text-muted text-sm mb-3">“{text}”</p>
                <p className="text-accent font-semibold">— Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="border-t border-[var(--border-soft)] py-14">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-main">
              Need urgent AC service?
            </h4>
            <p className="text-muted text-sm">
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
