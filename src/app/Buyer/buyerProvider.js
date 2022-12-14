const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const buyerDao = require("./buyerDao");

// Provider: Read 비즈니스 로직 처리

// 구매자 정보 조회
exports.retrieveBuyer = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieveBuyerResult = await buyerDao.selectBuyer(connection);
    connection.release();
    return retrieveBuyerResult;
};

// 전체 구매정보 조회
exports.retrieveBuyInfo = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const buyInfoResult = await buyerDao.selectBuyInfo(connection);
    connection.release();
    return buyInfoResult;
};

// 구매번호당 구매정보 조회
exports.getElementBuyInfo = async function (buyInfoNumber) {
    const connection = await pool.getConnection(async (conn) => conn);
    const getElementBuyInfoResult = await buyerDao.selectElementBuyInfo(connection, buyInfoNumber);
    connection.release();
    return getElementBuyInfoResult;
};

// 구매번호당 총 가격, 구매번호 조회
exports.getElementSumPrice = async function (buyInfoNumber) {
    const connection = await pool.getConnection(async (conn) => conn);
    const getElementSumPriceResult = await buyerDao.selectElementSumPrice(connection, buyInfoNumber);
    connection.release();
    return getElementSumPriceResult;
};