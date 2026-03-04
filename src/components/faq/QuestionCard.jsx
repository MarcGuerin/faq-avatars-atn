import React, { useState } from "react";
import { ChevronDown, Scale, DollarSign, Wrench, GraduationCap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const categoryConfig = {
  legal: { label: "Légal", icon: Scale, color: "bg-amber-50 text-amber-700 border-amber-200" },
  cost: { label: "Coûts", icon: DollarSign, color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  technical: { label: "Technique", icon: Wrench, color: "bg-blue-50 text-blue-700 border-blue-200" },
  pedagogical: { label: "Pédagogie", icon: GraduationCap, color: "bg-violet-50 text-violet-700 border-violet-200" },
  ethical: { label: "Éthique", icon: ShieldCheck, color: "bg-rose-50 text-rose-700 border-rose-200" },
};

export default function QuestionCard({ question, isOpen, onToggle }) {
  const cat = categoryConfig[question.category] || categoryConfig.technical;
  const CatIcon = cat.icon;

  return (
    <div
      className="rounded-2xl border transition-all duration-300"
      style={isOpen
        ? { backgroundColor: "#fff", borderColor: "#a8d4ee", boxShadow: "0 4px 16px rgba(0,54,95,0.08)" }
        : { backgroundColor: "rgba(255,255,255,0.7)", borderColor: "#d0e6f5" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-lg text-white text-xs font-bold flex items-center justify-center mt-0.5" style={{ backgroundColor: "#00365F" }}>
          {question.number}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-medium leading-relaxed pr-4" style={{ color: "#333333" }}>
            {question.question}
          </p>
          <div className="mt-2">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${cat.color}`}>
              <CatIcon className="w-3 h-3" />
              {cat.label}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: "#00365F" }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pl-[4.25rem]">
              <div className="border-t pt-4" style={{ borderColor: "#E8F4FC" }}>
                <div className="prose-answer text-sm leading-relaxed" style={{ color: "#333333" }}>
                  <ReactMarkdown>{question.answer}</ReactMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}