function addToCart(cardId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cardId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Картка додана в кошик!");
}
