const productList = document.getElementById("productList");

const cartList = document.getElementById("cartList");

let cart = [];

fetchProducts();

function fetchProducts() {

    fetch("http://localhost:3000/products")

        .then(response => response.json())

        .then(data => {

            data.forEach((product, index) => {

                productList.innerHTML += `

        <div class="product-card">

          <h3>${product.name}</h3>

          <p>Price: ₹${product.price}</p>

          <button onclick="addToCart(${index})">
            Add to Cart
          </button>

        </div>

      `;
            });

        });

}

function addToCart(index) {

    fetch("http://localhost:3000/products")

        .then(response => response.json())

        .then(data => {

            cart.push(data[index]);

            showCart();

        });

}

function showCart() {

    cartList.innerHTML = "";

    cart.forEach(product => {

        cartList.innerHTML += `

      <div class="product-card">

        <h3>${product.name}</h3>

        <p>Price: ₹${product.price}</p>

      </div>

    `;
    });

}