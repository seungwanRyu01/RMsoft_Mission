const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const productDao = require("./productDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const crypto = require("crypto");
const {connect} = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리


// 상품정보 생성
exports.createProduct = async function (companyIdx, productName, price) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const createProductResult = await productDao.insertProduct(connection, companyIdx, productName, price);
        const productIdx = createProductResult.insertId;
        const result = { companyIdx, productName, price, productIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - createProduct Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};


// 상품정보 변경
exports.editProduct = async function (companyIdx, productName, price, productIdx) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const editProductResult = await productDao.updateProduct(connection, companyIdx, productName, price, productIdx)
        const result = { companyIdx, productName, price, productIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - editProduct Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}