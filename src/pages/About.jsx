import React from 'react'
import { SITE } from '../data/siteData'

export default function About() {
  return (
    <div className="bg-[#4A4F55] text-[#F2E8C9] min-h-screen py-16">
      <div className="container">

        <h1 className="text-3xl font-semibold mb-6 text-[#D4AF37]">
          About {SITE.companyName}
        </h1>

        <div className="bg-[#52575D] border border-[#737A82] p-6 rounded-lg shadow-md max-w-3xl leading-relaxed">

          <p className="mb-4">
            {SITE.companyName} has been providing reliable AC installation and servicing solutions for homes and businesses. 
            Our certified technicians deliver high-quality work with a customer-first approach.
          </p>

          <p className="mb-4">
            Our mission is to bring comfort, efficiency, and reliability to every cooling system we service. 
            Whether it’s regular maintenance, deep cleaning, or emergency repairs — you can rely on our expert team.
          </p>

          <p>
            We offer AC servicing, installation, gas refilling, AMC plans, and complete cooling system care. 
            Customer satisfaction, transparency, and long-term service quality are our top priorities.
          </p>

        </div>
      </div>
    </div>
  )
}
