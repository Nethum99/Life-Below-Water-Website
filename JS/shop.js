let shoppingCart=[];        // Array to store the items in the shopping cart


// save the items in the cart to localStorage
function saveShoppingCartToLocalStorage(shoppingCart) {
    localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCart));        // Save the shopping cart items to localStorage
}

// Retrieve the shopping cart items from localStorage
function getShoppingCartFromLocalStorage() { //funtion name
    const shoppingCartItems = localStorage.getItem('shoppingCartItems');
    return shoppingCartItems ? JSON.parse(shoppingCartItems) : [];      // Parse the stored cart items or return an empty array if there are none
}


// add an item to the shopping cart
function itemsAddShoppingCart(shoppingItemName,shoppingItemPrice){

    // Check if the item already exists in the shopping cart
    const presentItemsInCart=shoppingCart.findIndex(shoppingItem=>shoppingItem.name===shoppingItemName);/*This line searches for an item in the cart array with the same name as the name parameter passed to the add function.
    If an item with the same name is found, findIndex returns the index of that item in the array. If no such item is found, it returns -1.*/ 

    // If the item already exists, increase its quantity; otherwise, add it to the cart
    if(presentItemsInCart !== -1){
        shoppingCart[presentItemsInCart].quantity++;
    }
    else{
        shoppingCart.push({name:shoppingItemName,price:shoppingItemPrice,quantity:1})
    }

    saveShoppingCartToLocalStorage(shoppingCart);       // Save the updated shopping cart to localStorage
    updateShoppingCartItemsCount();     // Update the count of items in the shopping cart displayed in the header
}

// update the count of items in the shopping cart displayed in the header
function updateShoppingCartItemsCount() {
    const shoppingCartItemesCounting = document.querySelector('.iconCount');        //query selector is a JS method,it allows to select the first element in the document that matches a specified CSS selector.
    shoppingCartItemesCounting.textContent = shoppingCart.reduce((shoppingCartItemsTotal, item) => shoppingCartItemsTotal + item.quantity, 0);
}

// dynamically display the items in the shopping cart
function showShoppingCartItems() {
    const cartShoppingContainer = document.getElementById('shoppingCartElements');

    // Clear any existing items in the cart container
    cartShoppingContainer.innerHTML = '';

    // Loop through the items in the cart and generate HTML for each item
    shoppingCart.forEach((shoppingCartItem, itemPlaceInCart) => {
            const shoppingCartCode = `
            <div>
            <hr>
            <span class="cartWindowItemName">${shoppingCartItem.name}</span>
            <br><br>
            <div class='cartWindowItems'>
              <span class="cartWindowItemprice">Price  : $${shoppingCartItem.price}</span>
              <br>
              <br>
              <span for="quantity-${itemPlaceInCart}">Quantity:
              <input
                type="number"
                id="quantity-${itemPlaceInCart}"
                value="${shoppingCartItem.quantity}"
                min="1"
                onchange="updateQuantity(${itemPlaceInCart}, this.value)"
                class="cartWindowItemQuantity"
              >
              </span>
              <button onclick="deleteItemsshoppingCart(${itemPlaceInCart})">Remove</button> 
            </div>
            <br>
            </div>
        `;
            cartShoppingContainer.innerHTML += shoppingCartCode;
        });

    // Calculate and display the total price
    const boughtItemsTotal = shoppingCart.reduce((shoppingCartItemstotal, shoppingCartItem) => shoppingCartItemstotal + shoppingCartItem.price * shoppingCartItem.quantity, 0);
    const shoppingCartTotalCode = `
    <div class="cartWindowFooterTotal">
    <div class="footerTotalPrice">
      <hr>
      <h4>Total</h4>
      <div class="cartWindowItemprice">$${boughtItemsTotal}</div>
    </div>
    </div>
  `;
    cartShoppingContainer.innerHTML += shoppingCartTotalCode;

    updateShoppingCartItemsCount();  // Update the count of items in the shopping cart displayed in the header
}

// remove an item from the shopping cart
function deleteItemsshoppingCart(itemPlace) {
    shoppingCart.splice(itemPlace, 1);      // Remove the item from the cart array
    saveShoppingCartToLocalStorage(shoppingCart);       // Save the updated cart items to localStorage
    updateShoppingCartItemsCount();      // Update the count of items in the shopping cart displayed in the header
    showShoppingCartItems();        // Refresh the displayed cart items
}

// update the quantity of an item in the shopping cart
function updateShoppingCartItemsQuantity(itemPlace, updatedShoppingCartQuantity) {
    if (updatedShoppingCartQuantity < 1) {
        return;
    }

    shoppingCart[itemPlace].quantity = parseInt(updatedShoppingCartQuantity);   //Update the quantity of the item
    saveShoppingCartToLocalStorage(shoppingCart); // Save the updated cart items to localStorage
    showShoppingCartItems(); // Refresh the displayed cart items
}

// start the shopping cart from localStorage
function startShoppingCart() {
    shoppingCart = getShoppingCartFromLocalStorage();       // Retrieve the cart items from localStorage
    updateShoppingCartItemsCount();     // Update the count of items in the shopping cart displayed in the header
}

// Call the startShoppingCart function when the cart page is loaded
document.addEventListener('DOMContentLoaded', () => {          // "DOMContentLoaded" is an event that is triggered when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. It indicates that the DOM (Document Object Model) content is ready to be manipulated via JavaScript             
    startShoppingCart();

});

// redirect to the checkout page if the cart is not empty
function returnCheckout() {
    if (shoppingCart.length > 0) {
        window.location.href = 'checkout.html';     // Redirect to the checkout page
    } else {
        alert("Oops! Your cart seems to be feeling a bit light. Let's spice it up with some goodies before moving on to checkout!");
        window.location.href = 'shop.html';      // Redirect to the shop page
    }
}

// checkout form
document.addEventListener('DOMContentLoaded', function () {
    const shoppingCartForm = document.getElementById('paymentWindow');
    const continueCheckoutButton = document.getElementById('paymentConfirmButton');

    // check if the form is filled out
    function checkShoppinCartFormCompleted() {
        const formShoppingCartInputs = shoppingCartForm.querySelectorAll('input');
        let formCompleted = true;

        formShoppingCartInputs.forEach(input => {
            if (!input.value.trim()) {
                formCompleted = false;
            }
        });

        return formCompleted;
    }

    // enable or disable the submit button based on form status
    function updateCompleteButtonsituation() {
        continueCheckoutButton.disabled = !checkShoppinCartFormCompleted();
    }

    // Add event listeners to form inputs to update the submit button status
    shoppingCartForm.addEventListener('input', updateCompleteButtonsituation);

    // Initial check of the form status
    updateCompleteButtonsituation();
});

// document.getElementById('paymentWindow').addEventListener('submit', checkoutbutton);

// redirect to the checkout page if the cart is not empty
function redirectCheckout(event) {
    event.preventDefault(); // Prevent the default form submission
    ProcessOfCheckout();
}


// redirect to the checkout page if the cart is not empty
function ProcessOfCheckout() {
    if (shoppingCart.length > 0) {
        // Display the payment summary
        finalShowingPaymentDetails();

        // Clear the cart after successful submission
        shoppingCart = [];
        saveShoppingCartToLocalStorage(shoppingCart);       // Save the updated cart items to localStorage
        updateShoppingCartItemsCount();     // Update the count of items in the shopping cart displayed in the header
        showShoppingCartItems();        // Refresh the displayed cart items
    } else {
        alert('Your cart is empty. Please add items to the cart before proceeding to checkout.');       // Alert if the cart is empty
    }
}
