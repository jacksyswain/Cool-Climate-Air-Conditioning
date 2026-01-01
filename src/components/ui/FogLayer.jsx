import React from "react";

export default function FogLayer({ mode }) {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none">
      <div
        className={`fog ${mode === "night" ? "fog-night" : "fog-day"}`}
      />
      <div
        className={`fog fog-2 ${mode === "night" ? "fog-night" : "fog-day"}`}
      />
    </div>
  );
}
