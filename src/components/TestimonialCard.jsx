import React from "react";

export default function TestimonialCard({ name, text }) {
  return (
    <div className="glass p-6 hover:scale-[1.02] transition">
      <p className="text-gray-200 text-sm leading-relaxed">
        “{text}”
      </p>

      <div className="mt-4 font-semibold text-sky-400">
        — {name}
      </div>
    </div>
  );
}
