import React from "react";
import { Lightbulb } from "lucide-react";

export default function TipBox({ children }) {
  return (
    <div className="rounded-xl border p-4 flex gap-3" style={{ backgroundColor: "#E8F4FC", borderColor: "#a8d4ee" }}>
      <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#EF413D" }} />
      <div className="text-sm leading-relaxed" style={{ color: "#00365F" }}>{children}</div>
    </div>
  );
}