document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
      alert(`You searched for: ${query}`);
    } else {
      alert("Please enter a product to search.");
    }
  });
  
  document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Login functionality coming soon!");
  });
  
  document.getElementById("cartBtn").addEventListener("click", function () {
    alert("Your cart is empty!");
  });
  
  document.querySelectorAll(".product-card button").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Product added to cart!");
    });
  });
  