// Spreadshop configuration
var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: true,
};

// Script to hide loader after content is rendered
window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';  // Hide loader once the page is fully loaded
};
