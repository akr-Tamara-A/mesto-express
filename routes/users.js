const router = require('express').Router();
const path = require('path');

const readFile = require('../utils/readFile.js');

const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');

/** Обработка запроса всех пользователей */
router.get('/users', (req, res) => {
  readFile(jsonDataPath).then((data) => {
    res.send(data);
  });
});

module.exports = router;
