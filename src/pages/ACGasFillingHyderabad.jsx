import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ACGasFillingHyderabad() {
  return (
    <>
      <Helmet>
        <title>AC Gas Filling in Hyderabad | Cool Climate</title>
        <meta
          name="description"
          content="AC gas filling service in Hyderabad for R32 & R410A refrigerants. Proper pressure testing and leak check included. Call 8523056414."
        />
        <link
          rel="canonical"
          href="https://coolclimatehyd.in/ac-gas-filling-hyderabad"
        />
      </Helmet>

      <div className="py-20">
        <div className="container max-w-5xl">

          <h1 className="text-4xl font-bold text-main mb-6">
            AC Gas Filling Service in Hyderabad
          </h1>

          <p className="text-muted mb-8">
            We provide professional AC gas refilling with pressure testing
            and leak detection for split and window ACs across Hyderabad.
          </p>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold text-accent mb-4">
              Why Our Gas Filling Service?
            </h2>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Correct refrigerant type (R32 / R410A)</li>
              <li>Pressure testing included</li>
              <li>Leak detection</li>
              <li>Service warranty available</li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/booking" className="btn-primary">
              Book Gas Filling Service
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}