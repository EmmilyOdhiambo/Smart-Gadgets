// https://dummyjson.com/products
function generateProductCards(data) {
  const MyProducts = document.getElementById("Products");
  
  data.forEach((product) => {
 
    const card = document.createElement("div");
    card.classList.add("product-card");
   
    card.innerHTML = `
              
            
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h2>${product.title}</h2>
            <div class='productPrice'>
            <p>${product.price}</p>
            <button>ADD TO CART</button>
            </div>
        `;

    MyProducts.appendChild(card);
  });
}
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
   
      const returnedData = data.products.slice(0, 8);
    
      generateProductCards(returnedData);
    });
}
fetchProducts()






