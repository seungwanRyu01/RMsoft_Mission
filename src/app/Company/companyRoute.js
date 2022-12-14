module.exports = function(app){
    const company = require('./companyController');

    // 2. 등록업체 조회 API
    app.get('/app/company', company.getCompany);

    // // test : 구매자 생성 API
    // app.post('/app/buyers', buyer.postBuyers);

    // // test : 구매자 변경 API
    // app.patch('/app/buyers', buyer.updateBuyers);

};