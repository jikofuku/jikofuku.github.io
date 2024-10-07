// Spreadshop configuration
var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false  // Prevent Spreadshirt from changing the metadata
};

// Initialize Spreadshop after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the Spreadshop client when the script is loaded
    if (typeof SpreadshopClient !== 'undefined') {
        SpreadshopClient.init(spread_shop_config);
    } else {
        console.error('Spreadshop script not loaded.');
    }

    // Change the title after the DOM has fully loaded
    document.title = "Jiko Fuku";

    // Hide the loader once the page is fully loaded
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});
