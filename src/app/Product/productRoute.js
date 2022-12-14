module.exports = function(app){
    const products = require('./productController');

    // 1. 상품 정보 조회 API
    app.get('/app/products', products.getProducts);

    // // test : 구매자 생성 API
    // app.post('/app/buyers', buyer.postBuyers);

    // // test : 구매자 변경 API
    // app.patch('/app/buyers', buyer.updateBuyers);

};