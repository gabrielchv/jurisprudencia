"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export function Header({ isTransparent = false }: { isTransparent?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Pegamos o estado e as funções do Firebase
  const { user, signInWithGoogle, logout } = useAuth();

  useOutsideClick(menuRef, () => setIsMobileMenuOpen(false));

  return (
    <header className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 pt-8 md:px-8 md:pt-12 ${isTransparent ? 'bg-transparent' : ''}`}>
      <div className="flex items-center gap-2">
        {/* Menu Mobile */}
        <div className="md:hidden relative" ref={menuRef}>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            className="btn-icon-ghost" 
            aria-label="Abrir menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="size-5">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path>
            </svg>
          </button>
          
          {isMobileMenuOpen && (
            <div className="absolute top-10 left-0 z-50 min-w-56 rounded-md border border-border bg-popover p-2 shadow-lg">
              <div role="menu">
                <div role="group" className="flex flex-col">
                  <Link href="/search" className="px-3 py-2 text-sm hover:bg-muted rounded-md">Pesquisar</Link>
                  <Link href="#how-it-works" className="px-3 py-2 text-sm hover:bg-muted rounded-md">Como funciona</Link>
                </div>
                
                <hr className="my-2 border-border" />
                
                {/* Lógica de auth para mobile */}
                <div role="group" className="flex flex-col">
                  {user ? (
                    <button onClick={logout} className="px-3 py-2 text-sm text-left text-red-600 hover:bg-red-50 rounded-md">
                      Sair ({user.displayName?.split(" ")[0]})
                    </button>
                  ) : (
                    <button onClick={signInWithGoogle} className="px-3 py-2 text-sm text-left hover:bg-muted rounded-md font-medium">
                      Entrar
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Jurisprudências.ai
        </Link>
      </div>

      <nav className="hidden items-center gap-6 md:flex">
        <Link href="#how-it-works" className="text-sm font-medium hover:underline">Como funciona</Link>
        <Link href="#plans" className="text-sm font-medium hover:underline">Planos</Link>
        <Link href="#faq" className="text-sm font-medium hover:underline">FAQ</Link>
      </nav>

      {/* Lógica de auth para desktop */}
      <div className="hidden shrink-0 items-center gap-4 md:flex">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Olá, {user.displayName?.split(" ")[0]}
            </span>
            {user.photoURL && (
              <img 
                src={user.photoURL} 
                alt="Avatar" 
                className="w-8 h-8 rounded-full border border-border"
                referrerPolicy="no-referrer"
              />
            )}
            <button onClick={logout} className="text-sm font-medium hover:underline text-muted-foreground">
              Sair
            </button>
          </div>
        ) : (
          <button onClick={signInWithGoogle} className="btn-primary cursor-pointer">
            Entrar
          </button>
        )}
      </div>
    </header>
  );
}