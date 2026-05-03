"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Enfoque", href: "#historia" },
  { name: "Soluciones", href: "#soluciones" },
  { name: "Clientes", href: "#clientes" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-800 bg-ocean-deep/92 py-3 shadow-lg backdrop-blur"
          : "border-transparent bg-ocean-deep/20 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center" aria-label="Ir al inicio de MarCodex">
            <img src="/marcodex_logo.png" alt="MarCodex" className="h-12 w-auto sm:h-14" />
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <Button asChild className="h-auto rounded-md px-4 py-2.5 text-sm font-semibold">
              <a href="#contacto">Conversar</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="text-white hover:bg-white/10 md:hidden"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-800 bg-ocean-deep p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="mt-3 w-full rounded-md font-semibold">
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                Conversar
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
