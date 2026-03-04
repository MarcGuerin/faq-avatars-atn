import React from "react";
import ReactMarkdown from "react-markdown";

export default function StepCard({ number, title, children }) {
  return (
    <div className="relative pl-10 sm:pl-14 pb-10 group">
      {/* Timeline */}
      <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px group-last:hidden" style={{ background: "linear-gradient(to bottom, #a8d4ee, transparent)" }} />
      
      {/* Number badge */}
      <div className="absolute left-0 sm:left-1.5 top-0 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md" style={{ backgroundColor: "#00365F" }}>
        {number}
      </div>

      <div className="bg-white rounded-2xl border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow" style={{ borderColor: "#d0e6f5" }}>
        <h3 className="text-base font-semibold mb-3" style={{ color: "#00365F" }}>{title}</h3>
        <div className="prose-answer text-sm leading-relaxed" style={{ color: "#333333" }}>
          <ReactMarkdown>{children}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}