import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE } from '../data/siteData'
import logo from "../assets/logo.png"

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-[#1A1F24] shadow-lg sticky top-0 z-50">
  <div className="container flex items-center justify-between h-16">
    <Link to='/' className="flex items-center gap-3">
      <img 
        src={logo}
        alt="Cool Climate Logo"
        className="w-16 h-16 object-contain"
      />

     
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-6 text-[#F2E8C9]">
      <NavLink 
        to="/"
        end
        className={({isActive}) => 
          isActive 
            ? "text-[#D4AF37] font-medium" 
            : "hover:text-[#E8C558] transition"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/services"
        className={({isActive}) => 
          isActive 
            ? "text-[#D4AF37] font-medium" 
            : "hover:text-[#E8C558] transition"
        }
      >
        Services
      </NavLink>

      <NavLink 
        to="/pricing"
        className={({isActive}) => 
          isActive 
            ? "text-[#D4AF37] font-medium" 
            : "hover:text-[#E8C558] transition"
        }
      >
        Pricing
      </NavLink>

      <NavLink 
        to="/about"
        className={({isActive}) => 
          isActive 
            ? "text-[#D4AF37] font-medium" 
            : "hover:text-[#E8C558] transition"
        }
      >
        About
      </NavLink>

      <NavLink 
        to="/contact"
        className={({isActive}) => 
          isActive 
            ? "text-[#D4AF37] font-medium" 
            : "hover:text-[#E8C558] transition"
        }
      >
        Contact
      </NavLink>

      <Link 
        to="/booking"
        className="ml-4 px-5 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E8C558] transition"
      >
        Book Now
      </Link>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={()=>setOpen(!open)} className="p-2 text-[#F2E8C9]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Dropdown */}
  {open && (
    <div className="md:hidden bg-[#1A1F24] border-t border-[#333]">
      <div className="flex flex-col p-4 gap-4 text-[#F2E8C9]">
        <Link to="/" className="hover:text-[#E8C558]">Home</Link>
        <Link to="/services" className="hover:text-[#E8C558]">Services</Link>
        <Link to="/pricing" className="hover:text-[#E8C558]">Pricing</Link>
        <Link to="/about" className="hover:text-[#E8C558]">About</Link>
        <Link to="/contact" className="hover:text-[#E8C558]">Contact</Link>
        <Link 
          to="/booking"
          className="mt-2 px-4 py-2 bg-[#D4AF37] text-black rounded hover:bg-[#E8C558]"
        >
          Book Now
        </Link>
      </div>
    </div>
  )}
</header>

  )
}