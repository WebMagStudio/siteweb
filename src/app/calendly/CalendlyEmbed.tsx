"use client";

import React, { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) return; // Si head n'existe pas, on sort
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.async = true;
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
};

export default CalendlyEmbed;