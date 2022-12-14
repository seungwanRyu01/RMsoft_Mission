const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const companyDao = require("./companyDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const crypto = require("crypto");
const {connect} = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리


// 등록업체 생성
exports.createCompany = async function (companyName, ceoName, companyNum) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const createCompanyResult = await companyDao.insertCompany(connection, companyName, ceoName, companyNum);
        const companyIdx = createCompanyResult.insertId;
        const result = { companyName, ceoName, companyNum, companyIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - createCompany Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};


// 등록업체 변경
exports.editCompany = async function (companyName, ceoName, companyNum, companyIdx) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const editCompanyResult = await companyDao.updateCompany(connection, companyName, ceoName, companyNum, companyIdx)
        const result = { companyName, ceoName, companyNum, companyIdx }
        connection.release();
        return response(baseResponse.SUCCESS, result);
    } catch (err) {
        logger.error(`App - editCompany Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}