import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE, SERVICES } from "../data/siteData";
import pricing from "../assets/pricing.jpeg";
import lg from "../assets/clog1.png";
import samsung from "../assets/clog2.png";
import daikin from "../assets/clog3.png";
import voltas from "../assets/clog4.png";
import bluestar from "../assets/clog5.png";
import hitachi from "../assets/clog6.png";
import panasonic from "../assets/clog7.png";
import godrej from "../assets/clog8.png";
import carrier from "../assets/clog9.png";


import lg1 from "../assets/clog11.png";
import samsung1 from "../assets/clog12.png";
import daikin1 from "../assets/clog13.png";
import voltas1 from "../assets/clog14.png";
import bluestar1 from "../assets/clog15.png";


/* =======================
   HERO SLIDES
======================= */
import ac1 from "../assets/ac1.png";
import ac2 from "../assets/ac2.png";
import ac3 from "../assets/ac3.png";
import ac4 from "../assets/ac4.png";
import ac5 from "../assets/ac5.png";

const statsData = [
  { value: 96, suffix: "+", label: "Successful Projects" },
  { value: 185, suffix: "+", label: "Satisfied Customers" },
  { value: 24, suffix: "+", label: "Expert Technicians" },
  { value: 100, suffix: "%", label: "Quality Services" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time
    const increment = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-sky-500 text-5xl font-bold">
      {count}
      {suffix}
    </span>
  );
}


const heroSlides = [
  { img: ac1, text: "Outdoor AC Servicing – Complete & Safe" },
  { img: ac2, text: "Professional AC Installation" },
  { img: ac3, text: "Foam Jet AC Cleaning – Neat & Clean" },
  { img: ac4, text: "Expert Technicians You Can Trust" },
  { img: ac5, text: "Gas Refilling with Proper Pressure Check" },
];
const brandLogos = [
  lg,
  samsung,
  daikin,
  voltas,
  bluestar,
  hitachi,
  panasonic,
  godrej,
  carrier,
 
  lg1,
  samsung1,
  daikin1,
  voltas1,
  bluestar1,
];
const TESTIMONIALS = [
  {
    name: "Akhil",
    rating: 5,
    text:
      "The best AC service in Hyderabad! They responded quickly to my emergency call and had my Voltas AC up and running within hours. Transparent pricing and outstanding service.",
  },
  {
    name: "Satya",
    rating: 5,
    text:
      "Highly recommend this AC service for reliable and efficient work. The technician was polite and knowledgeable. My Daikin AC is working better than ever.",
  },
  {
    name: "Suresh",
    rating: 5,
    text:
      "Scheduled regular maintenance for my central AC. They were thorough and professional, ensuring my AC runs perfectly.",
  },
  {
    name: "Lasritha",
    rating: 4,
    text:
      "Installed my split AC perfectly. Team arrived on time, worked efficiently, and left no mess behind.",
  },
  {
    name: "Sridhar",
    rating: 5,
    text:
      "Fantastic service! Fixed my AC quickly and explained everything clearly. Very satisfied.",
  },
  {
    name: "Mahesh",
    rating: 4,
    text:
      "Great service at a reasonable price. My window AC noise issue was resolved quickly.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  /* Auto slider */
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
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

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
      {/* ================= STATS / COUNTER SECTION ================= */}
      <section className="py-20 border-t border-[var(--border-soft)]">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

          {statsData.map((item, i) => (
            <div key={i} className="relative">

              {/* NUMBER */}
              <Counter value={item.value} suffix={item.suffix} />

              {/* LABEL */}
              <p className="mt-3 text-lg text-white-700">
                {item.label}
              </p>

              {/* DIVIDER (desktop only) */}
              {i !== statsData.length - 1 && (
                <span className="hidden md:block absolute top-1/2 right-0 h-16 w-px bg-gray-300 -translate-y-1/2" />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>

      {/* ================= SERVICES ================= */}
      <section className="container py-20">
        <h2 className="text-3xl font-semibold text-main mb-10 text-center">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="card overflow-hidden flex flex-col hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-sky-500 mb-2">
                  {s.title}
                </h3>

                <p className="text-muted text-sm mb-4">
                  {s.desc}
                </p>

                <button
                  onClick={() => setSelectedService(s)}
                  className="mt-auto text-sky-500 hover:text-sky-600 font-medium"
                >
                  Learn more →
                </button>
              </div>
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

      {/* ================= BRANDS WE SERVICE ================= */}
<section className="py-20 border-t border-[var(--border-soft)] overflow-hidden">

  <div className="container mb-10 text-center">
    <h3 className="text-3xl font-semibold text-main">
      Brands We Service
    </h3>
    <p className="text-muted mt-2">
      We repair and service all major AC brands
    </p>
  </div>

  <div className="relative w-full overflow-hidden">
    <div className="brand-track flex items-center gap-12">

      {[...brandLogos, ...brandLogos].map((logo, i) => (
        <div
          key={`brand-${i}`}
          className="flex-shrink-0 w-[90px] sm:w-[110px] md:w-[130px] flex items-center justify-center
"
        >
          <img
            src={logo}
            alt="AC Brand"
            className="h-10 sm:h-12 md:h-16 object-contain opacity-90"
          />
        </div>
      ))}

    </div>
  </div>
</section>



      {/* ================= WHY US ================= */}
      <section className="border-y  border-[var(--border-soft)] py-20">
        <div className="container">
          <h3 className="text-3xl font-semibold text-main mb-10 text-center">
            Why Choose Us
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6">
            {[
              "Same Day Service",
              "Certified Technicians",
              "Transparent Pricing",
              "Satisfaction Guaranteed",
            ].map((item, i) => (
              <div
                key={`why-${i}`}
                className="card p-6 text-center hover:scale-105 bg-white transition-transform"
              >
                <span className="text-accent font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
<section className="py-20 overflow-hidden border-t border-[var(--border-soft)]">
  <div className="container mb-10 text-center">
    <h3 className="text-3xl font-semibold text-main">
      What Our Customers Say
    </h3>
    <p className="text-muted mt-2">
      Real feedback from satisfied customers across Hyderabad
    </p>
  </div>

  <div className="relative w-full overflow-hidden">
    <div className="flex gap-10 animate-marquee">

      {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
       <div
  key={`testimonial-${i}`}
  className="
    flex-shrink-0
    w-[85vw]
    sm:w-[65vw]
    md:w-[40vw]
    lg:w-[25vw]
    h-[260px]
    md:h-[300px]
    lg:h-[280px]
    bg-white
    rounded-2xl
    text-center
    p-6
    shadow-lg
    flex
    flex-col
    justify-between
  "
>
          {/* REVIEW TEXT */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            “{t.text}”
          </p>

          {/* FOOTER */}
          <div>
            <h4 className="font-semibold text-purple-700 text-lg mt-6">
              {t.name}
            </h4>

            <div className="flex gap-1 mt-2 text-xl">
              {[...Array(5)].map((_, idx) => (
                <span
                  key={idx}
                  className={idx < t.rating ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
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
