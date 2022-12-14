const companyProvider = require("./companyProvider");
const companyService = require("./companyService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const {emit} = require("nodemon");


/**
 * API No. 2
 * API Name : 등록업체 조회 API
 * [GET] /app/company
 */
exports.getCompany = async function (req, res) {

    const wholeCompany = await companyProvider.retrieveCompany();
    return res.send(response(baseResponse.SUCCESS, wholeCompany));
};


/**
 * API Test
 * API Name : 등록업체 생성 API
 * [POST] /app/company
 */
exports.postCompany = async function (req, res) {

    const { companyName, ceoName, companyNum } = req.body;
    const postCompanyResponse = await companyService.createCompany( companyName, ceoName, companyNum );
    return res.send(postCompanyResponse)
}


/**
 * API Test
 * API Name : 등록업체 변경 API
 * [PATCH] /app/company/{companyIdx}
 */
exports.updateCompany = async function (req, res) {
    /**
     * Path Parameter : companyIdx
     */
    const companyIdx = req.params.companyIdx;
    const { companyName, ceoName, companyNum } = req.body;
    const updateCompanyResponse = await companyService.editCompany( companyName, ceoName, companyNum, companyIdx );
    return res.send(updateCompanyResponse)
}