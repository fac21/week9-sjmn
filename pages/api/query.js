const db = require('../../database/connection');

 function getProducts() {
  const selectProducts = `
  SELECT * FROM products 
  `;
  return db.query(selectProducts)
  .then((res) => {
   return res.rows;
  })
 }

 function getProductById(id) {
  const selectProduct = `
  SELECT * FROM products WHERE id=$1
  `;
  return db.query(selectProduct, [id])
  .then((res) => {
   return res.rows[0];
  })
 }


module.exports = { getProducts, getProductById }

