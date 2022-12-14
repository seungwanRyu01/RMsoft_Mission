module.exports = function(app){
    const company = require('./companyController');

    // 2. 등록업체 조회 API
    app.get('/app/company', company.getCompany);

    // test : 등록업체 생성 API
    app.post('/app/company', company.postCompany);

    // test : 등록업체 변경 API
    app.patch('/app/company/:companyIdx', company.updateCompany);

};