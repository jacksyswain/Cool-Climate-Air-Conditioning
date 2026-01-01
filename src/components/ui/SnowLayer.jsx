import React from "react";
import Snowflake from "./Snowflake";

export default function SnowLayer({ wind, density, mode }) {
  const flakes = Array.from({ length: density });

  return (
    <div className="fixed inset-0 pointer-events-none -z-40">
      {flakes.map((_, i) => {
        const size = Math.random() * 10 + 8;
        const left = Math.random() * 100;
        const duration = 18 + Math.random() * 25;
        const delay = Math.random() * 20;
        const drift = wind + (Math.random() * 40 - 20);

        return (
          <div
            key={i}
            className="snow-fall"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              "--drift": `${drift}px`,
            }}
          >
            <Snowflake
              size={size}
              className={
                mode === "night"
                  ? "text-sky-300/70 drop-shadow-[0_0_10px_rgba(180,230,255,0.6)]"
                  : "text-sky-500/40 drop-shadow-[0_0_6px_rgba(150,200,255,0.4)]"
              }
            />
          </div>
        );
      })}
    </div>
  );
}
