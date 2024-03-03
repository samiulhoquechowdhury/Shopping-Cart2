// Function to create list items
function createListItems(items) {
    return items.map(item => `<li><a href="${item.url}">${item.name}</a></li>`).join("");
}

// Function to generate footer HTML
function generateFooterHTML(data) {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>Shop</h3>
                <ul>${createListItems(data.shop)}</ul>
            </div>
            <div class="footer-section">
                <h3>Customer Service</h3>
                <ul>${createListItems(data.customerService)}</ul>
            </div>
            <div class="footer-section">
                <h3>Stay Connected</h3>
                <ul>${createListItems(data.stayConnected)}</ul>
            </div>
            <div class="footer-section">
                <h3>About Us</h3>
                <ul>${createListItems(data.aboutUs)}</ul>
            </div>
        </div>
        <div class="payment-methods">
            <h3>Payment Methods</h3>
            <ul>${data.paymentMethods.map(method => `<li>${method}</li>`).join("")}</ul>
        </div>
        <p class="copyright">${data.copyright}</p>
    `;
}

// ! Call the function to generate footer HTML using data from data.js
generateFooterHTML(footerData);
