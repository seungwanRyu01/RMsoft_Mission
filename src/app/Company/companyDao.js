// 등록업체 생성
async function insertCompany(connection, companyName, ceoName, companyNum) {
    const insertCompanyQuery = `
                        INSERT INTO company(companyName, ceoName, companyNum)
                        VALUES (?, ?, ?);
                    `;
    const [insertCompanyRow] = await connection.query(insertCompanyQuery, [companyName, ceoName, companyNum]);
    return insertCompanyRow;
}

// 등록업체 변경
async function updateCompany(connection, companyName, ceoName, companyNum) {
    const updateCompanyQuery = `
                        UPDATE company
                        SET companyName = ?, ceoName = ?, companyNum = ?
                        WHERE buyerIdx = ?;
                    `;
    const [updateCompanyRow] = await connection.query(updateCompanyQuery, [companyName, ceoName, companyNum]);
    return updateCompanyRow;
}

// 등록업체 조회
async function selectCompany(connection) {
    const selectCompanyQuery = `
                        SELECT companyName, ceoName, companyNum
                        FROM company;
                    `;
    const [selectCompanyRows] = await connection.query(selectCompanyQuery);
    return selectCompanyRows;
}


module.exports = {
    insertCompany,
    updateCompany,
    selectCompany
};