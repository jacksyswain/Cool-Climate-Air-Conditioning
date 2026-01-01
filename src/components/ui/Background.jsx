import React from "react";
export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="blob bg-sky-500/30 top-[-150px] left-[-150px]" />
      <div className="blob bg-emerald-400/30 bottom-[-200px] right-[-200px]" />
      <div className="blob bg-cyan-400/20 top-[30%] right-[20%]" />
    </div>
  )
}
