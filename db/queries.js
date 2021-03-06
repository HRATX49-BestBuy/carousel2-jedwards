const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'aaflz4oqzh0le0.czkwyvdb9mxc.us-east-2.rds.amazonaws.com' || 'localhost',
  user: 'root',
  password: 'Unlucky1!',
  database: 'products',
  port: 3306,
});
 
connection.connect((err)=>{
  if (err){
    console.log('DB CONNECTION FAILED',err)
    return;
  }
  console.log('Connected to DB')
});
// retreives all the products from the database to populate component
const getProducts = (callback) => {
  connection.query('SELECT * FROM product', (error, result) => {
      if (error) {
          callback(error, null);
          console.error('error getting products at query level', error);
      } else {

          callback(null, result);
      }
  })
}

module.exports = {
  getProducts
}