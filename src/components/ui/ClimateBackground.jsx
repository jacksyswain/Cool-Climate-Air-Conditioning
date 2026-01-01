import React, { useEffect, useState } from "react";
import SnowLayer from "./SnowLayer";
import FogLayer from "./FogLayer";
import { Phone, Mail, MessageCircle, Sliders } from "lucide-react";
import { SITE } from "../../data/siteData";

export default function ClimateBackground() {
  const [wind, setWind] = useState(20);
  const [density, setDensity] = useState(40);
  const [showControls, setShowControls] = useState(false);

  // Mouse → wind direction
  useEffect(() => {
    const handleMove = (e) => {
      const percent = (e.clientX / window.innerWidth - 0.5) * 80;
      setWind(percent);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-slate-950 via-sky-950 to-slate-900" />

      {/* FOG + SNOW */}
      <FogLayer mode="night" />
      <SnowLayer wind={wind} density={density} mode="night" />

      {/* FLOATING CONTROL BAR */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-lg px-4 py-3 rounded-2xl shadow-xl border border-white/10">

          {/* CALL */}
          <a
            href={`tel:${SITE.phone}`}
            title="Call"
            className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center hover:scale-110 transition"
          >
            <Phone className="w-5 h-5 text-white" />
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${SITE.email}`}
            title="Email"
            className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:scale-110 transition"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>

          {/* DIVIDER */}
          <div className="w-px h-8 bg-white/20 mx-1" />

          {/* TOGGLE CONTROLS */}
          <button
            onClick={() => setShowControls(!showControls)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            title="Snow Controls"
          >
            <Sliders className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* SNOW CONTROLS PANEL */}
        {showControls && (
          <div className="mt-3 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-64 text-white shadow-lg">
            <div className="text-sm font-semibold mb-2">Snow Density</div>

            <input
              type="range"
              min="10"
              max="120"
              value={density}
              onChange={(e) => setDensity(+e.target.value)}
              className="w-full"
            />

            <div className="text-xs opacity-70 mt-1">
              Adjust falling intensity
            </div>
          </div>
        )}
      </div>
    </>
  );
}
