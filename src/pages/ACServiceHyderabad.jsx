import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ACServiceHyderabad() {
  return (
    <>
      <Helmet>
        <title>AC Service in Hyderabad | Cool Climate</title>
        <meta
          name="description"
          content="Professional AC service in Hyderabad including foam jet cleaning, deep servicing and maintenance. Same-day doorstep AC service. Call 8523056414."
        />
        <link
          rel="canonical"
          href="https://coolclimatehyd.in/ac-service-hyderabad"
        />
      </Helmet>

      <div className="py-20">
        <div className="container max-w-5xl">

          <h1 className="text-4xl font-bold text-main mb-6">
            Professional AC Service in Hyderabad
          </h1>

          <p className="text-muted mb-8">
            Cool Climate offers deep cleaning, foam jet servicing,
            inspection and complete maintenance for split and window AC units
            across Hyderabad.
          </p>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Our AC Service Includes
            </h2>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Foam Jet Cleaning</li>
              <li>Filter & Coil Cleaning</li>
              <li>Performance Check</li>
              <li>Drain Line Cleaning</li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/booking" className="btn-primary">
              Book AC Service Now
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}