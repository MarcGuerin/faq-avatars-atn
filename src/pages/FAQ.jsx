import React, { useState, useMemo } from "react";
import { MessageCircleQuestion } from "lucide-react";
import { questions as allQuestions } from "@/data/questions";
import SearchBar from "@/components/faq/SearchBar";
import CategoryFilter from "@/components/faq/CategoryFilter";
import QuestionCard from "@/components/faq/QuestionCard";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchSearch =
        !search ||
        q.question.toLowerCase().includes(search.toLowerCase()) ||
        q.answer.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || q.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-xl mb-6" style={{ backgroundColor: "#00365F" }}>
          <MessageCircleQuestion className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#00365F" }}>
          Foire aux questions
        </h1>
        <p className="mt-3 text-base max-w-lg mx-auto leading-relaxed" style={{ color: "#6b8fa8" }}>
          Tout ce que vous devez savoir sur la création d'avatars vidéo IA avec
          HeyGen et le clonage vocal professionnel avec ElevenLabs.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-8">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter active={category} onChange={setCategory} />
      </div>

      {/* Count */}
      <p className="text-xs mb-4 font-medium" style={{ color: "#6b8fa8" }}>
        {filtered.length} question{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Questions */}
      <div className="space-y-3">
        {filtered.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            isOpen={openId === q.id}
            onToggle={() => setOpenId(openId === q.id ? null : q.id)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-sm">Aucune question trouvée.</p>
          </div>
        )}
      </div>
    </div>
  );
}
