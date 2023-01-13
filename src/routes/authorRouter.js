const express = require('express');
const authorController = require('../controllers/authorController');
const router = express.Router();

// GET: api/v1/author
router.get('/', authorController.getAllAuthors);

// GET: api/v1/author/:id
router.get('/:id', authorController.getAAuthor);

// POST: api/v1/author
router.post('/', authorController.addAuthor);

// PUT: api/v1/author/:id
router.put('/:id', authorController.updateAuthor);

// DELETE: api/v1/author/:id
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;

