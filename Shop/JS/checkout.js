document.getElementById('paymentWindow').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.querySelector('input[name="fullName"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const city = document.querySelector('input[name="city"]').value.trim();
    const country = document.querySelector('input[name="country"]').value.trim();
    const zip = document.querySelector('input[name="zip"]').value.trim();
    const cardName = document.querySelector('input[name="cardName"]').value.trim();
    const cardNumber = document.querySelector('input[name="cardNumber"]').value.trim();
    const expireMonth = document.querySelector('select[name="expireMonth"]').value.trim();
    const expireYear = document.querySelector('select[name="expireYear"]').value.trim();
    const cvv = document.querySelector('input[name="cvv"]').value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardNumberRegex = /^[0-9]+$/;
    const cvvRegex = /^[0-9]{3,4}$/;
    const zipRegex = /^[0-9]{1,4}$/;
    const cardNameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(fullName)) {
        alert('Your Full Name is invalid. Please enter only letters.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Your Email is invalid. Please enter a valid email address.');
        return;
    }

    if (!zipRegex.test(zip)) {
        alert('Your Zip code is invalid. Please enter a valid Zip code with up to 4 numbers.');
        return;
    }

    if (!cardNameRegex.test(cardName)) {
        alert('Your Name on Card is invalid. Please enter only letters.');
        return;
    }

    if (!cardNumberRegex.test(cardNumber)) {
        alert('Your Card Number is invalid. Please enter only numbers.');
        return;
    }

    if (!cvvRegex.test(cvv)) {
        alert('Your CVV is invalid. Please enter a valid CVV.');
        return;
    }



    // All validations pass
    alert('Payment successful!');
    window.location.href = 'shop.html';
});
