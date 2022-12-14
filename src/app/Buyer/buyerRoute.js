module.exports = function(app){
    const buyer = require('./buyerController');

    // 3. 구매자 조회 API
    app.get('/app/buyers', buyer.getBuyers);

    // 4. 구매 정보 조회 API
    app.get('/app/buyinfo', buyer.getBuyInfo);

    // // test : 구매자 생성 API
    // app.post('/app/buyers', buyer.postBuyers);

    // // test : 구매자 변경 API
    // app.patch('/app/buyers', buyer.updateBuyers);

    // // test : 구매정보 생성 API
    // app.post('/app/buyinfo', buyer.postBuyInfo);

    // // test : 구매정보 변경 API
    // app.patch('/app/buyinfo', buyer.updateBuyInfo);

};