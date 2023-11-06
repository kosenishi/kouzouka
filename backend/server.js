// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// ミドルウェアの設定
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静的ファイルのルート設定
app.use(express.static('..'));

// サーバーのポート設定と起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});







