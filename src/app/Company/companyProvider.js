const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const companyDao = require("./companyDao");

// Provider: Read 비즈니스 로직 처리

// 등록업체 조회
exports.retrieveCompany = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrieveCompanyResult = await companyDao.selectCompany(connection);
    connection.release();
    return retrieveCompanyResult;
};