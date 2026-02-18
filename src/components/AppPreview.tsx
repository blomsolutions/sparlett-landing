"use client";

import { useEffect, useState } from "react";

const chatMessages = [
  {
    role: "ai" as const,
    text: "Hei! Jeg er Lumi. Jeg har sett på forbruket ditt denne måneden.",
  },
  {
    role: "ai" as const,
    text: "Du bruker 23% mer på mat i helger. Vil du at jeg forklarer hvorfor?",
  },
  { role: "user" as const, text: "Ja, vis meg mer!" },
  {
    role: "ai" as const,
    text: "Det ser ut som takeaway øker på fredager. Jeg har et sparetips klart for deg.",
  },
];

export default function AppPreview() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= chatMessages.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/50">
      {/* Window chrome */}
      <div className="mb-2 flex items-center gap-2 px-3 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
        <div className="ml-4 flex-1 rounded-lg bg-background/50 px-4 py-1 text-center text-xs text-muted">
          app.sparlett.no
        </div>
      </div>

      {/* App content */}
      <div className="rounded-xl bg-background p-3 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted">Oversikt</h3>
              <span className="text-xs text-muted">Februar 2025</span>
            </div>

            <div className="rounded-xl border border-border bg-surface p-4">
              <p className="text-sm text-muted">Spart denne måneden</p>
              <p className="mt-1 text-3xl font-bold text-accent">
                kr 4 230
              </p>
              <div className="mt-3 h-2 rounded-full bg-background">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-accent to-accent-light"
                  style={{ width: "68%" }}
                />
              </div>
              <p className="mt-2 text-xs text-muted">
                68% av målet (kr 6 200)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-surface p-3">
                <p className="text-xs text-muted">Inntekter</p>
                <p className="mt-1 text-lg font-bold text-green-400">
                  kr 32 500
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-3">
                <p className="text-xs text-muted">Utgifter</p>
                <p className="mt-1 text-lg font-bold text-accent-light">
                  kr 28 270
                </p>
              </div>
            </div>
          </div>

          {/* Right: AI Chat */}
          <div className="flex flex-col rounded-xl border border-ai/20 bg-surface p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="animate-orb-pulse h-6 w-6 rounded-full bg-gradient-to-br from-ai to-ai-light" />
              <span className="text-sm font-medium text-ai-light">
                Lumi
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-hidden">
              {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`animate-fade-in-up flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-accent/20 text-accent-light"
                        : "bg-ai/10 text-white/90"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {visibleMessages < chatMessages.length && (
                <div className="flex items-center gap-1 px-3 py-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-ai/50" />
                  <div
                    className="h-2 w-2 animate-pulse rounded-full bg-ai/50"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="h-2 w-2 animate-pulse rounded-full bg-ai/50"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
