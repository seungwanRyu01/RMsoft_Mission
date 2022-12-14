const productProvider = require("./productProvider");
const productService = require("./productService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const {emit} = require("nodemon");


/**
 * API No. 1
 * API Name : 상품정보 조회 API
 * [GET] /app/products
 */
exports.getProducts = async function (req, res) {

    const productCount = await productProvider.retrieveProductCount();
    const wholeProduct = await productProvider.retrieveProduct();
    return res.send(response(baseResponse.SUCCESS, [productCount, wholeProduct]));
};
