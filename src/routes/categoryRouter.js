const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

// GET: api/v1/category
router.get('/', categoryController.getAllCategories);

// GET: api/v1/category/:id
router.get('/:id', categoryController.getACategory);

// POST: api/v1/category
router.post('/', categoryController.addCategory);

// PUT: api/v1/category/:id
router.put('/:id', categoryController.updateCategory);

// DELETE: api/v1/category/:id
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;