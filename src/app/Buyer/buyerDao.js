// 구매자 정보 생성
async function insertBuyer(connection, buyerName, buyerNum) {
  const insertBuyerQuery = `
                    INSERT INTO buyer(buyerName, buyerNum)
                    VALUES (?, ?);
                `;
  const [insertBuyerRow] = await connection.query(insertBuyerQuery, [buyerName, buyerNum]);
  return insertBuyerRow;
}

// 구매자 정보 변경
async function updateBuyer(connection, buyerName, buyerNum, buyerIdx) {
  const updateBuyerQuery = `
                      UPDATE buyer
                      SET buyerName = ?, buyerNum = ?
                      WHERE buyerIdx = ?;
                `;
  const [updateBuyerRow] = await connection.query(updateBuyerQuery, [buyerName, buyerNum, buyerIdx]);
  return updateBuyerRow;
}

// 구매자 정보 조회
async function selectBuyer(connection) {
  const selectBuyerQuery = `
                    SELECT buyerName, replace(buyerNum, substring(buyerNum,11,2),'**') as buyerNum
                    FROM buyer;
                `;
  const [buyerRows] = await connection.query(selectBuyerQuery);
  return buyerRows;
}

// 구매정보 생성
async function insertBuyInfo(connection, productIdx, buyerIdx, buyInfoNumber) {
  const insertBuyInfoQuery = `
                    INSERT INTO buyinfo(productIdx, buyerIdx, buyInfoNumber)
                    VALUES (?, ?, ?);
                `;
  const [insertBuyInfoRow] = await connection.query(insertBuyInfoQuery, [productIdx, buyerIdx, buyInfoNumber]);
  return insertBuyInfoRow;
}

// 구매정보 변경
async function updateBuyInfo(connection, productIdx, buyerIdx, buyInfoNumber, buyInfoIdx) {
  const updateBuyInfoQuery = `
                      UPDATE buyinfo
                      SET productIdx = ?, buyerIdx = ?, buyInfoNumber = ?
                      WHERE buyInfoIdx = ?;
                `;
  const [updateBuyInfoRow] = await connection.query(updateBuyInfoQuery, [productIdx, buyerIdx, buyInfoNumber, buyInfoIdx]);
  return updateBuyInfoRow;
}

// 전체 구매 정보 조회
async function selectBuyInfo(connection) {
  const selectBuyInfoQuery = `
                      SELECT b.productName,
                              b.price,
                              date_format(b.registerDate, '%Y-%m-%d') as registerDate,
                              c.companyName,
                              d.buyerName,
                              replace(d.buyerNum, substring(d.buyerNum,11,2),'**') as buyerNum,
                              date_format(a.boughtDate, '%Y-%m-%d') as boughtDate,
                              a.buyInfoNumber
                      FROM buyinfo a
                      LEFT JOIN product b on a.productIdx = b.productIdx
                      LEFT JOIN company c on b.companyIdx = c.companyIdx
                      LEFT JOIN buyer d on a.buyerIdx = d.buyerIdx;
                `;
  const [selectBuyInfoRows] = await connection.query(selectBuyInfoQuery);
  return selectBuyInfoRows;
}

// 구매번호당 구매 정보 조회
async function selectElementBuyInfo(connection, buyInfoNumber) {
  const selectElementBuyInfoQuery = `
                      SELECT b.productName,
                              b.price,
                              date_format(b.registerDate, '%Y-%m-%d') as registerDate,
                              c.companyName,
                              d.buyerName,
                              replace(d.buyerNum, substring(d.buyerNum,11,2),'**') as buyerNum,
                              date_format(a.boughtDate, '%Y-%m-%d') as boughtDate
                      FROM buyinfo a
                      LEFT JOIN product b on a.productIdx = b.productIdx
                      LEFT JOIN company c on b.companyIdx = c.companyIdx
                      LEFT JOIN buyer d on a.buyerIdx = d.buyerIdx
                      WHERE a.buyInfoNumber = ?;
                `;
  const [selectElementBuyInfoRows] = await connection.query(selectElementBuyInfoQuery, buyInfoNumber);
  return selectElementBuyInfoRows;
}

// 구매번호당 총 가격, 구매번호 조회
async function selectElementSumPrice(connection, buyInfoNumber) {
  const selectElementSumPriceQuery = `
                      SELECT sum(b.price) as sumPrice, a.buyInfoNumber
                      FROM buyinfo a
                      LEFT JOIN product b on a.productIdx = b.productIdx
                      WHERE a.buyInfoNumber = ?
                      GROUP BY a.buyInfoNumber;
                `;
  const [selectElementSumPriceRows] = await connection.query(selectElementSumPriceQuery, buyInfoNumber);
  return selectElementSumPriceRows;
}


module.exports = {
  insertBuyer,
  updateBuyer,
  selectBuyer,
  insertBuyInfo,
  updateBuyInfo,
  selectBuyInfo,
  selectElementBuyInfo,
  selectElementSumPrice
};