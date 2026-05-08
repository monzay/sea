"use client";
import { useEffect, useRef, useState } from "react";
const features = [
  {
    number: "01",
    title: "Financiamiento Flexible",
    description: "Planes de financiamiento a tu medida. Trabajamos con los principales bancos para ofrecerte las mejores tasas y cuotas accesibles.",
    visual: "finance"
  },
  {
    number: "02",
    title: "Garant\xEDa Extendida",
    description: "Todos nuestros veh\xEDculos cuentan con garant\xEDa. Usados con revisi\xF3n t\xE9cnica completa y nuevos con garant\xEDa de f\xE1brica.",
    visual: "warranty"
  },
  {
    number: "03",
    title: "Servicio Post-Venta",
    description: "Te acompa\xF1amos despu\xE9s de la compra. Service oficial, repuestos originales y atenci\xF3n personalizada.",
    visual: "service"
  },
  {
    number: "04",
    title: "Tasaci\xF3n al Instante",
    description: "\xBFQuer\xE9s entregar tu auto usado? Te lo tasamos sin compromiso y te ofrecemos el mejor precio del mercado.",
    visual: "valuation"
  }
];
function FinanceVisual() {
  return <svg viewBox="0 0 200 160" className="w-full h-full">
      {
    /* Chart bars */
  }
      {[0, 1, 2, 3, 4].map((i) => <rect
    key={i}
    x={40 + i * 28}
    y={120 - (20 + i * 18)}
    width="20"
    height={20 + i * 18}
    fill="currentColor"
    opacity="0.2"
    rx="2"
  >
          <animate
    attributeName="height"
    values={`${20 + i * 18};${30 + i * 18};${20 + i * 18}`}
    dur="2s"
    begin={`${i * 0.2}s`}
    repeatCount="indefinite"
  />
          <animate
    attributeName="y"
    values={`${120 - (20 + i * 18)};${120 - (30 + i * 18)};${120 - (20 + i * 18)}`}
    dur="2s"
    begin={`${i * 0.2}s`}
    repeatCount="indefinite"
  />
        </rect>)}
      
      {
    /* Dollar sign */
  }
      <text x="100" y="60" textAnchor="middle" fontSize="40" fontFamily="serif" fill="currentColor">$</text>
      
      {
    /* Growth arrow */
  }
      <path
    d="M 45 100 Q 80 80 100 70 T 155 35"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeDasharray="4 4"
  >
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>;
}
function WarrantyVisual() {
  return <svg viewBox="0 0 200 160" className="w-full h-full">
      {
    /* Shield */
  }
      <path
    d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  />
      
      {
    /* Inner shield glow */
  }
      <path
    d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
    fill="currentColor"
    opacity="0.1"
  >
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {
    /* Checkmark */
  }
      <path
    d="M 75 80 L 92 97 L 125 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
        <animate attributeName="stroke-dasharray" values="0 100;100 0" dur="1.5s" repeatCount="indefinite" />
      </path>
    </svg>;
}
function ServiceVisual() {
  return <svg viewBox="0 0 200 160" className="w-full h-full">
      {
    /* Wrench */
  }
      <g transform="translate(60, 40) rotate(-45)">
        <rect x="0" y="20" width="80" height="12" rx="2" fill="currentColor" opacity="0.3" />
        <circle cx="10" cy="26" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="10" cy="26" r="8" fill="currentColor" opacity="0.2" />
      </g>
      
      {
    /* Gear */
  }
      <g transform="translate(120, 90)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="currentColor" strokeWidth="2">
          <animateTransform
    attributeName="transform"
    type="rotate"
    from="0"
    to="360"
    dur="8s"
    repeatCount="indefinite"
  />
        </circle>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => <rect
    key={angle}
    x="-4"
    y="-30"
    width="8"
    height="12"
    fill="currentColor"
    opacity="0.3"
    transform={`rotate(${angle})`}
  >
            <animateTransform
    attributeName="transform"
    type="rotate"
    from={angle}
    to={angle + 360}
    dur="8s"
    repeatCount="indefinite"
  />
          </rect>)}
      </g>
    </svg>;
}
function ValuationVisual() {
  return <svg viewBox="0 0 200 160" className="w-full h-full">
      {
    /* Car silhouette */
  }
      <path
    d="M 40 100 L 50 100 L 55 80 L 75 70 L 125 70 L 145 80 L 150 100 L 160 100 L 160 110 L 40 110 Z"
    fill="currentColor"
    opacity="0.2"
  />
      
      {
    /* Wheels */
  }
      <circle cx="70" cy="110" r="12" fill="currentColor" opacity="0.3">
        <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 70 110"
    to="360 70 110"
    dur="2s"
    repeatCount="indefinite"
  />
      </circle>
      <circle cx="130" cy="110" r="12" fill="currentColor" opacity="0.3">
        <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 130 110"
    to="360 130 110"
    dur="2s"
    repeatCount="indefinite"
  />
      </circle>
      
      {
    /* Price tag */
  }
      <g transform="translate(100, 45)">
        <rect x="-30" y="-15" width="60" height="30" rx="4" fill="currentColor" opacity="0.1" />
        <text x="0" y="6" textAnchor="middle" fontSize="16" fontFamily="monospace" fill="currentColor">$$$</text>
      </g>
      
      {
    /* Sparkles */
  }
      {[[-40, 50], [140, 60], [100, 130]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>)}
    </svg>;
}
function AnimatedVisual({ type }) {
  switch (type) {
    case "finance":
      return <FinanceVisual />;
    case "warranty":
      return <WarrantyVisual />;
    case "service":
      return <ServiceVisual />;
    case "valuation":
      return <ValuationVisual />;
    default:
      return <FinanceVisual />;
  }
}
function FeatureCard({ feature, index }) {
  const [estaVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);
  return <div
    ref={cardRef}
    className={`group relative transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {
    /* Number */
  }
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {
    /* Content */
  }
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500 text-brand">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {
    /* Visual */
  }
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>;
}
function SeccionCaracteristicas() {
  const [estaVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return <section
    id="servicios"
    ref={sectionRef}
    className="relative py-24 lg:py-32"
  >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {
    /* Header */
  }
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Servicios
          </span>
          <h2
    className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
            Todo lo que necesitás.
            <br />
            <span className="text-muted-foreground">En un solo lugar.</span>
          </h2>
        </div>

        {
    /* Features List */
  }
        <div>
          {features.map((feature, index) => <FeatureCard key={feature.number} feature={feature} index={index} />)}
        </div>
      </div>
    </section>;
}
export {
  SeccionCaracteristicas
};
