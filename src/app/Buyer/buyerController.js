const buyerProvider = require("./buyerProvider");
const buyerService = require("./buyerService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const {emit} = require("nodemon");


/**
 * API No. 0
 * API Name : 테스트 API
 * [GET] /app/test
 */
// exports.getTest = async function (req, res) {
//     return res.send(response(baseResponse.SUCCESS))
// }


/**
 * API No. 3
 * API Name : 구매자 조회 API
 * [GET] /app/buyers
 */
exports.getBuyers = async function (req, res) {

    const wholeBuyer = await buyerProvider.retrieveBuyer();
    return res.send(response(baseResponse.SUCCESS, wholeBuyer));
};


/**
 * API No. 4
 * API Name : 구매정보 조회 API
 * [GET] /app/buyinfo?code=
 */
exports.getBuyInfo = async function (req, res) {
    /**
     * Query String : code
     */
    const buyInfoNumber = req.query.code;

    if (!buyInfoNumber) {
        // 구매정보 전제 조회
        const wholeBuyInfoResult = await buyerProvider.retrieveBuyInfo();
        return res.send(response(baseResponse.SUCCESS, wholeBuyInfoResult));
    } else {
        // 구매번호당 구매정보, 총 가격, 구매번호 조회
        const elementBuyInfoResult = await buyerProvider.getElementBuyInfo(buyInfoNumber);
        const elementSumPriceResult = await buyerProvider.getElementSumPrice(buyInfoNumber);
        return res.send(response(baseResponse.SUCCESS, [elementBuyInfoResult, elementSumPriceResult]));
    }
};