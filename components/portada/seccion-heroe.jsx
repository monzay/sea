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
      {
    /* Subtle grid lines */
  }
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => <div
    key={`h-${i}`}
    className="absolute h-px bg-foreground/10"
    style={{
      top: `${12.5 * (i + 1)}%`,
      left: 0,
      right: 0
    }}
  />)}
        {[...Array(12)].map((_, i) => <div
    key={`v-${i}`}
    className="absolute w-px bg-foreground/10"
    style={{
      left: `${8.33 * (i + 1)}%`,
      top: 0,
      bottom: 0
    }}
  />)}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {
    /* Eyebrow */
  }
        <div
    className={`mb-8 transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-brand" />
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            Tu próximo auto te espera
          </span>
        </div>

        {
    /* Main headline */
  }
        <div className="mb-12">
          <h1
    className={`text-[clamp(3rem,12vw,10rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
  >
            <span className="block">Es hora de</span>
            <span className="block">
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex">
                  {words[wordIndex].split("").map((char, i) => <span
    key={`${wordIndex}-${i}`}
    className="inline-block animate-char-in"
    style={{
      animationDelay: `${i * 50}ms`
    }}
  >
                      {char}
                    </span>)}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-brand/20" />
              </span>
            </span>
          </h1>
        </div>

        {
    /* Description */
  }
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
    className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
            En {INFO_NEGOCIO.name} encontrás los mejores vehículos nuevos y usados. Aceptamos tu
            auto como parte de pago, financiamiento a tu medida y garantía.
          </p>

          {
    /* CTAs */
  }
          <div
    className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
            <Boton
    size="lg"
    className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full group"
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
