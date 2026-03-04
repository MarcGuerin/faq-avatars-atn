import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MessageCircleQuestion, BookOpen, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "FAQ", page: "FAQ", icon: MessageCircleQuestion },
    { name: "Procédure", page: "Procedure", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f8fb", color: "#333333" }}>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b" style={{ borderColor: "#d0e6f5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={createPageUrl("FAQ")} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: "#00365F" }}>
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-semibold leading-tight" style={{ color: "#00365F" }}>Avatars IA</h1>
                <p className="text-xs leading-tight" style={{ color: "#6b8fa8" }}>HeyGen & ElevenLabs</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all`}
                  style={currentPageName === item.page
                    ? { backgroundColor: "#E8F4FC", color: "#00365F" }
                    : { color: "#6b8fa8" }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#00365F" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-xl" style={{ borderColor: "#d0e6f5" }}>
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all"
                  style={currentPageName === item.page
                    ? { backgroundColor: "#E8F4FC", color: "#00365F" }
                    : { color: "#6b8fa8" }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t mt-20" style={{ borderColor: "#d0e6f5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-xs" style={{ color: "#6b8fa8" }}>
            Guide FAQ — Création d'avatars IA avec HeyGen & ElevenLabs
          </p>
        </div>
      </footer>
    </div>
  );
}