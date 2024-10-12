var spread_shop_config = {
    shopName: 'jiko-fuku',
    locale: 'us_US',
    prefix: 'https://jiko-fuku.myspreadshop.com',
    baseId: 'myShop',
    usePushState: true,
    updateMetadata: false
};
window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    document.title = "Jiko Fuku";
};
