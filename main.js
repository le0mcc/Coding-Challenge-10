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


// I attempted the rest of the tasks but got stuck at how to assign stock to each option. 
// I commented it out but left the code for proof of effort.

// // Task 3: Handle Stock Availability
// const inventoryCount = document.getElementById('stock')
// const purchaseButton = document.getElementById("purchaseItem")
// function updateInventory () {
//     if (inventoryCount === "In Stock") {
//         purchaseButton.disabled = false;
//     }
//     else {
//         purchaseButton.disabled = true;
//         // Task 4: Create a checkout event
//         alert("The item you are trying to purchase is out of stock. Please try a new size.")
//     };
// };
// updateInventory();
