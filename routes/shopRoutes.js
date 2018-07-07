const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: keys.mysqlPass,
  database: 'timelessSkin'
});

module.exports = app => {
  app.get(
    '/api/products',
    connection.query('SELECT * FROM PRODUCTS'),
    (req, res) => res.send(req)
  );
};
