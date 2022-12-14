const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const productDao = require("./productDao");

// Provider: Read 비즈니스 로직 처리


// 상품 수 조회
exports.retrieveProductCount = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieveProductCountResult = await productDao.selectProductCount(connection);
    connection.release();
    return retrieveProductCountResult;
};

// 상품 정보 조회
exports.retrieveProduct = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieveProductResult = await productDao.selectProduct(connection);
    connection.release();
    return retrieveProductResult;
};