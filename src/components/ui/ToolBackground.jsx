import React from "react";

import {
  Wrench,
  Hammer,
  Settings,
  Cog,
  Gauge,
  Fan,
  Snowflake,
  Flame,
  Zap,
  Droplets,
  Package,
  ShieldCheck,
  ClipboardList,
  Cpu,
  Activity,
  PenTool,
  Layers,
  Box,
} from "lucide-react";

const icons = [
  Wrench,
  Hammer,
  Settings,
  Cog,
  Gauge,
  Fan,
  Snowflake,
  Flame,
  Zap,
  Droplets,
  Package,
  ShieldCheck,
  ClipboardList,
  Cpu,
  Activity,
  PenTool,
  Layers,
  Box,
];

export default function ToolBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="absolute text-sky-400/25 animate-float-slow"
          style={{
            top: `${(i * 7) % 90}%`,
            left: `${(i * 13) % 90}%`,
            width: `${42 + (i % 5) * 10}px`,
            height: `${42 + (i % 5) * 10}px`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}
