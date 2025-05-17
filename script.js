// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset for header
      behavior: 'smooth',
    });
  });
});

// Example Button Click Alert (on banner button)
const bannerButton = document.querySelector('.banner button');

bannerButton.addEventListener('click', () => {
  alert('Welcome to our website!');
});








const products = [
  { id: 1, name: "Adam's Salted Butter 50g", price: 200 },
  { id: 2, name: "Melon-Kharbooza 500g", price: 400 },
  { id: 3, name: "Orange-Kinnu Half Dozen", price: 340 },
  { id: 4, name: "Cucumber-Kheera 1kg", price: 100 },
  { id: 5, name: "Knorr Noodles 6 Packets", price: 290 },
  { id: 6, name: "Super Crisps Chips BBQ", price: 60 },
  { id: 7, name: "Olper's Full Cream Milk 1000ml", price: 360 },
  { id: 8, name: "K&N's Chicken Standard Cut 1Kg", price: 799 },
  { id: 9, name: "Fresh Eggs 12 Pieces", price: 325 },
  { id: 10, name: "Potato Aalu Medium (Okara) 1Kg", price: 102 },
  { id: 11 name: "Nescafe Pet Bottle Spanish Lattee 220ml", price: 171 },
  { id: 12, name: "Vim Dishwashing Powder Lemon 400g", price: 77 },
];

const cart = [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Render products dynamically
function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("calculator-card");
    productCard.innerHTML = `
      <h2>${product.name}</h2>
      <p>Rs. ${product.price.toFixed(2)}</p>
      <button class="calculator-button" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
}

// Add to cart function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = cart.map(item => `<p>${item.name} - Rs. ${item.price}</p>`).join("");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `Total: Rs. ${total.toFixed(2)}`;
}

// Initialize
renderProducts();
