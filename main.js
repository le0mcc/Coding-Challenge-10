// Coding Challenge 10: E-commerce Event-Driven Product Management
// Task 2: Add Event Listeners for Product Selection
// get product price and size
const price = document.getElementById('productPrice');
const sizeSelector = document.getElementById('wbSizeSelector');
// utilize event listeners by adjusting the shown price when a size is selected
sizeSelector.addEventListener('change', (event) => {
    const selectedPrice = event.target.value;
    price.textContent = `$${selectedPrice}`;
});

