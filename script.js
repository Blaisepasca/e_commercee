// // Simulated product data
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.00,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Product 2",
      price: 20.00,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Product 3",
      price: 30.00,
      image: "https://via.placeholder.com/200"
    }
    
//   ];
  
//   let cart = [];
  
//   // Function to display products
//   function displayProducts() {
//     const productList = document.getElementById('product-list');
//     products.forEach(product => {
//       const productDiv = document.createElement('div');
//       productDiv.classList.add('product');
//       productDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p>$${product.price.toFixed(2)}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//       `;
//       productList.appendChild(productDiv);
//     });
//   }
  
//   // Function to add product to cart
//   function addToCart(productId) {
//     const product = products.find(p => p.id === productId);
//     cart.push(product);
//     updateCartCount();
//   }
  
//   // Function to update cart count
//   function updateCartCount() {
//     const cartCount = document.getElementById('cart-count');
//     cartCount.innerText = cart.length;
//   }
  
//   // Initialize
//   document.addEventListener('DOMContentLoaded', () => {
//     displayProducts();
//   });
  