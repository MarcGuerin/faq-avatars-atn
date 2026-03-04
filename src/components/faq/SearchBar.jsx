import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <Input
        type="text"
        placeholder="Rechercher une question..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-11 pr-4 h-12 rounded-xl border-slate-200 bg-white shadow-sm focus-visible:ring-indigo-500 text-sm"
      />
    </div>
  );
}