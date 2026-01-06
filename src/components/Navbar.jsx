import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { SITE } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition
     ${isActive ? "text-sky-400" : "text-gray-200 hover:text-white"}`;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Cool Climate" className="h-10 w-auto" />
            <span className="hidden sm:block font-semibold text-white">
              Cool Climate
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            <Link to="/booking" className="btn-primary ml-2">
              Book Now
            </Link>

            {/* CONTACT ICONS */}
            <div className="flex items-center gap-3 ml-3">
              {/* CALL */}
              <a
                href={`tel:${SITE.phone}`}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                title="Call us"
              >
                <Phone className="w-5 h-5 text-sky-400" />
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${SITE.email}`}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                title="Email"
              >
                <Mail className="w-5 h-5 text-sky-300" />
              </a>
            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed top-16 left-0 w-full z-[90] bg-black/80 backdrop-blur-xl border-t border-white/10 md:hidden">
          <div className="flex flex-col p-5 space-y-4 text-white">

            <NavLink onClick={() => setOpen(false)} to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="btn-primary text-center"
            >
              Book Now
            </Link>

            {/* MOBILE CONTACT LINKS */}
            <div className="flex gap-6 pt-4 border-t border-white/10">
              <a href={`tel:${SITE.phone}`} className="text-sky-400">📞 Call</a>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-green-400"
              >
                💬 WhatsApp
              </a>
              <a href={`mailto:${SITE.email}`} className="text-blue-400">
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= SPACER ================= */}
      {/* Prevent content hiding behind fixed navbar */}
      <div className="h-16" />
    </>
  );
}
