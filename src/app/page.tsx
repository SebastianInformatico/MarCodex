"use client";

import Navbar from "./components/Navbar";
import ServiceCarousel from "./components/ServiceCarousel";
import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Leaf,
  Network,
  NotebookPen,
  Satellite,
  Settings,
  Ship,
  Terminal,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";

const techCards = [
  {
    icon: Terminal,
    title: "Software a medida",
    description:
      "Diseñamos plataformas, paneles internos y aplicaciones de terreno ajustadas a la forma real de operar de cada empresa.",
  },
  {
    icon: Network,
    title: "Integración de información",
    description:
      "Ordenamos datos que hoy viven en planillas, sistemas externos o registros manuales para que sean más fáciles de consultar y usar.",
  },
  {
    icon: BarChart3,
    title: "Gestión y reportabilidad",
    description:
      "Construimos vistas claras para seguimiento operativo, trazabilidad, control documental y apoyo a la toma de decisiones.",
  },
];

const values = [
  {
    icon: Settings,
    title: "Desarrollo práctico",
    description: "Soluciones pensadas para equipos que trabajan con turnos, terreno, clima y conectividad variable.",
  },
  {
    icon: Anchor,
    title: "Conocimiento local",
    description: "Trabajamos desde el sur de Chile, cerca de los desafíos de la acuicultura y la logística marítima.",
  },
  {
    icon: Users,
    title: "Acompañamiento cercano",
    description: "Nos involucramos en el proceso, levantamos requerimientos y ajustamos la solución con el equipo usuario.",
  },
];

const clientTags = ["Gestión operativa", "Digitalización", "Software a medida"];

export default function Home() {
  return (
    <main className="min-h-screen bg-ocean-deep text-slate-100">
      <Navbar />

      <header id="inicio" className="relative flex min-h-[680px] w-full items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/hero_realism.png")' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-deep/82 to-ocean-deep/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ocean-deep to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              Tecnología aplicada a acuicultura y logística marítima
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Software para ordenar operaciones marítimas y acuícolas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              Desarrollamos plataformas, integraciones y aplicaciones de terreno para empresas del sur de Chile que necesitan más trazabilidad, control y claridad operativa.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-auto rounded-md px-6 py-4 text-base font-semibold">
                <a href="#contacto">
                  Conversar un proyecto
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-md border-white/25 bg-white/5 px-6 py-4 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#soluciones">Ver soluciones</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="historia" className="bg-ocean-deep py-20 sm:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                <Anchor className="h-5 w-5" />
                Nuestra mirada
              </span>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Tecnología hecha cerca de la operación
              </h2>
              <p className="text-lg leading-relaxed text-slate-300">
                MarCodex nace para apoyar a empresas acuícolas, marítimas y salmoneras que necesitan digitalizar procesos sin perder el criterio práctico del terreno.
              </p>
              <p className="leading-relaxed text-slate-400">
                Trabajamos en levantamiento, diseño, desarrollo e integración de sistemas para ordenar información, reducir trabajo manual y entregar herramientas simples de usar para equipos operativos y administrativos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 shadow-xl">
              <img
                src="/team_support_dock.png"
                alt="Equipo revisando información operativa en un entorno marítimo"
                className="h-[360px] w-full object-cover md:h-[460px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="tecnologia" className="border-y border-slate-800 bg-ocean-dark py-20 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <Reveal width="100%">
            <div className="mb-12 max-w-3xl">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">Cómo trabajamos</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Sistemas claros para procesos exigentes</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Combinamos desarrollo web, automatización e integración de datos para que la información crítica esté disponible cuando el equipo la necesita.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3" staggerDelay={0.12}>
            {techCards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={card.title}>
                  <article className="h-full rounded-lg border border-slate-700/80 bg-slate-900/45 p-7 transition-colors hover:border-primary/50">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <Reveal width="100%" delay={0.2}>
            <div className="mt-10 grid gap-4 rounded-lg border border-slate-700/80 bg-ocean-deep/55 p-6 sm:grid-cols-3">
              {["Soporte cercano", "Procesos trazables", "Soluciones escalables"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="grid min-h-[520px] grid-cols-1 md:grid-cols-2">
        <article className="relative min-h-[420px] overflow-hidden">
          <img src="/marcodex_digital_mind.png" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean-deep/72" />
          <div className="relative z-10 flex h-full flex-col justify-center p-8 sm:p-12 lg:p-16">
            <FileText className="mb-5 h-9 w-9 text-primary" />
            <h3 className="max-w-md text-3xl font-bold text-white md:text-4xl">Gestión digital ordenada</h3>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">
              Paneles, formularios, reportes y flujos internos diseñados para reducir duplicidad y facilitar seguimiento.
            </p>
          </div>
        </article>

        <article className="relative min-h-[420px] overflow-hidden">
          <img src="/marcodex_marine_heart.png" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean-deep/72" />
          <div className="relative z-10 flex h-full flex-col justify-center p-8 sm:p-12 lg:p-16">
            <Ship className="mb-5 h-9 w-9 text-primary" />
            <h3 className="max-w-md text-3xl font-bold text-white md:text-4xl">Herramientas para terreno</h3>
            <p className="mt-4 max-w-md leading-relaxed text-slate-300">
              Aplicaciones y módulos pensados para uso operativo, con foco en claridad, continuidad y captura confiable de datos.
            </p>
          </div>
        </article>
      </section>

      <section className="bg-ocean-deep py-20 sm:py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Una forma de trabajo simple y responsable</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-slate-300">
                Antes de proponer tecnología, entendemos el proceso. Esa base permite construir soluciones útiles, mantenibles y coherentes con la operación diaria.
              </p>
            </Reveal>
            <StaggerContainer className="space-y-5 pt-2" staggerDelay={0.1}>
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <StaggerItem key={value.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-slate-800 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{value.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/software_dev_sea.png" alt="Interfaz digital aplicada a operación marítima" className="col-span-2 h-72 w-full rounded-lg object-cover sm:h-80" loading="lazy" />
            <img src="/data_analysis_meeting.png" alt="Revisión de datos y planificación de proyecto" className="h-48 w-full rounded-lg object-cover" loading="lazy" />
            <div className="flex h-48 flex-col justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-6">
              <Leaf className="mb-4 h-7 w-7 text-accent-teal" />
              <p className="text-lg font-semibold text-white">Tecnología con criterio operativo y mirada local.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="border-y border-slate-800 bg-ocean-dark py-20 sm:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal width="100%">
            <div className="mb-12 max-w-3xl">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">Nuestras soluciones</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Herramientas para digitalizar procesos</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Desarrollo de software, análisis de información y soporte para equipos que necesitan operar con más orden y menos fricción.
              </p>
            </div>
          </Reveal>
          <ServiceCarousel />
        </div>
      </section>

      <section className="bg-ocean-deep py-20 sm:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">Logística marítima</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Software para flotas, rutas y control operativo</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Soluciones para ordenar registros, planificar actividades, centralizar información de flota y apoyar decisiones diarias en operaciones marítimas.
              </p>
            </div>
            <Button asChild variant="outline" className="h-auto rounded-md border-slate-600 bg-transparent px-5 py-3 text-slate-100 hover:bg-white/5 hover:text-white">
              <a href="#contacto">
                Consultar alcance
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                image: "/logistics_econav.png",
                icon: BarChart3,
                title: "Planificación de rutas",
                description: "Módulos para apoyar planificación, revisión de variables operativas y seguimiento de viajes.",
                items: ["Apoyo a planificación", "Control de registros"],
              },
              {
                image: "/logistics_bitacora.png",
                icon: NotebookPen,
                title: "Bitácoras digitales",
                description: "Registro de maniobras, horas, novedades y documentos desde una interfaz clara para equipos en terreno.",
                items: ["Uso operativo", "Reportes ordenados"],
              },
              {
                image: "/logistics_fleet.png",
                icon: Satellite,
                title: "Control de flota",
                description: "Paneles para centralizar estado de embarcaciones, mantenimientos, alertas y antecedentes relevantes.",
                items: ["Seguimiento interno", "Gestión documental"],
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/45">
                  <img src={card.image} alt="" className="h-48 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.description}</p>
                    <ul className="mt-5 space-y-2 text-sm text-slate-400">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="clientes" className="border-y border-slate-800 bg-ocean-dark py-20 sm:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal width="100%">
            <div className="mb-10 max-w-3xl">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">Proyectos reales</span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Clientes que confían en nosotros</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Proyectos desarrollados junto a empresas que buscan ordenar, digitalizar y mejorar sus procesos.
              </p>
            </div>
          </Reveal>

          <Reveal width="100%" delay={0.15}>
            <article className="grid gap-8 rounded-lg border border-slate-700/80 bg-slate-900/50 p-6 sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="rounded-lg border border-slate-700 bg-ocean-deep/70 p-8">
                <span className="text-sm font-medium uppercase tracking-widest text-primary">Cliente</span>
                <h3 className="mt-3 text-3xl font-bold text-white">Puclaro</h3>
                <p className="mt-2 text-sm text-slate-400">Desarrollo digital / solución tecnológica</p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-slate-300">
                  Colaboramos con Puclaro en el desarrollo de una solución digital orientada a ordenar procesos, mejorar la gestión de información y entregar una experiencia más clara y eficiente para su operación.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {clientTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm text-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-ocean-deep px-4 py-20 text-center sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold tracking-normal text-white md:text-4xl">Trabajemos juntos</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              Si tu operación necesita ordenar información, digitalizar procesos o integrar sistemas, podemos revisar el caso y definir un primer alcance.
            </p>
          </Reveal>
          <Reveal width="100%" delay={0.15}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="h-auto rounded-md px-6 py-4 text-base font-semibold">
                <a href="mailto:contacto@marcodex.cl">
                  Contactar equipo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-auto rounded-md border-slate-600 bg-transparent px-6 py-4 text-base text-slate-100 hover:bg-white/5 hover:text-white">
                <a href="#clientes">Ver cliente destacado</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-ocean-deep py-10">
        <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <img src="/marcodex_logo.png" alt="MarCodex" className="h-12 w-auto" loading="lazy" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              Desarrollo de software e integración tecnológica para acuicultura, logística marítima y operaciones del sur de Chile.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a className="transition-colors hover:text-primary" href="#inicio">Inicio</a>
            <a className="transition-colors hover:text-primary" href="#soluciones">Soluciones</a>
            <a className="transition-colors hover:text-primary" href="#clientes">Clientes</a>
            <a className="transition-colors hover:text-primary" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
