const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// GET: api/v1/book
router.get('/', bookController.getAllBook);

// GET: api/v1/book/:id
router.get('/:id', bookController.getABook);

// POST: api/v1/book
router.post('/', bookController.addBook);

// PUT: api/v1/book/:id
router.put('/:id', bookController.updateBook);

// DELETE: api/v1/book/:id
router.delete('/:id', bookController.deleteBook);

module.exports = router;

