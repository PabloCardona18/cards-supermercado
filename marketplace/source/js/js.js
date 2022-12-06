// const products = {
//   name:"rice",
//   price:"1$",
//   quantity:10,
//   image:"source/img/eggs.jpg",
// }

const products = [
  {name:"eggs", price:"$700",quantity:6,image:"source/img/eggs.jpg"},
  {name:"lettuce", price:"$1500",quantity:2,image:"source/img/lettuce.jpg"},
  {name:"milk", price:"$3500",quantity:3,image:"source/img/milk.jpeg"},
  {name:"onion", price:"$600",quantity:5,image:"source/img/onion.jpg"},
  {name:"potato", price:"$1800",quantity:10,image:"source/img/potato.webp"},
  {name:"rice", price:"$3000",quantity:9,image:"source/img/rice.webp"},
]

const mainContent = document.getElementById("mainContent");

const createCard = (products) => {
  const cardProduct = document.createElement("div");
  const nameProduct = document.createElement("h2");
  const priceProduct = document.createElement("p");
  const quantityProduct = document.createElement("p");
  const imageProduct = document.createElement("img");
  const btnAddToCart = document.createElement("button");

  nameProduct.textContent = products.name;
  priceProduct.textContent= products.price;
  quantityProduct.textContent= products.quantity;
  imageProduct.setAttribute("src",products.image);
  imageProduct.setAttribute("alt",products.image);
  btnAddToCart.textContent = "add to Cart";

  // classList.add(); agregar clases
  cardProduct.classList.add();

  // appendChild=especifica, separa los nodos
  cardProduct.appendChild(nameProduct);
  cardProduct.appendChild(imageProduct);
  cardProduct.appendChild(priceProduct);
  cardProduct.appendChild(quantityProduct);
  cardProduct.appendChild(btnAddToCart);

  mainContent.appendChild(cardProduct);
}

function renderCard() {
  products.map((products)=>{return createCard(products)})
  createCard();
}

window.addEventListener('DOMContentLoaded', renderCard);