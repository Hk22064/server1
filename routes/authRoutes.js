// my-express-app/routes/authRoutes.js

const express = require('express');
const router = express.Router();

// ダミーのユーザーデータ（実際にはデータベースから取得）
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // 他のユーザー情報...
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // ユーザーが存在するかチェック
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // ログイン成功時の処理
    res.status(200).json({ message: 'ログイン成功' });
  } else {
    // ログイン失敗時の処理
    res.status(401).json({ message: 'ログイン失敗' });
  }
});

module.exports = router;
