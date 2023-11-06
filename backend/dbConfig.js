const { Pool } = require('pg');

const pool = new Pool({
  user: 'nishidakousei', // 実際のユーザー名に置き換える
  host: 'localhost',
  database: 'study_tracker', // 実際のデータベース名に置き換える
  password: 'kousei130505', // 実際のパスワードに置き換える
  port: 5432, // デフォルトのPostgreSQLポート
});

module.exports = pool;