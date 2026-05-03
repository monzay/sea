const LISTA_VEHICULOS = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2024,
    kms: 15e3,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    brand: "Volkswagen",
    model: "Amarok V6",
    year: 2023,
    kms: 32e3,
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    brand: "Ford",
    model: "Ranger Limited",
    year: 2024,
    kms: 8500,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Cruze RS",
    year: 2023,
    kms: 45e3,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    brand: "Honda",
    model: "HR-V EXL",
    year: 2024,
    kms: 12e3,
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    brand: "Fiat",
    model: "Cronos Drive",
    year: 2023,
    kms: 58e3,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
  },
  {
    id: 7,
    brand: "Renault",
    model: "Duster",
    year: 2024,
    kms: 5e3,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop"
  },
  {
    id: 8,
    brand: "Peugeot",
    model: "208 GT",
    year: 2023,
    kms: 38e3,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop"
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Hilux SRX",
    year: 2024,
    kms: 22e3,
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&h=400&fit=crop"
  }
];
function obtenerPrimerosVehiculos(limit = 3) {
  return LISTA_VEHICULOS.slice(0, limit);
}
function obtenerTodosLosVehiculos() {
  return LISTA_VEHICULOS;
}
function obtenerNombreCompletoVehiculo(vehicle) {
  return `${vehicle.brand} ${vehicle.model}`;
}
function obtenerTodasLasMarcas() {
  const brands = [...new Set(LISTA_VEHICULOS.map((v) => v.brand))];
  return brands.sort();
}
function obtenerVehiculosPorMarca(brand) {
  if (brand === "Todas") return LISTA_VEHICULOS;
  return LISTA_VEHICULOS.filter((v) => v.brand === brand);
}
export {
  obtenerTodasLasMarcas,
  obtenerTodosLosVehiculos,
  obtenerPrimerosVehiculos,
  obtenerNombreCompletoVehiculo,
  obtenerVehiculosPorMarca,
  LISTA_VEHICULOS
};
