// Spreadshop configuration
var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false,  // Prevent Spreadshirt from changing the metadata
};

// Listen for when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Change the title after the DOM has fully loaded
    document.title = "Jiko Fuku";  // Replace with your preferred title

    // Hide the loader once the page is fully loaded
    const loader = document.getElementById('loader');
    loader.style.display = 'none';  // Hide loader
});
