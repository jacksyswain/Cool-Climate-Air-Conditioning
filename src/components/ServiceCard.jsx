import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ id, title, desc }) {
  return (
    <div className="card p-6 flex flex-col justify-between group">
      
      <div>
        {/* Service title */}
        <h3 className="text-xl font-semibold text-sky-500 mb-2">
          {title}
        </h3>

        <p className="text-muted text-sm">
          {desc}
        </p>
      </div>

      {/* Learn more */}
      <Link
        to={`/services#${id}`}
        className="mt-4 font-medium text-grey-500 hover:text-sky-600 transition"
      >
        Learn more →
      </Link>
    </div>
  );
}
