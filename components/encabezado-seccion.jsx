"use client";
import { usarEnVista } from "@/hooks/usar-en-vista";
function EncabezadoSeccion({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left"
}) {
  const { ref, estaVisible } = usarEnVista();
  return <div ref={ref} className={`mb-16 lg:mb-24 ${align === "center" ? "text-center" : ""}`}>
      <span className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 ${align === "center" ? "justify-center" : ""}`}>
        <span className="w-8 h-px bg-foreground/30" />
        {eyebrow}
        {align === "center" && <span className="w-8 h-px bg-foreground/30" />}
      </span>
      
      <div className={`flex flex-col ${align === "left" ? "lg:flex-row lg:items-end lg:justify-between" : ""} gap-6`}>
        <h2
    className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
          {title}
          {subtitle && <>
              <br />
              <span className="text-muted-foreground">{subtitle}</span>
            </>}
        </h2>
        
        {description && <p className={`text-muted-foreground max-w-md ${align === "left" ? "lg:text-right" : "mx-auto"}`}>
            {description}
          </p>}
      </div>
    </div>;
}
export {
  EncabezadoSeccion
};
