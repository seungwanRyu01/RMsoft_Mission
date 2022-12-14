// 상품 수 조회
async function selectProductCount(connection) {
    const selectProductCountQuery = `
                        SELECT COUNT(*) as total_product_count
                        FROM product;
                    `;
    const [selectProductCountRows] = await connection.query(selectProductCountQuery);
    return selectProductCountRows;
}

// 상품 정보 생성
async function insertProduct(connection, companyIdx, productName, price) {
    const insertProductQuery = `
                        INSERT INTO product(companyIdx, productName, price)
                        VALUES (?, ?, ?);
                    `;
    const [insertProductRow] = await connection.query(insertProductQuery, [companyIdx, productName, price]);
    return insertProductRow;
}

// 상품 정보 변경
async function updateProduct(connection, companyIdx, productName, price, productIdx) {
    const updateProductQuery = `
                        UPDATE product
                        SET companyIdx = ?, productName = ?, price = ?
                        WHERE productIdx = ?;
                    `;
    const [updateProductRow] = await connection.query(updateProductQuery, [companyIdx, productName, price, productIdx]);
    return updateProductRow;
}

// 상품 정보 조회
async function selectProduct(connection) {
    const selectProductQuery = `
                        SELECT a.productName, a.price, date_format(a.registerDate, '%Y-%m-%d') as registerDate, b.companyName
                        FROM product a
                        LEFT JOIN company b ON a.companyIdx = b.companyIdx;
                    `;
    const [selectProductRows] = await connection.query(selectProductQuery);
    return selectProductRows;
}


module.exports = {
    selectProductCount,
    insertProduct,
    updateProduct,
    selectProduct
};