import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SITE } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email || "Not provided",
      message: form.message || "No message provided",
    };

    emailjs
      .send(
        "service_rl0uzxj",        // ✅ same service
        "template_g551kr9", // 🔴 create this template in EmailJS
        templateParams,
        "agSzHbXTQ8GrqWGb2"       // ✅ same public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully! Our team will contact you shortly.");
          setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="container py-20">

      {/* ================= HEADER ================= */}
      <div className="mb-14 text-center md:text-left">
        <h1 className="text-4xl font-bold text-main mb-3">
          Contact Us
        </h1>
        <p className="text-muted max-w-2xl">
          Need AC installation, servicing, gas refilling, or emergency repair?
          Reach out to <span className="text-main font-medium">{SITE.companyName}</span> —
          we respond fast and deliver reliable service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* ================= CONTACT INFO ================= */}
        <div className="card p-8 space-y-8">

          <h2 className="text-xl font-semibold text-main">
            Get in Touch
          </h2>

          <div className="space-y-4 text-muted">
            <div>
              <p className="text-sm">📍 Address</p>
              <p>{SITE.address}</p>
            </div>

            <div>
              <p className="text-sm">📞 Phone</p>
              <a href={`tel:${SITE.phone}`} className="text-sky-400 hover:underline">
                {SITE.phone}
              </a>
            </div>

            <div>
              <p className="text-sm">📧 Email</p>
              <a href={`mailto:${SITE.email}`} className="text-sky-400 hover:underline">
                {SITE.email}
              </a>
            </div>

            <div>
              <p className="text-sm">💬 WhatsApp</p>
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

          <div className="flex gap-4 pt-4">
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

          <div className="text-sm text-muted pt-4">
            🕘 Service Hours: 9:00 AM – 9:00 PM (All Days)
            <br />
            ⚡ Emergency support available
          </div>

          {/* MAP */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Cool Climate Location"
              src="https://www.google.com/maps?q=17.4626662,78.4571752&z=17&output=embed"
              className="w-full h-60"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <form
          onSubmit={submit}
          className="card p-8 space-y-5"
        >
          <h2 className="text-xl font-semibold text-main">
            Send Us a Message
          </h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-sky-400"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-sky-400"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-sky-400"
          />

          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your AC issue or requirement"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-sky-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <p className="text-xs text-muted text-center">
            ⏱️ We usually respond within <strong>30 minutes</strong>.
          </p>
        </form>
      </div>
    </div>
  );
}
