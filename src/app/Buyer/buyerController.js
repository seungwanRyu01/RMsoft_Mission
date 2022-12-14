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


/**
 * API Test
 * API Name : 구매자 생성 API
 * [POST] /app/buyers
 */
exports.postBuyers = async function (req, res) {

    const { buyerName, buyerNum } = req.body;
    const postBuyerResponse = await buyerService.createBuyers( buyerName, buyerNum );
    return res.send(postBuyerResponse)
}


/**
 * API Test
 * API Name : 구매자 변경 API
 * [PATCH] /app/buyers/{buyerIdx}
 */
exports.updateBuyers = async function (req, res) {
    /**
     * Path Parameter : buyerIdx
     */
    const buyerIdx = req.params.buyerIdx;
    const { buyerName, buyerNum } = req.body;
    const updateBuyerResponse = await buyerService.editBuyers( buyerName, buyerNum, buyerIdx );
    return res.send(updateBuyerResponse)
}


/**
 * API Test
 * API Name : 구매정보 생성 API
 * [POST] /app/buyinfo
 */
exports.postBuyInfo = async function (req, res) {

    const { productIdx, buyerIdx, buyInfoNumber } = req.body;
    const postBuyInfoResponse = await buyerService.createBuyInfo( productIdx, buyerIdx, buyInfoNumber );
    return res.send(postBuyInfoResponse)
}


/**
 * API Test
 * API Name : 구매정보 수정 API
 * [PATCH] /app/buyinfo/{buyInfoIdx}
 */
exports.updateBuyInfo = async function (req, res) {
    /**
     * Path Parameter : buyInfoIdx
     */
    const buyInfoIdx = req.params.buyInfoIdx;
    const { productIdx, buyerIdx, buyInfoNumber } = req.body;
    const updateBuyInfoResponse = await buyerService.editBuyInfo( productIdx, buyerIdx, buyInfoNumber, buyInfoIdx );
    return res.send(updateBuyInfoResponse)
}