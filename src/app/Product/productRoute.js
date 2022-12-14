module.exports = function(app){
    const products = require('./productController');

    // 1. 상품 정보 조회 API
    app.get('/app/products', products.getProducts);

    // test : 상품 정보 생성 API
    app.post('/app/products', products.postProducts);

    // test : 상품 정보 변경 API
    app.patch('/app/products/:productIdx', products.updateProducts);

};