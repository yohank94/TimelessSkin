const mysql = require('mysql');

const keys = require('../config/keys');

const state = {
  pool: null,
  mode: null
};

exports.connect = (mode, done) => {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'your_user',
    password: 'some_secret',
    database: 'timelessSkin'
  });

  state.mode = mode;
  done();
};

exports.get = () => state.pool;

exports.fixtures = data => {
  const pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  const names = Object.keys(data.tables);
  names.forEach((name, cb) => {
    data.tables[name].forEach((row, cb) => {
      const keys = Object.keys(row);
      const values = keys.map(key => "'" + row[key] + "'");

      pool.query(
        'INSERT INTO ' +
          name +
          ' (' +
          keys.join(',') +
          ') VALUES (' +
          values.join(',') +
          ')',
        cb
      );
    }, cb);
  }, done);
};

exports.drop = function(tables, done) {
  const pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  tabesl.foreach((name, cb) => {
    pool.query('DELETE * FROM ' + name, cb);
  }, done);
};
