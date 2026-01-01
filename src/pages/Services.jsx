import React, { useEffect } from "react";
import { SERVICES } from "../data/siteData";

export default function Services() {

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div className="container py-20">
      <h1 className="text-3xl font-semibold text-main mb-10">
        Our Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="card p-6 scroll-mt-28"
          >
            <h3 className="text-lg font-semibold text-main mb-2">
              {service.title}
            </h3>

            <p className="text-muted mb-3">
              {service.desc}
            </p>

            <p className="text-sm text-muted">
              {service.longDesc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
