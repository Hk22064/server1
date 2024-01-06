// my-express-app/routes/registerRoute.js

const express = require('express');
const router = express.Router();

// ダミーのユーザーデータ（実際にはデータベースから取得）
const users = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // ユーザーがすでに存在するかどうかを確認する（例: 同じIDのユーザーがいないか）
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'このユーザー名は既に使用されています' });
  }

  // ユーザーをデータベースに追加する
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'ユーザー登録が完了しました' });
});

module.exports = router;
