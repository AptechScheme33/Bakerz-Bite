let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

function addCartToHTML() {
    // Clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;

    // If has product in Cart
    if (listCart && listCart.length > 0) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML =
                    `<img src="${product.image}" alt="${product.name}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">Pkr ${product.price} each</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">Pkr ${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity += product.quantity;
                totalPrice += (product.price * product.quantity);
                
            }
        });
       
    }

    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = 'Pkr ' + totalPrice;
}

// Initial call to check the cart and add items to HTML
checkCart();
addCartToHTML();

// Handle the checkout button click
// document.getElementById('buttonCheckout').addEventListener('click', function() {
//     // Get values from input fields
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const country = document.getElementById('country').value;
//     const city = document.getElementById('city').value;

//     // Validate that all fields are filled
//     if (!name || !phone || !address || !country || !city) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // Proceed with the checkout process (e.g., sending the data to the server)
//     alert('Checkout process initiated for ' + name + '.');

//     // Redirect to a different page after checkout
//     window.location.href =  "thanku.html"; // Change this to your desired URL
// });

// Ensure the script runs after the DOM is loaded
// Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const buttonCheckout = document.getElementById('buttonCheckout');
    
    // Ensure the button is found
    if (buttonCheckout) {
        buttonCheckout.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const country = document.getElementById('country').value;
            const city = document.getElementById('city').value;

            // Validate that all fields are filled
            if (!name || !phone || !address || !country || !city) {
                alert('Please fill in all fields.');
                return;
            }

            // Proceed with the checkout process
            alert('Checkout process initiated for ' + name + '.');

            // Redirect to the 'thanku.html' page
            window.location.href = 'thanku.html'; // Change this to your desired URL
        });
    } else {
        console.log('Checkout button not found!');
    }
});

