import React from "react";
import { SITE } from "../data/siteData";

export default function About() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-white mb-6">
        About {SITE.companyName}
      </h1>

      <div className="glass p-8 max-w-3xl leading-relaxed text-gray-300">
        <p className="mb-4">
          {SITE.companyName} provides reliable, affordable and professional
          air-conditioning services across Hyderabad.
        </p>

        <p className="mb-4">
          Our technicians are trained to handle installation, servicing,
          repairs, gas refilling and AMC contracts with complete transparency.
        </p>

        <p>
          We focus on customer satisfaction, fast response time and long-term
          service quality.
        </p>
      </div>
    </div>
  );
}
