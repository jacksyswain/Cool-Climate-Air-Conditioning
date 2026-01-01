import React from "react";

export default function ServiceCard({ title, desc }) {
  return (
    <div className="group glass p-6 transition hover:scale-[1.03]">
      <div className="mb-3 text-lg font-semibold text-white group-hover:text-sky-400 transition">
        {title}
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">
        {desc}
      </p>

      <div className="mt-4 text-sm text-sky-400 opacity-0 group-hover:opacity-100 transition">
        Learn more →
      </div>
    </div>
  );
}
