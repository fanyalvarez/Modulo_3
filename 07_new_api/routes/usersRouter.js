const { request, response } = require("express");
const express = require("express");
const faker = require("faker");

const router = express.Router();

// users
router.get("/", (request, response) => {
  const users = [];
  const { limit } = request.query;

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      image: faker.image.animals(),
    });
  };

  if (limit) {
    // Si tiene limite entonces
    response.json({
      ok: true,
      payload: users,
    });
  } else {
    //Si no tiene limite
    response.json({
      ok: false,
      message: "users"
    });
  }
});


router.get("/:id", (request, response, next) => {
  try {
    const { id } = request.params;
    response.json({
      id,
      name: "Fany",
      lastName: "Alvarez",
      email:"fany@hola.com",
  })
  } catch (error) {
    next(error);
  }
});

router.post("/users/", (request, response) => {
  const body = request.body;
  response.json({
    ok: true,
    message: "Created successfully",
    payload: {
      body,
    },
  });
});



router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { name, lastName, email, image } = request.body;

  if (id == 99) {
    response.status(404).json({
      ok: false,
      message: "user not found",
    });
  } else {
    response.status(201).json({
      ok: true,
      message: `User ${id} updated successfully`,
      payload: {
        name,
        lastName,
        email,
        image,
      },
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // Logica para eliminar
  res.status(202).json({
    ok: true,
    message: `User ${id} deleted successfully`,
  });
});

module.exports = router;
