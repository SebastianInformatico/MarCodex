"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/service_dev.png",
    title: "Desarrollo de Software a Medida",
    description: "Creamos aplicaciones y plataformas exclusivas para solucionar los desafíos únicos de tu centro de cultivo. Código robusto, pensado para escalar."
  },
  {
    image: "/service_data.png",
    title: "Consultoría y Análisis de Datos",
    description: "Transformamos tus planillas y registros históricos en modelos de proyección. Detecta patrones y toma decisiones basadas en datos reales.",
  },
  {
    image: "/service_support.png",
    title: "Soporte y Apps en Terreno",
    description: "Llevamos la tecnología al muelle. Aplicaciones móviles offline-first diseñadas para operarios, facilitando la captura de información donde sea."
  }
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl group">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
          
          {/* Gradient Overlay - Darkened for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#081218] via-[#081218]/90 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm shadow-sm">
              Nuestros Servicios
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight text-shadow">
              {slide.title}
            </h3>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl text-shadow">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-primary hover:text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 text-white hover:bg-primary hover:text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
