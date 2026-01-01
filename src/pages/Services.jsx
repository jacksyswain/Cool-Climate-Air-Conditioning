import React from "react";
import { SERVICES } from "../data/siteData";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-white mb-10">
        Our Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  );
}
