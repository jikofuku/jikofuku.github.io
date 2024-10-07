// Spreadshop configuration
var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false,  // Prevent Spreadshirt from changing the metadata
};

// Title Override (ensure it runs after the Spreadshop loads)
window.onload = function() {
    document.title = "Jiko Fuku";  // Replace with your preferred title
};
