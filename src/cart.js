let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');


let basket = JSON.parse(localStorage.getItem("data")) || [];

// ! Calculation of the cart .   
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x+y,0)
}

calculation();


//! we wil generate the cards in the card page.
let generateCardItems = () => {
    if (basket.length !== 0){

    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href ="index.html">
            <button class="HomeBtn">Back to Home</button>
        </a>
        `;
    }
}
generateCardItems();