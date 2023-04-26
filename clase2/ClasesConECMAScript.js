class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que los campos no estén vacíos
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son requeridos.");
      return;
    }

    // Validar que no se agregue un producto con el mismo código identificador
    if (this.products.some((product) => product.code === code)) {
      console.error(
        `ERR: El código "${code}" ya ha sido utilizado para otro producto.`
      );
      return;
    }

    // Asignar un código identificador único al producto
    const product = {
      id: this.nextId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    this.nextId++;

    console.log(`El producto "${title}" ha sido agregado con éxito.`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error(`No se encontró ningún producto con el ID "${id}".`);
      return;
    }
    return product;
  }
}

//Se creará una instancia de la clase “ProductManager”
const manager = new ProductManager();

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(manager.getProducts());

//Se llamará al método “addProduct” (Cambie los campos por otros de futbol)
manager.addProduct("Camiseta de futbol", "Camiseta de Estudiantes de la Plata temporada 2023", 15000, "https://http2.mlstatic.com/D_NQ_NP_784655-MLA53707623978_022023-O.webp", "001", 100);
manager.addProduct("Short de futbol", "Short de Estudiantes de la Plata temporada 2023", 7000, "https://www.tiendapincha.com/ccstore/v1/images/?source=/file/v1878251715817376875/products/Short%20Titular%202023%20Ruge%20EdeLP%2001.png", "002", 50);

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
console.log(manager.getProducts());


//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("Camiseta de futbol", "Camiseta de Estudiantes de la Plata temporada 2023", 15000, "https://http2.mlstatic.com/D_NQ_NP_784655-MLA53707623978_022023-O.webp", "001", 100);





//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
const product = manager.getProductById(2);
console.log( product);

const notFoundProduct = manager.getProductById(99);

