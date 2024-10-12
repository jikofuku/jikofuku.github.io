window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';  // Hide loader once the page is fully loaded

    // Re-set the title after Spreadshop has loaded
    document.title = "Jiko Fuku";  // Your custom title
};

var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false // Ensure Spreadshirt doesn't override your metadata
};

// Load the Spreadshop client script
var script = document.createElement('script');
script.src = 'https://jiko-fuku.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js';
script.defer = true; // Use defer to load the script after the document is parsed
document.body.appendChild(script);
