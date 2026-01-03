import React from "react";

export default function ServiceModal({ open, onClose, title, longDesc }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white dark:bg-[#0b1220] max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl p-6 md:p-8 z-10 animate-fadeIn">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* CONTENT */}
        <h3 className="text-2xl font-semibold text-sky-500 mb-4">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
          {longDesc}
        </p>
      </div>
    </div>
  );
}
