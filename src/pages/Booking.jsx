import React, { useState } from "react";
import { SERVICES } from "../data/siteData";

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
    alert("Booking submitted (frontend only)");
  };

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-white mb-10">
        Book a Service
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form onSubmit={submit} className="glass p-8 space-y-4">
          <input
            className="w-full p-3 rounded bg-black/40 border border-white/20"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
            required
          />

          <input
            className="w-full p-3 rounded bg-black/40 border border-white/20"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            required
          />

          <input
            className="w-full p-3 rounded bg-black/40 border border-white/20"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />

          <select
            className="w-full p-3 rounded bg-black/40 border border-white/20"
            name="service"
            onChange={handleChange}
          >
            <option>Select Service</option>
            {SERVICES.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
          </select>

          <textarea
            className="w-full p-3 rounded bg-black/40 border border-white/20"
            rows="4"
            placeholder="Message"
            name="message"
            onChange={handleChange}
          />

          <button className="btn-primary w-full">
            Submit Booking
          </button>
        </form>

        {/* INFO */}
        <div className="glass p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Need Help?
          </h3>

          <p className="text-gray-300 mb-2">
            📞 Call us for instant support
          </p>

          <p className="text-gray-300 mb-2">
            💬 WhatsApp available
          </p>

          <p className="text-gray-400 text-sm">
            Our team will contact you shortly after booking.
          </p>
        </div>
      </div>
    </div>
  );
}
