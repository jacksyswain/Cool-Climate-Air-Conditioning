import React from 'react'
import { SITE } from '../data/siteData'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1A1F24] text-[#F2E8C9] pt-12 pb-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 pb-8">

        {/* Company Info */}
        <div>
          <div className="font-bold text-xl text-[#D4AF37]">
            {SITE.companyName}
          </div>
          <div className="text-sm mt-3">{SITE.tagline}</div>
          <div className="mt-4 text-sm">{SITE.address}</div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold text-[#D4AF37]">Quick Links</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-[#E8C558] transition">Home</Link>
            <Link to="/services" className="hover:text-[#E8C558] transition">Services</Link>
            <Link to="/pricing" className="hover:text-[#E8C558] transition">Pricing</Link>
            <Link to="/booking" className="hover:text-[#E8C558] transition">Book</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="font-semibold text-[#D4AF37]">Contact</div>
          <div className="mt-3 text-sm">Phone: {SITE.phone}</div>
          <div className="text-sm">Email: {SITE.email}</div>
        </div>
      </div>

      {/* COPYRIGHT – Always Centered */}
      <div className="text-center text-xs text-[#E8C558] border-t border-[#333] pt-4">
        © {new Date().getFullYear()} {SITE.companyName}. All Rights Reserved.
      </div>
    </footer>
  )
}
