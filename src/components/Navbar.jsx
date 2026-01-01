import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition
     ${isActive ? "text-sky-400" : "text-gray-200 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Cool Climate"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:block font-semibold tracking-wide text-white">
            Cool Climate
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/pricing" className={navLinkClass}>
            Pricing
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <Link
            to="/booking"
            className="ml-3 btn-primary"
          >
            Book Now
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col p-4 space-y-3 text-white">

            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
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
              className="btn-primary mt-2 text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
