"use client";

import Navbar from './components/Navbar';
import ServiceCarousel from './components/ServiceCarousel';
import { motion } from 'framer-motion';
import {
  Anchor,
  ChevronDown,
  Terminal,
  Network,
  BrainCircuit,
  Leaf,
  Settings,
  Users,
  ArrowRight,
  ChartLine,
  NotebookPen,
  Satellite
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section: Deep Immersion */}
      <header id="inicio" className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/20 to-ocean-deep z-10"></div>
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/hero_realism.png")' }}
          >
          </motion.div>
        </div>
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-slate-100 mb-6 leading-tight tracking-tight text-shadow"
          >
            Raíces en el Agua,<br className="hidden md:block"/> Mirada en el Futuro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed text-shadow"
          >
            La historia de cómo transformamos la acuicultura del sur de Chile a través de la precisión, la trazabilidad y un profundo respeto por nuestro entorno.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 animate-bounce"
          >
            <ChevronDown className="text-slate-400 w-10 h-10 mx-auto" />
          </motion.div>
        </div>
      </header>

      {/* Section 1: The Origin (Editorial Layout) */}
      <section id="historia" className="relative py-24 bg-ocean-deep">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-primary/80">
                  <Anchor className="w-6 h-6" />
                  <span className="uppercase tracking-widest text-sm font-bold">El Origen</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Nacidos de la Marea</h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  MarCodex nació con un propósito claro: potenciar la industria acuícola y marítima a través de la tecnología. Desde el sur de Chile, donde el mar inspira y la innovación se construye con realismo, desarrollamos soluciones digitales que aportan trazabilidad, control de datos y procesos eficientes para productores, centros de cultivo, plantas acuícolas, lanchas de operación y navieras de transporte.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Nuestro enfoque integra ingeniería práctica, diseño inteligente y herramientas modernas para construir plataformas y aplicaciones que resuelven desafíos reales de la industria del mar. No solo creamos sistemas, creamos tecnología que impulsa el futuro de la acuicultura y la logística marítima, conectando cada proceso con claridad, eficiencia y visión de crecimiento.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent z-10"></div>
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition duration-700 ease-out"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYvlL8OEMTSuG1tZLcVQqrmsbCM8_WiF2cxTDVPwTqKgDY0EyDU4kmYiWBMtf7U6Qp4qbQu1I2Gx8GlJX_3nMrJ-sMIKLk2bMOzfy-o8fvoW9oeHB55nclpny-T1ZuQGeDzQIuHgtvahbbwxox3ca93El7r9U1e2QcAjBXf218oxG5CflCk9C_i3MqZkxnYa0EKF4gImfYpG_2gGnMO7Z0U2x9yUwpAfEQwd9fBNddIAlSAkWhhRBrBAymUVOeHkrYEYebTwywimI")' }}
                  >
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* Section 2: Tech Ecosystem & Impact */}
      <section id="tecnologia" className="py-24 bg-gradient-to-br from-ocean-dark to-ocean-deep relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Reveal width="100%">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Ecosistema Tecnológico</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                Datos que <span className="text-primary">Inspiran Confianza</span>
              </h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                No solo recolectamos información; la transformamos en activos estratégicos. Nuestra suite de herramientas conecta el mar con la nube.
              </p>
            </div>
          </Reveal>

          {/* Cards Grid with Stagger */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1: Custom Software */}
            <StaggerItem>
              <div className="group relative p-8 rounded-2xl bg-ocean-dark/50 backdrop-blur-sm border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">Desarrollo a Medida</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Creamos aplicaciones y plataformas específicas para tus necesidades. Desde software de gestión de biomasa hasta apps móviles para operarios en zonas sin señal.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: Data Integration */}
            <StaggerItem>
              <div className="group relative p-8 rounded-2xl bg-ocean-dark/80 backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(17,131,212,0.1)] hover:border-primary/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                    <Network className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-base md:text-xl text-white mb-3">Integración de Datos</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Unificamos la información de tus proveedores actuales. Centralizamos datos de laboratorios, sistemas de monitoreo y producción en un solo dashboard inteligible.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3: Advanced Algorithms */}
            <StaggerItem>
              <div className="group relative p-8 rounded-2xl bg-ocean-dark/50 backdrop-blur-sm border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <BrainCircuit className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">Modelos de Proyección</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Analizamos tus datos históricos para anticipar tendencias de crecimiento y detectar anomalías antes de que afecten la producción.
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Impact/Metrics Bar */}
          <Reveal width="100%" delay={0.4}>
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
              <div className="relative bg-ocean-dark/90 backdrop-blur border border-slate-800 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center shadow-2xl">
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-black text-white block">100%</span>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Soporte Local</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-black text-white block">24/7</span>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Monitoreo</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-black text-white block">+50</span>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Centros Conectados</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl lg:text-4xl font-black text-white block">Datos</span>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Proyectados</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2.5: Dual Impact (Digital Mind / Marine Heart) */}
      <section className="min-h-[600px] grid grid-cols-1 md:grid-cols-2 relative z-20">
        {/* Left Panel: Digital Mind */}
        <div className="relative h-full min-h-[500px] group overflow-hidden">
          <div className="absolute inset-0 bg-ocean-deep/60 z-10 group-hover:bg-ocean-deep/40 transition-colors duration-700"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: 'url("/marcodex_digital_mind.png")' }}
          ></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-12 space-y-6">
            <Reveal>
              <h3 className="text-4xl md:text-5xl font-black text-slate-100 mb-2">Gestión Integral</h3>
              <p className="text-blue-200 text-lg md:text-xl font-light max-w-md mx-auto">
                Centralizamos tu información operativa en un solo lugar, facilitando decisiones claras.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-500/20 hover:text-white mt-4 text-lg py-6 px-8 rounded-full">
                Explorar Software
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Right Panel: Marine Heart */}
        <div className="relative h-full min-h-[500px] group overflow-hidden">
          <div className="absolute inset-0 bg-ocean-deep/60 z-10 group-hover:bg-ocean-deep/40 transition-colors duration-700"></div>
           <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: 'url("/marcodex_marine_heart.png")' }}
          ></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-12 space-y-6">
             <Reveal>
              <h3 className="text-4xl md:text-5xl font-black text-slate-100 mb-2">Carácter Marino</h3>
              <p className="text-slate-300 text-lg md:text-xl font-light max-w-md mx-auto">
                Herramientas forjadas en la tormenta. Nacimos en el muelle, no en una oficina.
              </p>
             </Reveal>
             <Reveal delay={0.2}>
              <Button variant="outline" className="border-slate-400 text-slate-100 hover:bg-slate-500/20 hover:text-white mt-4 text-lg py-6 px-8 rounded-full">
                Ver Operaciones
              </Button>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3: Visual Grid & Values */}
      <section className="py-24 bg-ocean-deep">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100">Nuestra Esencia:<br/> <span className="text-primary">Autenticidad</span></h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-slate-300 text-lg font-light leading-relaxed">
                  No somos solo tecnología; somos parte del ecosistema. Cada línea de código que escribimos está pensada para resistir la salinidad, la lluvia y el viento del sur.
                </p>
              </Reveal>
              <StaggerContainer className="space-y-6 pt-4">
                <StaggerItem className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-lg">Sostenibilidad Real</h4>
                    <p className="text-slate-400 text-sm mt-1">Soluciones que cuidan el recurso marino para las futuras generaciones.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-lg">Ingeniería Local</h4>
                    <p className="text-slate-400 text-sm mt-1">Desarrollo tecnológico hecho en Chile, para los desafíos de Chile.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold text-lg">Comunidad</h4>
                    <p className="text-slate-400 text-sm mt-1">Trabajamos codo a codo con productores locales, grandes y pequeños.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Visual Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 h-full">

              <div className="col-span-2 md:col-span-2 row-span-2 h-80 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                  data-alt="Wide shot of multiple rows of mussels hanging from ropes in clear blue water"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDd8xvt1uOtVwpENFBT4It_FnitXq58Yb_JPka2gNCICypkz0QDXDZ8CUT1vJ-Zx4R1WSg2wq6EKfkfffuJKyrdzJ3cQbyPDrdU3FcqiwN8PvULsn8N2qf17xdFUpPTN0b334ICvjfDCsjq0z02ejQU-BMJW--ldwyb29s7AJ_mvKd5MNgl_DejvEaKoFzzh084U2hK5cy46RT2EOSu-xav7Q2jQNlD7nqRBUp3Os9WWX2d6QoPWN-WaUYqOaefyIFtL8Zws9Q")' }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-white text-xl font-bold tracking-tight">Centros de Cultivo</span>
                </div>
              </div>
              <div className="h-48 md:h-auto rounded-2xl overflow-hidden relative group">
                <div
                  className="w-full h-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                  data-alt="Texture of wet, dark rocks and barnacles on the Chilean coast"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6Hr6VKM1W8av2_hCfT0nkyyqjgqNr2AY7HqqIkfW47mcAh0pFCGppsoPI-BYRUcCdKKH7vttGBZuTZvuMkw98R9_hGdiphMBvRyGSwcyffk9kfHXdgImmyrE1uGr2U9sBYttg0t3qMk33XErIFWQ3xsgdjvalagT4PNWZy4LPGIWtmFZtPr3yf6YEgbhndtaINRkYS5VmRNWkXz9Ixw5waI-xHDyajbjn0EXl-P4amtYn2_yzEmy6tHjPHFm1mj3Sjiohkw6Rxbk")' }}
                >
                </div>
              </div>
              <div className="h-48 md:h-auto rounded-2xl overflow-hidden relative group">
                <div
                  className="w-full h-full bg-cover bg-center transition duration-700 group-hover:scale-110"
                  data-alt="A small red fishing boat bobbing in the water near the shore"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRorvQSXUnmlxoLgnXTwJXcaP0YAmmxK4KMLHd9AqPPCiuQVntNuDjUg-za88Ev8e8owQD4Ys3eX0oOR0Kf4QckPBQRHO6iU6-z6LTudfh050ATQ7rLNYXtRSEnIOqJoxvbvEjJB-MMAa7Hc4On58yGkOb7mks0mEU3rzekCVl4_H-AR1Ij_PgoCD1YYzgw1lRpdEuqclvt3SeHFhh0ShmBVeIO3D7D33aLYKyrmpLj9YCTzjLcSNqgWs7XKMfeNXGQK5cOLSdH9k")' }}
                >
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 h-32 md:h-auto rounded-2xl overflow-hidden relative group bg-slate-800 flex flex-col items-center justify-center text-center p-4 border border-slate-700">
                <span className="text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-primary text-sm font-medium">Expertos Locales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Services (Carousel) */}
      <section className="py-24 bg-gradient-to-b from-ocean-deep via-ocean-dark to-ocean-deep border-t border-slate-800 bg-noise">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal width="100%">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nuestras Soluciones</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
                Herramientas de <span className="text-primary">Trabajo</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Tecnología que se adapta a la faena, no al revés. Sistemas firmes para decisiones difíciles.
              </p>
            </div>
          </Reveal>
          <ServiceCarousel />
        </div>
      </section>

      {/* Section 5: Soluciones para Navieras */}
      <section className="py-24 bg-ocean-dark relative overflow-hidden bg-noise">
         {/* Background Elements */}
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-30"></div>

         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Logística Marítima</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight">
                  Software para <span className="text-primary">Flotas y Navieras</span>
                </h2>
                <p className="text-slate-300 text-lg mt-4 font-light">
                  Eficiencia operativa donde cada litro de combustible cuenta. Soluciones offline y optimización de rutas diseñados para el sur de Chile.
                </p>
              </div>
              <Button variant="outline" className="border-slate-700 text-slate-100 hover:bg-primary/10 hover:text-white h-auto py-3 px-6 text-base">
                Ver todas las soluciones
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: EcoNav */}
              <div className="group rounded-2xl bg-ocean-dark border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark to-transparent z-10"></div>
                  <img src="/logistics_econav.png" alt="EcoNav interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-8 relative z-20 -mt-12">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30">
                     <ChartLine className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">EcoNav Route</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Cálculo automático de ruta y velocidad óptima considerando mareas y corrientes. Ahorra hasta un 10% de combustible por viaje.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Reducción de Huella de Carbono</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Planificación Meteorológica</li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Bitácora Smart */}
              <div className="group rounded-2xl bg-ocean-dark border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark to-transparent z-10"></div>
                  <img src="/logistics_bitacora.png" alt="Bitacora Smart interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-8 relative z-20 -mt-12">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary transition-colors">
                     <NotebookPen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bitácora Smart</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Aplicación para tablet diseñada para el Patrón. Registra maniobras, horas de motor y novedades sin necesidad de internet. Sincronización automática al llegar a puerto.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Funciona sin Señal (Offline)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Reportes PDF Automáticos</li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Fleet Command */}
              <div className="group rounded-2xl bg-ocean-dark border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark to-transparent z-10"></div>
                  <img src="/logistics_fleet.png" alt="Fleet Command interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-8 relative z-20 -mt-12">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary transition-colors">
                     <Satellite className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Fleet Command</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Dashboard centralizado para Jefes de Flota. Visualiza la ubicación en tiempo real y recibe alertas predictivas de mantenimiento basadas en horas de motor reales.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Control de Mantenimiento</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Geocercas y Alertas</li>
                  </ul>
                </div>
              </div>
            </div>
         </div>
      </section>
      <section id="contacto" className="relative py-32 bg-ocean-deep flex flex-col items-center text-center px-4 overflow-hidden">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">Trabajemos Juntos</h2>
            <p className="text-xl text-slate-400 font-light mt-4">
              Súmate a la red de productores que ya tomaron el control de sus datos. Hablemos de su próxima temporada.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button className="h-auto py-4 px-8 text-base font-bold shadow-[0_0_20px_rgba(17,131,212,0.3)] gap-2">
                <span>Conocer Tecnología</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-auto py-4 px-8 text-base font-medium border-slate-600 bg-transparent text-slate-100 hover:bg-white/5 hover:text-white hover:border-slate-400">
                <span>Contactar Equipo</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="relative w-48 h-16 mb-4">
               <img 
                 src="/marcodex_logo.png" 
                 alt="MarCodex Logo" 
                 className="object-contain w-full h-full"
               />
             </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MarCodex. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Privacidad</a>
            <a className="hover:text-primary transition-colors" href="#">Términos</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
