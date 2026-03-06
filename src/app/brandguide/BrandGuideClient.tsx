"use client";

import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Ring3 from "@/components/Ring3";
import Spinner from "@/components/Spinner";
import BrandGuideContent from "./BrandGuideContent";

const ALLOWED_EMAILS = ["mail@marcusblom.no"];

export default function BrandGuideClient() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u && ALLOWED_EMAILS.includes(u.email ?? "")) {
        setUser(u);
        setDenied(false);
      } else if (u) {
        signOut(auth);
        setDenied(true);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (!ALLOWED_EMAILS.includes(result.user.email ?? "")) {
        await signOut(auth);
        setDenied(true);
      }
    } catch {
      // User cancelled or error
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <Spinner size="lg" />
      </div>
    );
  }

  if (user) {
    return <BrandGuideContent />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <div className="mx-auto max-w-sm px-6 text-center">
        <Ring3 size={48} strokeWidth={4} className="mx-auto mb-6" />
        <h1 className="mb-2 text-2xl font-bold text-deep">
          Brandguide<span className="text-sage">.</span>
        </h1>
        <p className="mb-8 text-sm text-muted">
          Logg inn for å se Sparlett sin brandguide.
        </p>

        {denied && (
          <div className="mb-6 rounded-lg bg-terra-bg px-4 py-3 text-sm text-terra">
            Ingen tilgang. Kun autoriserte brukere kan se brandguiden.
          </div>
        )}

        <button
          onClick={handleSignIn}
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-white px-6 py-3.5 font-semibold text-deep transition-all hover:border-sage hover:shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Logg inn med Google
        </button>
      </div>
    </div>
  );
}
