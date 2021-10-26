const { request, response } = require("express");
const express = require ("express")
const faker = require("faker");

const router= express.Router ()

//categories
router.get("/", (request, response)=>{
    const categories =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        categories.push({
            categories: faker.commerce.department(),
    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: categories,
        });
    }else {
        response.json({
            ok:false, 
            message : "El límite es obligatorio"
        }); 
    }
});
router.get("/:id", (request, response, next) => {
    try {
       const { id } = request.params;
       response.json({
         id,
         category: "node"
       });
    } catch (error) {
      next(error);
    }
  });

router.post("/", (request, response) => {
    const body = request.body;
  
    // Logica del negocio
  
    response.status(201).json({
      ok: true,
      message: "Created successfully",
      payload: {
        body,
      },
    });
  });

  router.patch("/:id", (request, response) => {
    const { id } = request.params;
    const { categories } = request.body;
  
    if (id == 99) {
      response.status(404).json({
        ok: false,
        message: "Category not found",
      });
    } else {
      response.status(201).json({
        ok: true,
        message: `Category ${id} updated successfully`,
        payload: {
          categories,
        },
      });
    }
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    // Logica para eliminar
    res.status(202).json({
      ok: true,
      message: `Category ${id} deleted successfully`,
    });
  });
  
  module.exports = router;