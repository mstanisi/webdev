const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    "Leviathan Wakes", "SpecOps", "Three Body Problem"
  ]
  res.render('books/index', { title: 'BookedIn || Books', books: books });
});

module.exports = router;