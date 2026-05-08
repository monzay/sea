"use client";
import { useEffect, useState } from "react";
import { Boton } from "@/components/interfaz/boton";
import { ArrowRight, Car } from "lucide-react";
import { INFO_NEGOCIO } from "@/lib/constantes";
const words = ["so\xF1ar", "conducir", "disfrutar", "viajar"];
function SeccionHeroe() {
  const [estaVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with responsive sizing and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg-truck.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/60" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div className={`mb-6 lg:mb-8 transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="inline-flex items-center gap-3 text-sm lg:text-base font-mono text-muted-foreground">
            <span className="w-6 h-px bg-brand" />
            <span className="w-2 h-2 rounded-full bg-brand" />
            Encuentra tu vehículo perfecto
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-8 lg:mb-12">
          <h1 className={`text-[clamp(2.5rem,9vw,8rem)] lg:text-[clamp(4rem,12vw,10rem)] font-display font-black leading-[0.85] lg:leading-[0.8] tracking-tighter transition-all duration-1000 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="block text-foreground">Encuentra</span>
            <span className="block text-brand">Tu auto ideal</span>
          </h1>
        </div>

        {/* Description and CTAs */}
        <div className="max-w-3xl">
          <p className={`text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed mb-8 lg:mb-10 transition-all duration-700 delay-200 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Acceso a autos y motos nuevos y usados. Financiamiento flexible, aceptamos tu vehículo y ofrecemos garantía.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Boton
              size="lg"
              className="bg-brand hover:bg-brand-light text-white px-8 h-14 text-base rounded-full group"
              asChild
            >
              <a href="#catalogo">
                Ver catálogo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Boton>
            <Boton
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="#contacto">
                <Car className="w-4 h-4 mr-2" />
                Contacto
              </a>
            </Boton>
          </div>
        </div>
      </div>
    </section>;
}
export {
  SeccionHeroe
};
