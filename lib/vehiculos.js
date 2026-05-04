const LISTA_VEHICULOS = [
  {
    id: 1,
    brand: "Fiat",
    model: "Toro freedom ",
    year: 2018,
    kms: 0,
      image: "./vehiculos/fiat_toro.jpeg"
  
  },
  {
    id: 2,
    brand: "Wolkswagen",
    model: "Amarok starline 2.0 ",
    year: 2017,
    kms: 180000,
    image: "./vehiculos/amarok_starline.jpeg"
  },
  {
    id: 3,
    brand: "Ford",
    model: "Eco Sport 1.6",
    year: 2017,
    kms: 147.000,
    image: "./vehiculos/eco sport.jpeg"
  },
  {
    id: 4,
    brand: "Brava",
    model: "Altino",
    year: 2013,
    kms: 0,
    image: "./vehiculos/brava_altino.jpeg"
  },
  {
    id: 5,
    brand: "Fiat",
    model: "Argo",
    year: 2024,
    kms: 12e3,
    image: "./vehiculos/fiat_argo.jpeg"
  },
  {
    id: 6,
    brand: "Renault",
    model: "Duster 2.0 PRIVILEGE",
    year: 2012,
    kms: 190000,
    image: "./vehiculos/duster.jpeg"
  },
  {
    id: 7,
    brand: "Fiat",
    model: "Uno",
    year: 2010,
    kms: 300.000,
    image: "./vehiculos/fiat_uno.jpeg"
  },
  {
    id: 8,
    brand: "Ford",
    model: "ka",
    year: 2013,
    kms: 125000,
     image: "./vehiculos/ford ka.jpeg"
  },
  {
    id: 9,
    brand: "Wolkswagen",
    model: "Gol power",
    year: 2024,
    kms: 22e3,
     image: "./vehiculos/gol_power.jpeg"
  },
  {
    id: 10,
    brand: "Motomel",
    model: "skua",
    year: 2025,
    kms: 0,
     image: "./vehiculos/motomel_skua.jpeg"
  },
  {
    id:11,
    brand: "Peugeot",
    model: "Partner patagonica",
    year: 2018,
    kms: 0,
     image: "./vehiculos/pernet.jpeg"
  }
  , {
    id: 12,
    brand: "Rouser",
    model: " NS 200",
    year: 2018,
    kms: 42000,
     image: "./vehiculos/rousen_200.jpeg"
  }, {
    id: 13,
    brand: "Chery",
    model: "Tiggo 1.6",
    year: 2020,
    kms: 114000,
     image: "./vehiculos/tiggo.jpeg"
  }, {
    id: 14,
    brand: "TVS",
    model: "RTR 160cc",
    year: 2024,
    kms: 0,
     image: "./vehiculos/tvs_160.jpeg"
  }, {
    id: 15,
    brand: "Wolkswagen",
    model: "Up 1.0",
    year:  2016,
    kms:  95000,
     image: "./vehiculos/up.jpeg"
  }
  , {
    id: 16,
    brand: "Corven",
    model: "Triax 200cc",
    year:  2025,
    kms:  0,
     image: "./vehiculos/up.jpeg"
  }
  , {
    id: 17,
    brand: "Corven",
    model: "Triax 150cc",
    year:  2025,
    kms:  0,
     image: "./vehiculos/up.jpeg"
  },
  {
    id: 18,
    brand: "Toyota",
    model: "Hilux Dx 2.4 turbo diesel",
    year:  2020,
    kms:  0,
     image: "./vehiculos/up.jpeg"
  },
  {
    id: 19,
    brand: "Wolkswagen",
    model: "gol trend 1.6",
    year:  2010,
    kms:  0,
     image: "./vehiculos/up.jpeg"
  }
  ,{
    id: 20,
    brand: "Fiat",
    model: "uno color rojo",
    year:  2009,
    kms:  0,
     image: "./vehiculos/up.jpeg"
  },{
    id: 21,
    brand: "Fiat",
    model: "uno color blanco",
    year:  2011,
    kms:  0,
     image: "./vehiculos/up.jpeg"
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
