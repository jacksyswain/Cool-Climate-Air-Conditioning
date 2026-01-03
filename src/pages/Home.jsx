import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, SERVICES } from "../data/siteData";
import pricing from "../assets/pricing.jpeg";

/* =======================
   HERO SLIDES
======================= */
import ac1 from "../assets/ac1.png";
import ac2 from "../assets/ac2.png";
import ac3 from "../assets/ac3.png";
import ac4 from "../assets/ac4.png";
import ac5 from "../assets/ac5.png";

const heroSlides = [
  { img: ac1, text: "Outdoor AC Servicing – Complete & Safe" },
  { img: ac2, text: "Professional AC Installation" },
  { img: ac3, text: "Foam Jet AC Cleaning – Neat & Clean" },
  { img: ac4, text: "Expert Technicians You Can Trust" },
  { img: ac5, text: "Gas Refilling with Proper Pressure Check" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  /* Auto hero slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">

      {/* ================= HERO TEXT + PRICING ================= */}
      <section className="min-h-[80vh] flex items-center">
        <div className="container grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-main leading-tight">
              Reliable AC Services <br />
              <span className="text-accent">Made Simple</span>
            </h1>

            <p className="mt-6 text-muted max-w-xl">
              {SITE.tagline}. Trusted professionals for installation,
              servicing, repair & maintenance.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/booking" className="btn-primary">
                Book Service
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn-outline">
                Call Now
              </a>
            </div>
          </div>

          {/* PRICING CARD */}
          <div className="relative h-80 md:h-[22rem] rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url(${pricing})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

            <div className="relative z-10 h-full flex flex-col justify-center text-white p-6">
              <h3 className="text-3xl text-center font-semibold mb-6">
                AC Service Pricing
              </h3>

              <ul className="space-y-3 text-center text-xl">
                <li>✔ Foam Jet Service – ₹499</li>
                <li>✔ AC Uninstall – ₹799</li>
                <li>✔ Installation – ₹1,499</li>
                <li>✔ Gas Refill – ₹2,499+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH IMAGE SLIDER ================= */}
    <section className="w-full py-12 flex justify-center">
  <div className="relative w-full md:w-[80%] h-screen md:h-[70vh] overflow-hidden md:rounded-2xl shadow-xl">

    {heroSlides.map((slide, i) => (
      <div
        key={`slide-${i}`}
        className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
          i === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* 🔹 BACKGROUND FILL (no blank space) */}
        <img
          src={slide.img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        />

        {/* 🔹 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 🔹 FOREGROUND IMAGE (full, no crop) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={slide.img}
            alt={slide.text}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* 🔹 TEXT */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-10">
          <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl mx-4">
            <h3 className="text-white text-lg md:text-3xl font-semibold text-center">
              {slide.text}
            </h3>
          </div>
        </div>
      </div>
    ))}

  </div>
</section>



      {/* ================= SERVICES ================= */}
      <section className="container py-20">
        <h2 className="text-3xl font-semibold text-main mb-10">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="card p-6">
              <h3 className="text-lg font-semibold text-sky-500 mb-2">
                {s.title}
              </h3>
              <p className="text-muted text-sm mb-4">{s.desc}</p>

              <button
                onClick={() => setSelectedService(s)}
                className="text-sky-500 hover:text-sky-600 font-medium"
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICE MODAL ================= */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-sky-500 mb-4">
              {selectedService.title}
            </h3>

            <p className="text-muted leading-relaxed">
              {selectedService.longDesc}
            </p>
          </div>
        </div>
      )}

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
