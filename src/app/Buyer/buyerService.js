const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const buyerDao = require("./buyerDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const crypto = require("crypto");
const {connect} = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리


// 구매자 생성
exports.createBuyers = async function (buyerName, buyerNum) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const buyerResult = await buyerDao.insertBuyer(connection, buyerName, buyerNum);
        const buyerIdx = buyerResult.insertId;
        const result = { buyerName, buyerNum, buyerIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - createBuyers Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};


// 구매자 변경
exports.editBuyers = async function (buyerName, buyerNum, buyerIdx) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const editBuyersResult = await buyerDao.updateBuyer(connection, buyerName, buyerNum, buyerIdx)
        const result = { buyerName, buyerNum, buyerIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - editBuyers Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}


// 구매정보 생성
exports.createBuyInfo = async function (productIdx, buyerIdx, buyInfoNumber) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const createBuyInfoResult = await buyerDao.insertBuyInfo(connection, productIdx, buyerIdx, buyInfoNumber);
        const buyInfoIdx = createBuyInfoResult.insertId;
        const result = { productIdx, buyerIdx, buyInfoNumber, buyInfoIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - createBuyInfo Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};


// 구매정보 변경
exports.editBuyInfo = async function (productIdx, buyerIdx, buyInfoNumber, buyInfoIdx) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const editBuyInfoResult = await buyerDao.updateBuyInfo(connection, productIdx, buyerIdx, buyInfoNumber, buyInfoIdx)
        const result = { productIdx, buyerIdx, buyInfoNumber, buyInfoIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - editBuyInfo Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}