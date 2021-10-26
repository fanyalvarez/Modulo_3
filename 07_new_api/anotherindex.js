/*const { request } = require("express");
const express= require("express");
const { fake } = require("faker");
const app = express();
const port = 8000;
const faker = require ("faker");

app.get("/", (request, response)=>{
    response.send("Hello World!");
});

// ruta para productos
app.get ("/products", (request, response)=>{
    const products = [];
    const { limit } = request.query;

    for (let index=0; index <limit; index++){
    products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), ),
        image: faker.image.imageUrl(), 
    });
}
    
    if (limit){
        //si tiene limite entonces
        response.json({
            ok: true,
            payload: products,
        });
    
    }else {
        // si no tiene limite
        response.json({
            ok: false,
            message: "el limite y la pagina son obligatorios",
        });
    }
}); 


app.get("/products/:id", (request, response)=>{
    const {id } = request.params;
    response.json({
        id, 
        name: "product 1 ",
        price: 1000,
    });
});



app.get("/categories/:categoryId/product/:productId", (request, response)=>{
        const { categoryId,productId }= request.params
    
        response.json({
            productId,
            categoryId, 
            name: "Porducto1",
            price: 1000,
        });
});

// protocolo:dominio:puerto/ruta

app.get("/departments", (request, response)=>{
    const departments =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        departments.push({
            departments: faker.commerce.department(),
    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: departments,
        });
    }else {
        response.json({
            ok:false, 
            message : " numero de departments"
        }); 
    }
});
outer.get("/departments/:departmentsId", (request, response, next) => {
    try {
      throw "Error generico";
      // const { id } = request.params;
      // response.json({
      //   id,
      //   name: "Product 1",
      //   price: 1000,
      // });
    } catch (error) {
      next(error);
    }
  });
//app.get ("/departments/:departmentsId", (request, response)=>{
       // const {departmentsId}= request.params; 
      //  response.json({
        //    departmentsId, 
            
 //       });
    
//});









router.post("/departments/", (request, response) => {
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


  router.patch("/departments/:departmentsId", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;
  
    if (id == 99) {
      response.status(404).json({
        ok: false,
        message: "Product not found",
      });
    } else {
      response.status(201).json({
        ok: true,
        message: `Product ${id} updated successfully`,
        payload: {
          name,
          price,
        },
      });
    }
  });
  
  router.delete("/departments/:departmentsId", (req, res) => {
    const { id } = req.params;
    // Logica para eliminar
    res.status(202).json({
      ok: true,
      message: `Product ${id} deleted successfully`,
    });
  });
  
  module.exports = router;



































// products
app.get("/allProducts", (request, response)=>{
    const allProducts =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        allProducts.push({
            name: faker.commerce.productName(),
            price: parseInt (faker.commerce.price()),
            image: faker.image.food(),

    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: allProducts,
        });
    }else {
        response.json({
            ok:false, 
            message : " alert"
        }); 
    }
});

app.get ("/allProducts/:allProductsId", (request, response)=>{
        const {allProductsId}= request.params; 
        response.json({
            allProductsId, 
            
        });
    
});

// users
app.get("/users", (request, response)=>{
    const users =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        users.push({
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            image: faker.image.animals(),
            
            //phone: parseInt (fake.phone.phoneNumber()),
            //avatar: fake.image.people(),


    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: users,
        });
    }else {
        response.json({
            ok:false, 
            message : " users"
        }); 
    }
});

app.get ("/users/:usersId", (request, response)=>{
        const {usersId}= request.params; 
        response.json({
            usersId, 
            
        });
    
});






app.listen(port, ()=>{
    console.log("listening on port:", port);
})
*/