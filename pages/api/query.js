const db = require('../../database/connection');

 function getProducts(req, res) {
  const selectProducts = `
  SELECT * FROM products 
  `;
  return db.query(selectProducts)
  .then((res) => {
   return res.rows;
  })
}

module.exports = { getProducts }

