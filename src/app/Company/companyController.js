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
