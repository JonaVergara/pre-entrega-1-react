const products = [
  {
    id: 1,
    name: "Head Radical MP",
    description: "Head Radical MP es una raqueta de tenis de alto rendimiento diseñada para jugadores polivalentes y agresivos que buscan el equilibrio perfecto entre control, potencia y efectos.",
    stock: 5,
    image: "/img/headradical.jpg",
    price: 540000,
    brand: "head"
  },
  {
    id: 2,
    name: "Head Speed MP",
    description: "Head Speed MP es una raqueta de tenis de alto rendimiento diseñada para jugadores que buscan potencia y control en cada golpe.",
    stock: 2,
    image: "/img/headspeed.jpg",
    price: 600000,
    brand: "head"
  },
  {
    id: 3,
    name: "Wilson Ultra 99 Pro",
    description: "La Wilson Ultra 99 Pro es una raqueta de alto rendimiento dirigida a jugadores avanzados o de nivel intermedio-avanzado que buscan una combinación de potencia explosiva, efectos consistentes y una estabilidad sólida.",
    stock: 6,
    image: "/img/wilsonultra.jpg",
    price: 400000,
    brand: "wilson"
  },
  {
    id: 4,
    name: "Wilson Blade 98",
    description: "Wilson Blade 98 la raqueta de tenis más icónica del mercado, diseñada principalmente para jugadores avanzados y de nivel intermedio que buscan una precisión quirúrgica, excelente sensibilidad y un control máximo",
    stock: 16,
    image: "/img/wilsonblade.jpg",
    price: 500000,
    brand: "wilson"
  },
  {
    id: 5,
    name: "Babolat Pure Aero",
    description: "La Babolat Pure Aero es una raqueta de tenis de élite diseñada para jugadores agresivos que buscan potencia explosiva y el máximo efecto liftado",
    stock: 7,
    image: "/img/babolataero.jpg",
    price: 560000,
    brand: "babolat"
  },
  {
    id: 6,
    name: "Babolat Pure Drive",
    description: " La Babolat Pure Drive es una de las raquetas de tenis más famosas y vendidas del mundo, diseñada para jugadores que buscan potencia explosiva, gran salida de pelota y efectos sin tener que realizar un esfuerzo físico extremo.",
    stock: 8,
    image: "/img/babolatdrive.jpg",
    price: 450000,
    brand: "babolat"
  }
]


 export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(products.length === 0) {
        reject("No se encontraron productos");
      } else {
        resolve(products);
      }
    }, 1000);
  });
}


export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((productData) => productData.id === parseInt(productId));
      if(!product) {
        reject("Producto no encontrado");
      }else {
        resolve(product);
      }
    }, 1000);
  })
}