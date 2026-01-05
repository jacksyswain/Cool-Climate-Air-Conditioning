import React, { useState } from "react";
import { SERVICES } from "../data/siteData";
import { SITE } from "../data/siteData";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully! Our team will contact you shortly.");
  };

  return (
    <div className="container py-20">

      {/* ================= HEADER ================= */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold text-main mb-4">
          Book an AC Service
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Schedule professional AC servicing, installation, or repair in just a few steps.
          Our certified technicians are ready to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* ================= BOOKING FORM ================= */}
        <form
          onSubmit={submit}
          className="card p-8 space-y-5"
        >
          <h2 className="text-xl font-semibold text-main mb-2">
            Service Booking Form
          </h2>

          <p className="text-sm text-muted mb-4">
            Please fill in your details and select the required service.
          </p>

          <input
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
            placeholder="Full Name *"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
            placeholder="Phone Number *"
            name="phone"
            onChange={handleChange}
            required
          />

          <input
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />

          <select
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
            name="service"
            onChange={handleChange}
            required
          >
            <option value="">Select Service *</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>

          <textarea
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:border-sky-400"
            rows="4"
            placeholder="Additional message (optional)"
            name="message"
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary w-full mt-2">
            Submit Booking
          </button>

          <p className="text-xs text-muted text-center">
            ⏱️ We usually respond within <strong>30 minutes</strong> during working hours.
          </p>
        </form>

        {/* ================= SUPPORT / INFO ================= */}
        <div className="card p-8 space-y-6">

          <h3 className="text-xl font-semibold text-main">
            Need Immediate Help?
          </h3>

          <p className="text-muted">
            For urgent AC issues, feel free to contact us directly.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-muted">
              📞 <span className="text-main font-medium">Call:</span>{" "}
              <a href={`tel:${SITE.phone}`} className="text-sky-400 hover:underline">
                {SITE.phone}
              </a>
            </p>

            <p className="text-muted">
              💬 <span className="text-main font-medium">WhatsApp:</span>{" "}
              <a
                href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>

            <p className="text-muted">
              🛠️ Same-day service available in most areas
            </p>
          </div>

          {/* TRUST POINTS */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted">
              ✅ Certified Technicians
            </div>
            <div className="flex items-center gap-2 text-muted">
              💯 Transparent Pricing
            </div>
            <div className="flex items-center gap-2 text-muted">
              ⚡ Quick Response
            </div>
            <div className="flex items-center gap-2 text-muted">
              ⭐ Trusted by Customers
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
