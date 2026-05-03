"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/service_dev.png",
    title: "Desarrollo de software a medida",
    description:
      "Aplicaciones web, paneles internos y módulos operativos construidos según los procesos de cada empresa.",
  },
  {
    image: "/service_data.png",
    title: "Consultoría y análisis de datos",
    description:
      "Ordenamiento de planillas, registros históricos e información dispersa para convertirla en reportes útiles.",
  },
  {
    image: "/service_support.png",
    title: "Soporte y aplicaciones en terreno",
    description:
      "Herramientas móviles y flujos simples para capturar información desde faena, puerto u oficina.",
  },
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900 shadow-xl sm:h-[560px]">
      {slides.map((slide, index) => (
        <article
          key={slide.title}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading={index === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/82 to-ocean-deep/10" />

          <div className="absolute bottom-0 left-0 max-w-3xl p-6 sm:p-10 md:p-12">
            <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-100">
              Servicio
            </span>
            <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">{slide.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">{slide.description}</p>
          </div>
        </article>
      ))}

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/15 bg-ocean-deep/75 text-white backdrop-blur transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Ver servicio anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/15 bg-ocean-deep/75 text-white backdrop-blur transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Ver siguiente servicio"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-5 right-5 flex gap-2" aria-label="Seleccionar servicio">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-primary" : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
            aria-label={`Ver ${slide.title}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </div>
  );
}
