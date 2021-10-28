const { request, response } = require("express");
const express = require("express")
const faker = require("faker");
const categories = require("../usercases/categories");

const router = express.Router();

//get
router.get("/", async (request, response, next) => {
  const categories = [];
  const { limit } = request.query;

  try {
    const categoriess = await categories.get();
    response.json({
      ok: true,
      message: "Done!",
      payload: { categoriess },
    });
  } catch (error) {
    next(error);
  }
});

//get by id
router.get("/:id", async(request, response, next) => {
  const { id } = request.params

  try {
    const categories = await categories.getById(id);
    response.json({
      ok: true,
      message: "Done!",
      payload: { product },
    });
  } catch (error) {
    next(error);
  }
});

//post
router.post("/", async (request, next) => {
  try {
    const categoriesData = request.body;
    const categoriesCreated = await categories.create(categoriesData);

    response.status(201).json({
      ok: true,
      message: "Created successfully",
      payload: {
        categories: categoriesCreated,
      },
    });
  } catch (error) {
    next(error);
  }
});

//patch
router.patch("/:id", (request, response,) => {
  const { id } = request.params;
  const { categories } = request.body;

  if (id == 99) {
    response.status(404).json({
      ok: false,
      message: "Categories not found",
    });
  } else {
    response.status(201).json({
      ok: true,
      message: `Categories ${id} updated successfully`,
      payload: {
        categories,
      },
    });
  }
});

//delete
router.delete("/:id", (request, response) => {
  const { id } = request.params;
  // Logica para eliminar
  response.status(202).json({
    ok: true,
    message: `Categories ${id} deleted successfully`,
  });
});

module.exports = router;