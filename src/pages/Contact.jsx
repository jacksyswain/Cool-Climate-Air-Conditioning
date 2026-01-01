import React from "react";
import { SITE } from "../data/siteData";

export default function Contact() {
  return (
    <div className="container py-20">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-xl">
          Have questions or need help? Reach out to us anytime — we’re happy to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="glass p-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-300">

            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p>{SITE.address}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a
                href={`tel:${SITE.phone}`}
                className="text-sky-400 hover:underline"
              >
                {SITE.phone}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sky-400 hover:underline"
              >
                {SITE.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400">WhatsApp</p>
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

          {/* MAP PLACEHOLDER */}
          <div className="mt-8 glass p-4 text-center text-gray-400">
            Google Map integration can be added here
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted (frontend only). Email integration coming next.");
          }}
          className="glass p-8 space-y-5"
        >
          <h2 className="text-xl font-semibold text-white">
            Send a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-black/40 border border-white/20 text-white"
          />

          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>

          <p className="text-xs text-gray-400 text-center">
            We usually respond within 30 minutes during working hours.
          </p>
        </form>
      </div>
    </div>
  );
}
