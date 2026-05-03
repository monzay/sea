"use client";
import { useState } from "react";
import { Boton } from "@/components/interfaz/boton";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { TarjetaVehiculo } from "@/components/tarjeta-vehiculo";
import { obtenerTodasLasMarcas, obtenerVehiculosPorMarca } from "@/lib/vehiculos";
function ContenidoCatalogo() {
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const allBrands = obtenerTodasLasMarcas();
  const filteredVehicles = obtenerVehiculosPorMarca(selectedBrand);
  return <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <EncabezadoSeccion
    eyebrow="Catálogo completo"
    title="Todos nuestros vehículos"
    subtitle="disponibles."
    description="Encontrá el auto perfecto para vos. Todos nuestros vehículos están verificados y con garantía."
  />

        {
    /* Filters by Brand */
  }
        <div className="mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Filtrar por marca:</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Boton
    variant={selectedBrand === "Todas" ? "default" : "outline"}
    size="sm"
    className={`rounded-full text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 ${selectedBrand === "Todas" ? "bg-foreground text-background" : "border-foreground/20 hover:bg-foreground/5"}`}
    onClick={() => setSelectedBrand("Todas")}
  >
              Todas
            </Boton>
            {allBrands.map((brand) => <Boton
    key={brand}
    variant={selectedBrand === brand ? "default" : "outline"}
    size="sm"
    className={`rounded-full text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4 ${selectedBrand === brand ? "bg-foreground text-background" : "border-foreground/20 hover:bg-foreground/5"}`}
    onClick={() => setSelectedBrand(brand)}
  >
                {brand}
              </Boton>)}
          </div>
        </div>

        {
    /* Results count */
  }
        <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
          {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? "s" : ""} encontrado
          {filteredVehicles.length !== 1 ? "s" : ""}
        </p>

        {
    /* Vehicle Grid */
  }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredVehicles.map((vehicle, index) => <TarjetaVehiculo key={vehicle.id} vehicle={vehicle} index={index} />)}
        </div>

        {
    /* Empty state */
  }
        {filteredVehicles.length === 0 && <div className="text-center py-12 sm:py-16">
            <p className="text-muted-foreground text-base sm:text-lg">
              No hay vehículos disponibles de esa marca.
            </p>
            <Boton
    variant="outline"
    className="mt-4 rounded-full text-sm"
    onClick={() => setSelectedBrand("Todas")}
  >
              Ver todos los vehículos
            </Boton>
          </div>}

        {
    /* Back to home */
  }
        <div className="mt-12 sm:mt-16 text-center">
          <Boton
    variant="outline"
    className="rounded-full px-6 sm:px-8 h-10 sm:h-11 text-sm border-foreground/20 hover:bg-foreground/5"
    asChild
  >
            <a href="/">Volver al inicio</a>
          </Boton>
        </div>
      </div>
    </section>;
}
export {
  ContenidoCatalogo
};
