//const { request, response } = require("express");
const express = require("express");
const faker = require("faker");
const authHandler = require("../middlewares/authHandlers");
const product = require("../usercases/products") //para usar mongoose

const router = express.Router();

//get
router.get("/", async (request, response, next) => {
  // products = [];
  //const { limit } = request.query;
  /*esto es donde jalaba los productos, con mongo ya no se usa
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  if (limit) {
    // Si tiene limite entonces
    response.json({
      ok: true,
      payload:{ product},
    });
  } else {
    //Si no tiene limite
    response.json({
      ok: false,
      message: "El límite es obligatorio",
    });
  }
  */
  try {
    const products = await product.get()
    response.json({
      ok: true,
      message: "Done",
      payload: { products },
    });
  } catch (error) {
    next(error);
  }
})

//get by id
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;

  try {
    const productsid = await product.getById(id);
    response.json({
      ok: true,
      message: "Done!",
      payload: { productsid },
    });
  } catch (error) {
    next(error);
  }
});

//post
router.post('/', async (request, response, next) => {
  try {
    const productData = request.body;
    const productCreated = await product.created(productData);
    response.status(201).json({
      ok: true,
      message: "Created successfully",
      payload: {
        product: productCreated
      },
    })
  }
  catch (error) {
    next(error);
  }
})

//patch
router.patch('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    //const {name ,price}=request.body
    const productData = request.body;
    const productUpdate = await product.updated(id, productData);

    response.status(201).json({
      ok: true,
      message: `Product ${id} successfully`,
      payload: {
        productUpdate
      },
    })
  } catch (error) {
    next(error)
    response.status(404).json({
      ok: false,
      message: "Product not found"
    });
  }
})

//delete
router.delete("/:id", (request, response, next) => {
  const { id } = request.params;
  try {
    // Logica para eliminar
    const productDel = product.del(id)
    response.status(202).json({
      ok: true,
      message: `Product ${id} deleted successfully`,
    });
  } catch (error) {
    next(error)
  }
});

module.exports = router;