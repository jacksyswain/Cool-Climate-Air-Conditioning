import React from "react";
import { SITE } from "../data/siteData";

export default function Contact() {
  return (
    <div className="container py-20">

      {/* ================= HEADER ================= */}
      <div className="mb-14 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-3">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Need AC installation, servicing, gas refilling, or emergency repair?
          Reach out to <span className="text-white font-medium">{SITE.companyName}</span> —
          we respond fast and deliver reliable service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* ================= CONTACT INFO ================= */}
        <div className="glass p-8 space-y-8">

          <h2 className="text-xl font-semibold text-white">
            Get in Touch
          </h2>

          {/* DETAILS */}
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="text-sm text-gray-400">📍 Address</p>
              <p>{SITE.address}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">📞 Phone</p>
              <a
                href={`tel:${SITE.phone}`}
                className="text-sky-400 hover:underline"
              >
                {SITE.phone}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400">📧 Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sky-400 hover:underline"
              >
                {SITE.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400">💬 WhatsApp</p>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* QUICK ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href={`tel:${SITE.phone}`} className="btn-outline">
              Call Now
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
          </div>

          {/* SERVICE HOURS */}
          <div className="pt-4 text-sm text-gray-400 leading-relaxed">
            🕘 <span className="text-gray-300">Service Hours:</span> 9:00 AM – 9:00 PM (All Days)
            <br />
            ⚡ Emergency AC support available on request
          </div>

          {/* GOOGLE MAP */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Cool Climate Air Conditioning Location"
              src="https://www.google.com/maps?q=17.4626662,78.4571752&z=17&output=embed"
              className="w-full h-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted successfully. Email & WhatsApp integration coming next.");
          }}
          className="glass p-8 space-y-5"
        >
          <h2 className="text-xl font-semibold text-white">
            Send Us a Message
          </h2>

          <p className="text-sm text-gray-400">
            Share your AC issue or service requirement and our team will contact you shortly.
          </p>

          <input
            type="text"
            placeholder="Your Name *"
            required
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
          />

          <input
            type="tel"
            placeholder="Phone Number *"
            required
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
          />

          <textarea
            rows="4"
            placeholder="Describe your AC issue or service requirement"
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
          />

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>

          <p className="text-xs text-gray-400 text-center">
            ⏱️ We usually respond within <strong className="text-gray-300">30 minutes</strong> during working hours.
          </p>
        </form>
      </div>
    </div>
  );
}
