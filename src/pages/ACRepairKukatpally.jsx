import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ACRepairKukatpally() {
  return (
    <>
      <Helmet>
        <title>AC Repair in Kukatpally Hyderabad | Cool Climate</title>
        <meta
          name="description"
          content="Looking for AC repair in Kukatpally? Cool Climate provides fast, affordable AC servicing, gas filling & installation in Kukatpally, Hyderabad. Call 8523056414."
        />
        <link
          rel="canonical"
          href="https://coolclimatehyd.in/ac-repair-kukatpally"
        />
      </Helmet>

      <div className="py-20">
        <div className="container max-w-5xl">

          <h1 className="text-4xl font-bold text-main mb-6">
            AC Repair Service in Kukatpally
          </h1>

          <p className="text-muted mb-8">
            We provide same-day AC repair services in Kukatpally, Hyderabad.
            Our technicians handle cooling issues, gas refilling, PCB repair,
            installation and maintenance for all AC brands.
          </p>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Why Choose Us in Kukatpally?
            </h2>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Fast doorstep service</li>
              <li>Affordable pricing</li>
              <li>Experienced technicians</li>
              <li>Service across all Kukatpally areas</li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/booking" className="btn-primary">
              Book AC Repair in Kukatpally
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}