var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false // Ensure Spreadshirt doesn't override your metadata
};

window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide loader once the page is fully loaded

    // Re-set the title after Spreadshop has loaded
    document.title = "Jiko Fuku"; // Your custom title
};
