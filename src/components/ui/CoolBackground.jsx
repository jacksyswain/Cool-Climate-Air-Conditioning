import React from "react";
import Snowflake from "./Snowflake";

const flakes = Array.from({ length: 35 });

export default function CoolBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {flakes.map((_, i) => {
        const size = Math.random() * 14 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 20 + Math.random() * 25;
        const drift = Math.random() * 60 - 30;

        return (
          <div
            key={i}
            className="snow-float"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              "--drift": `${drift}px`,
            }}
          >
            <Snowflake
              size={size}
              className="text-sky-300/70 drop-shadow-[0_0_8px_rgba(180,230,255,0.6)]"
            />
          </div>
        );
      })}
    </div>
  );
}
