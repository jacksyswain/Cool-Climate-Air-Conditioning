import React from "react";

const PRICING = [
  { id: 1, title: "AC Servicing", price: "₹499" },
  { id: 2, title: "AC Installation", price: "₹999" },
  { id: 3, title: "Gas Refilling", price: "₹1,999+" },
];

export default function Pricing() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-white mb-12">
        Pricing
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRICING.map((p) => (
          <div key={p.id} className="glass p-8 text-center">
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-6 text-4xl font-bold text-sky-400">
              {p.price}
            </p>

            <button className="btn-primary mt-8">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
