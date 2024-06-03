import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const products = [
  {
    id: "1",
    name: "Discos de Freno delanteros Volkwsagen Golf/Vento/Passat",
    description:
      "Discos de freno compatibles con todos los modelos de Volkswagen Golf, Vento, Passat.",
    price: 50000,
    stock: 3,
    category: "repuestos-originales",
    image: "/src/assets/productos/discofrenos.png",
  },
  {
    id: "2",
    name: "Aceite sintetico Motul 8100",
    description:
      "Aceite sintetico Motul 8100 para motores aspirados de inyección directa y motores Turbo, así sea a Nafta o Diesel.",
    price: 69000,
    stock: 9,
    category: "mantenimiento",
    image: "/src/assets/productos/aceitemotul.jpeg",
  },
  {
    id: "3",
    name: "Turbo Garret",
    description:
      "La línea de turbos Garret es la mejor opción para darle el plus de potencia que tu auto necesita.",
    price: 150000,
    stock: 2,
    category: "performance",
    image: "/src/assets/productos/turbogarrett.jpg",
  },
  {
    id: "4",
    name: "Radiador Volkwsagen Sharan, Vento",
    description:
      "Radiador de agua compatible de Volkswagen Sharan/Vento del 06' al 12'.",
    price: 135000,
    stock: 6,
    category: "repuestos-originales",
    image: "/src/assets/productos/radiador.webp",
  },
  {
    id: "5",
    name: "Pastillas de freno Bosch para Volswagen Gol G3",
    description:
      "Pastillas de freno Bosch para Volswagen Gol G3 del 00' al 07'.",
    price: 25000,
    stock: 10,
    category: "repuestos-originales",
    image: "/src/assets/productos/pastillasfreno.png",
  },
  {
    id: "6",
    name: "Intercooler de alto flujo de competición",
    description:
      "Intercooler de alto flujo para motores sobrealimentados. Gran capacidad de enfriamiento en todo tipo de circunstancias de uso. Adaptable para todos los modelos.",
    price: 300000,
    stock: 3,
    category: "performance",
    image: "/src/assets/productos/intercooler.webp",
  },
  {
    id: "7",
    name: "Líquido refrigerante Volkswagen G12++",
    description:
      "Líquido refrigerante que utiliza Volkswagen en la mayoría de sus motores, dando la mejor protección al mismo, evitando recalentamientos, congelamiento y deterioro prematuro.",
    price: 22000,
    stock: 12,
    category: "mantenimiento",
    image: "/src/assets/productos/refrigerante.webp",
  },
  {
    id: "8",
    name: "Líquido de frenos Volkswagen DOT4",
    description:
      "Líquido de frenos especifico Volkswagen para vehículos equipados con ABS.",
    price: 29000,
    stock: 12,
    category: "mantenimiento",
    image: "/src/assets/productos/liqfreno.webp",
  },
  {
    id: "9",
    name: "Bielas forjadas tipo I para motores 2.5 Volkswagen",
    description:
      "Las bielas están destinadas a aplicaciones de alto rendimiento. Aptas para motores 2.5 de Volkswagen.",
    price: 500000,
    stock: 2,
    category: "performance",
    image: "/src/assets/productos/bielasfor.jpg",
  },
];


const seedProducts = () => {
  products.map(({ id, ...rest }) => {
    addDoc(collection(db, "products"), rest);
  });
};
seedProducts();
