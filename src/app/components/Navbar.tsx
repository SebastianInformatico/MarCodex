"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d1f2d] shadow-md py-3 border-b border-[#1d2d3a]' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
             <div className="relative w-56 h-16">
               <img 
                 src="/marcodex_logo.png" 
                 alt="MarCodex Logo" 
                 className="object-contain w-full h-full"
               />
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <div className="flex gap-8">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nuestra Historia', href: '#historia' },
                { name: 'Tecnología', href: '#tecnologia' },
                { name: 'Contacto', href: '#contacto' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className={`text-base font-medium transition-colors ${item.name === 'Nuestra Historia' ? 'text-white font-bold border-b-2 border-primary pb-1' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button className="shadow-lg shadow-primary/20 text-sm font-bold">
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1f2d] border-t border-[#1d2d3a] shadow-xl p-4 flex flex-col gap-4">
           {[
            { name: 'Inicio', href: '#inicio' },
            { name: 'Nuestra Historia', href: '#historia' },
            { name: 'Tecnología', href: '#tecnologia' },
            { name: 'Contacto', href: '#contacto' }
          ].map((item) => (
             <a 
               key={item.name} 
               href={item.href}
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
             >
               {item.name}
             </a>
          ))}
          <Button className="w-full font-bold">
            Solicitar Demo
          </Button>
        </div>
      )}
    </nav>
  );
}
