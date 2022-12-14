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


/**
 * API Test
 * API Name : 상품정보 생성 API
 * [POST] /app/products
 */
exports.postProducts = async function (req, res) {

    const { companyIdx, productName, price } = req.body;
    const postProductsResponse = await productService.createProduct( companyIdx, productName, price );
    return res.send(postProductsResponse)
}


/**
 * API Test
 * API Name : 상품정보 변경 API
 * [PATCH] /app/products/{productIdx}
 */
exports.updateProducts = async function (req, res) {
    /**
     * Path Parameter : productIdx
     */
    const productIdx = req.params.productIdx;
    const { companyIdx, productName, price } = req.body;
    const updateProductsResponse = await productService.editProduct( companyIdx, productName, price, productIdx );
    return res.send(updateProductsResponse)
}