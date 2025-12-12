import React from 'react'
import { SITE } from '../data/siteData'

export default function Contact() {
  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
      <div className="container">

        <h1 className="text-3xl font-semibold mb-8 text-[#D4AF37]">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CONTACT DETAILS */}
          <div className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md">
            
            <div className="font-semibold mb-3 text-[#D4AF37]">Address</div>
            <div className="text-sm mb-5">{SITE.address}</div>

            <div className="font-semibold mb-2 text-[#D4AF37]">Phone</div>
            <div className="text-sm mb-5">{SITE.phone}</div>

            <div className="font-semibold mb-2 text-[#D4AF37]">Email</div>
            <div className="text-sm">{SITE.email}</div>
          </div>

          {/* CONTACT FORM */}
          <div className="p-6 bg-[#5A6066] border border-[#737A82] rounded-lg shadow-md">
            <div className="font-semibold mb-3 text-[#D4AF37]">Send a Message</div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('This form is frontend only. Connect backend later.')
              }}
              className="flex flex-col gap-4"
            >
              <input
                required
                placeholder="Your Name"
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              />

              <input
                required
                placeholder="Phone"
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              />

              <input
                placeholder="Email"
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="p-3 rounded bg-[#4A4F55] border border-[#737A82] text-[#F2E8C9]"
              ></textarea>

              <button
                className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#E3C15A] transition w-max"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
