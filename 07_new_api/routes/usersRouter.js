const { request, response } = require("express");
const express = require("express");
const faker = require("faker");
const user = require("../usercases/users")
const router = express.Router();

// get
router.get("/", async (request, response, next) => {
  const users = [];
  const { limit } = request.query;
  /*
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
  });*/
  try {
    const users = await user.get();
    response.json({
      ok: true,
      message: "Done",
      payload: { users },
    })
  } catch (error) {
    next(error);
  }
});

// get id
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;

  try {
    const user = await user.getById(id);
    response.json({
      ok: true,
      message: "Done!",
      payload: { user },
    })
  } catch (error) {
    next(error);
  }
});

// post
router.post("/", async (request, response, next) => {
  try {
    const userData = request.body;
    const userCreated = await user.create(userData)

    response.status(201).json({
      ok: true,
      message: "New users created",
      payload: {
        user: userCreated,
      }
    })
  } catch (error) {
    next(error)
  }
});

// patch
router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { firstName, lastName, username, password, } = request.body;

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
        firstName,
        lastName,
        username,
        password,
      },
    });
  }
});

// delete
router.delete("/:id", (request, response) => {
  const { id } = request.params;
  // Logica para eliminar
  response.status(202).json({
    ok: true,
    message: `User ${id} deleted successfully`,
  });
});

module.exports = router;
