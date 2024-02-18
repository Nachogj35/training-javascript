
let shoppingCart = {

product1:{
    id: "1",
    name: "Nike air zoom pegasus ",
    price: 120,
    quantity: 326,
},


product2: {

    id: "2",
    name: "Nike ZoomX Vaporfly",
    price: 299.15,
    quantity: 25,
},

product3 : {

    id: "3",
    name: "Nike Air Force Max",
    price: 384,
    quantity: 83,
},

product4 : {

    id: "4",
    name: "Nike Air 500",
    price: 89.80,
    quantity: 83,
},
}

//console.log(
  //">1",  shoppingCart.product1.id, "Name",shoppingCart.product1.name,
  //">2",  shoppingCart.product2.id, "Name",shoppingCart.product2.name,
  //">3",  shoppingCart.product3.id, "Name",shoppingCart.product3.name,
  //">4",  shoppingCart.product4.id, "Name",shoppingCart.product4.name,
  //);

  
let keys = Object.values(shoppingCart);

for(let i = 0 ; i<Object.keys(shoppingCart).length ; i++)
{
    console.log("Id : "+keys[i].id+" Name :"+keys[i].name);
}