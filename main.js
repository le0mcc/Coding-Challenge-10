const chooseSize = document.getElementById('wb-select');
let selection;
chooseSize.onchange = function() {
    selection = chooseSize.value
    updatePrice(selection)
    console.log(selection)
}

let productPrice = document.getElementById("price");
function updatePrice(size) {
    if (size === "small") {
        productPrice.innerText = "Price: $8"
    }
    else if (size === "medium") {
        productPrice.innerText = "Price: $9"
    }
    else if (size === "large") {
        productPrice.innerText = "Price: $10"
    }
    else if (size === "xlarge") {
        productPrice.innerText = "Price: $12"
    }
    else {
        productPrice.innerText = ""
    };
}