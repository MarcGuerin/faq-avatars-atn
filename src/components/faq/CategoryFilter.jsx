import React from "react";
import { Scale, DollarSign, Wrench, GraduationCap, ShieldCheck } from "lucide-react";

const categories = [
  { id: "all", label: "Toutes", icon: null },
  { id: "legal", label: "Légal & Droits", icon: Scale },
  { id: "cost", label: "Coûts", icon: DollarSign },
  { id: "technical", label: "Technique", icon: Wrench },
  { id: "pedagogical", label: "Pédagogie", icon: GraduationCap },
  { id: "ethical", label: "Éthique", icon: ShieldCheck },
];

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all border"
          style={active === cat.id
            ? { backgroundColor: "#00365F", color: "#fff", borderColor: "#00365F" }
            : { backgroundColor: "#fff", color: "#6b8fa8", borderColor: "#d0e6f5" }}
        >
          {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
          {cat.label}
        </button>
      ))}
    </div>
  );
}