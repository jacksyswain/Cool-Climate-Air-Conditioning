import React from "react";
import { SITE } from "../data/siteData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-300">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {SITE.companyName}
          </h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            {SITE.tagline}
          </p>

          <p className="mt-4 text-sm text-gray-400">
            📍 {SITE.address}
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-sky-400 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-sky-400 transition">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-sky-400 transition">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-sky-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>

          <p className="text-sm mb-2">📞 {SITE.phone}</p>
          <p className="text-sm mb-2">✉️ {SITE.email}</p>

          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 btn-primary"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
